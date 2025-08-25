"use client"

import { useState } from "react"
import { Filter, Grid, List, Search, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LeadModal } from "@/components/lead-modal"
import { useLeadModal } from "@/hooks/use-lead-modal"
import { useParams } from "next/navigation"

const products = [
  {
    id: 1,
    name: "VSOLE VS-201S 2kW Single Phase MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 17480,
    originalPrice: 18400,
    rating: 4.5,
    reviews: 150,
    image: "https://m.media-amazon.com/images/I/51D02urJ4gL.jpg",
    category: "Solar-Inverters",
    capacity: "2KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 2,
    name: "VSOLE VS-301S 3kW Single Phase MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 17995,
    originalPrice: 18942,
    rating: 4.6,
    reviews: 180,
    image: "https://m.media-amazon.com/images/I/51D02urJ4gL.jpg",
    category: "Solar-Inverters",
    capacity: "3KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 3,
    name: "VSOLE VS-341S 3.4kW Single Phase MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 18081,
    originalPrice: 19033,
    rating: 4.6,
    reviews: 185,
    image: "https://m.media-amazon.com/images/I/51D02urJ4gL.jpg",
    category: "Solar-Inverters",
    capacity: "3.4KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 4,
    name: "VSOLE VS-361S 3.6kW Single Phase MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 19700,
    originalPrice: 20737,
    rating: 4.6,
    reviews: 190,
    image: "https://m.media-amazon.com/images/I/51D02urJ4gL.jpg",
    category: "Solar-Inverters",
    capacity: "3.6KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 5,
    name: "VSOLE VS-422S 4kW Single Phase MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 23248,
    originalPrice: 24472,
    rating: 4.7,
    reviews: 200,
    image: "https://m.media-amazon.com/images/I/51D02urJ4gL.jpg",
    category: "Solar-Inverters",
    capacity: "4KW",
    warranty: "10 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 6,
    name: "VSOLE VS-422S 4.2kW Single Phase MPPT Grid Tie Inverter with 8 Mono Panels",
    brand: "VSOLE",
    price: 23860,
    originalPrice: 25116,
    rating: 4.7,
    reviews: 205,
    image: "https://m.media-amazon.com/images/I/51D02urJ4gL.jpg",
    category: "Solar-Inverters",
    capacity: "4.2KW",
    warranty: "10 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 7,
    name: "VSOLE VS-502S 5kW Single Phase MPPT Grid Tie Inverter with 9 Mono Panels",
    brand: "VSOLE",
    price: 29880,
    originalPrice: 31453,
    rating: 4.8,
    reviews: 220,
    image: "https://m.media-amazon.com/images/I/51D02urJ4gL.jpg",
    category: "Solar-Inverters",
    capacity: "5KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 8,
    name: "VSOLE VS-542S 5.4kW Single Phase MPPT Grid Tie Inverter with 10 Mono Panels",
    brand: "VSOLE",
    price: 30459,
    originalPrice: 32062,
    rating: 4.8,
    reviews: 225,
    image: "https://m.media-amazon.com/images/I/51D02urJ4gL.jpg",
    category: "Solar-Inverters",
    capacity: "5.4KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 9,
    name: "VSOLE VS-602S 6kW Single Phase Dual MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 31683,
    originalPrice: 33350,
    rating: 4.8,
    reviews: 230,
    image: "https://m.media-amazon.com/images/I/51D02urJ4gL.jpg",
    category: "Solar-Inverters",
    capacity: "6KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 10,
    name: "VSOLE VS-422S 4.2kW Single Phase Dual MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 30590,
    originalPrice: 32200,
    rating: 4.7,
    reviews: 210,
    image: "https://m.media-amazon.com/images/I/51D02urJ4gL.jpg",
    category: "Solar-Inverters",
    capacity: "4.2KW",
    warranty: "10 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 11,
    name: "VSOLE VS-502S 5kW Single Phase Dual MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 31936,
    originalPrice: 33617,
    rating: 4.8,
    reviews: 220,
    image: "https://m.media-amazon.com/images/I/51D02urJ4gL.jpg",
    category: "Solar-Inverters",
    capacity: "5KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 12,
    name: "VSOLE VS-542S 5.4kW Single Phase Dual MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 32315,
    originalPrice: 34016,
    rating: 4.8,
    reviews: 225,
    image: "https://m.media-amazon.com/images/I/51D02urJ4gL.jpg",
    category: "Solar-Inverters",
    capacity: "5.4KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 13,
    name: "VSOLE VS-602S 6kW Single Phase Dual MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 32511,
    originalPrice: 34222,
    rating: 4.8,
    reviews: 230,
    image: "https://m.media-amazon.com/images/I/51D02urJ4gL.jpg",
    category: "Solar-Inverters",
    capacity: "6KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 14,
    name: "VSOLE VS-422S 4kW Three Phase MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 46749,
    originalPrice: 49209,
    rating: 4.7,
    reviews: 200,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "4KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 15,
    name: "VSOLE VS-502S 5kW Three Phase MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 47109,
    originalPrice: 49588,
    rating: 4.8,
    reviews: 220,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "5KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 16,
    name: "VSOLE VS-602S 6kW Three Phase MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 48070,
    originalPrice: 50600,
    rating: 4.8,
    reviews: 230,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "6KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 17,
    name: "VSOLE VS-072T 7kW Three Phase MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 49620,
    originalPrice: 52232,
    rating: 4.8,
    reviews: 235,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "7KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 18,
    name: "VSOLE VS-082T 8kW Three Phase MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 50326,
    originalPrice: 52975,
    rating: 4.8,
    reviews: 240,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "8KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 19,
    name: "VSOLE VS-102T 10kW Three Phase MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 51074,
    originalPrice: 53762,
    rating: 4.9,
    reviews: 250,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "10KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 20,
    name: "VSOLE VS-422S 4kW Three Phase Dual MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 49307,
    originalPrice: 51902,
    rating: 4.7,
    reviews: 200,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "4KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 21,
    name: "VSOLE VS-502S 5kW Three Phase Dual MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 49435,
    originalPrice: 52037,
    rating: 4.8,
    reviews: 220,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "5KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 22,
    name: "VSOLE VS-602S 6kW Three Phase Dual MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 50233,
    originalPrice: 52877,
    rating: 4.8,
    reviews: 230,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "6KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 23,
    name: "VSOLE VS-072T 7kW Three Phase Dual MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 50827,
    originalPrice: 53502,
    rating: 4.8,
    reviews: 235,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "7KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 24,
    name: "VSOLE VS-082T 8kW Three Phase Dual MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 51348,
    originalPrice: 54050,
    rating: 4.8,
    reviews: 240,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "8KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 25,
    name: "VSOLE VS-102T 10kW Three Phase Dual MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 52440,
    originalPrice: 55200,
    rating: 4.9,
    reviews: 250,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "10KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 26,
    name: "VSOLE VS-122T 12kW Three Phase Dual MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 58683,
    originalPrice: 61824,
    rating: 4.9,
    reviews: 260,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "12KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 27,
    name: "VSOLE VS-152T 15kW Three Phase Dual MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 65987,
    originalPrice: 69460,
    rating: 4.9,
    reviews: 270,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "15KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 28,
    name: "VSOLE VS-182T 18kW Three Phase Dual MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 74640,
    originalPrice: 78568,
    rating: 4.9,
    reviews: 280,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "18KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 29,
    name: "VSOLE VS-202T 20kW Three Phase Dual MPPT Grid Tie Inverter (VSM)",
    brand: "VSOLE",
    price: 76475,
    originalPrice: 80500,
    rating: 4.9,
    reviews: 290,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "20KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 30,
    name: "VSOLE VS-202T 20kW Three Phase Dual MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 78555,
    originalPrice: 82742,
    rating: 4.9,
    reviews: 290,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "20KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 31,
    name: "VSOLE VS-252T 25kW Three Phase Dual MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 87126,
    originalPrice: 91712,
    rating: 4.9,
    reviews: 300,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "25KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 32,
    name: "VSOLE VS-302T 30kW Three Phase Dual MPPT Grid Tie Inverter (VSM)",
    brand: "VSOLE",
    price: 104006,
    originalPrice: 109480,
    rating: 4.9,
    reviews: 310,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "30KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 33,
    name: "VSOLE VS-302T 30kW Three Phase Dual MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 116242,
    originalPrice: 122360,
    rating: 4.9,
    reviews: 310,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "30KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 34,
    name: "VSOLE VS-352T 35kW Three Phase Dual MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 123549,
    originalPrice: 130052,
    rating: 4.9,
    reviews: 320,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "35KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 35,
    name: "VSOLE VS-403T 40kW Three Phase Dual MPPT Grid Tie Inverter (VSM)",
    brand: "VSOLE",
    price: 148078,
    originalPrice: 155872,
    rating: 4.9,
    reviews: 330,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "40KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 36,
    name: "VSOLE VS-403T 40kW Three Phase Three MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 160314,
    originalPrice: 168752,
    rating: 4.9,
    reviews: 330,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "40KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 37,
    name: "VSOLE VS-503T 50kW Three Phase Three MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 169446,
    originalPrice: 178364,
    rating: 4.9,
    reviews: 340,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "50KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 38,
    name: "VSOLE VS-604T 60kW Three Phase Three MPPT Grid Tie Inverter (VSM)",
    brand: "VSOLE",
    price: 177422,
    originalPrice: 186760,
    rating: 4.9,
    reviews: 350,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "60KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 39,
    name: "VSOLE VS-604T 60kW Three Phase Four MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 189734,
    originalPrice: 199720,
    rating: 4.9,
    reviews: 350,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "60KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 40,
    name: "VSOLE VS-704T 70kW Three Phase Four MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 210512,
    originalPrice: 221592,
    rating: 4.9,
    reviews: 360,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "70KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 41,
    name: "VSOLE VS-804T 80kW Three Phase Four MPPT Grid Tie Inverter (VSM)",
    brand: "VSOLE",
    price: 228920,
    originalPrice: 240968,
    rating: 4.9,
    reviews: 370,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "80KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 42,
    name: "VSOLE VS-804T 80kW Three Phase Four MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 246035,
    originalPrice: 258984,
    rating: 4.9,
    reviews: 370,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "80KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 43,
    name: "VSOLE VS-1004T 100kW Three Phase Four MPPT Grid Tie Inverter (VSM)",
    brand: "VSOLE",
    price: 266752,
    originalPrice: 280792,
    rating: 4.9,
    reviews: 380,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "100KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 44,
    name: "VSOLE VS-1004T 100kW Three Phase Six MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 279026,
    originalPrice: 293712,
    rating: 4.9,
    reviews: 380,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "100KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 45,
    name: "VSOLE VS-1106T 110kW Three Phase Six MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 292440,
    originalPrice: 307832,
    rating: 4.9,
    reviews: 390,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "110KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 46,
    name: "VSOLE VS-1206T 120kW Three Phase Six MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 316988,
    originalPrice: 333672,
    rating: 4.9,
    reviews: 400,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "120KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 47,
    name: "VSOLE VS-1256T 125kW Three Phase Six MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 329148,
    originalPrice: 346472,
    rating: 4.9,
    reviews: 410,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "125KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 48,
    name: "VSOLE VS-1308T 135kW Three Phase Eight MPPT Grid Tie Inverter",
    brand: "VSOLE",
    price: 353658,
    originalPrice: 372272,
    rating: 4.9,
    reviews: 420,
    image: "https://www.vsolesolar.com/wp-content/uploads/2024/04/hybrid-12kw.png",
    category: "Solar-Inverters",
    capacity: "135KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true
  },
  {
    id: 49,
    name: "VSOLE Smart Energy Meter",
    brand: "VSOLE",
    price: 5000,
    originalPrice: 5500,
    rating: 4.5,
    reviews: 100,
    image: "https://example.com/meter.jpg",
    category: "Solar-Meters",
    type: "Smart Meter",
    warranty: "3 Years",
    madeInIndia: true
  },
  {
    id: 50,
    name: "VSOLE 500W Mono Solar Panel",
    brand: "VSOLE",
    price: 12000,
    originalPrice: 13000,
    rating: 4.7,
    reviews: 150,
    image: "https://example.com/panel.jpg",
    category: "Solar-Panels",
    wattage: "500W",
    efficiency: "21%",
    warranty: "25 Years",
    madeInIndia: true
  }
];

export default function ProductsPage() {
  const params = useParams()
  const category = params.category as string
  const normalizedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 400000])
  const [sortBy, setSortBy] = useState("popularity")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const { isOpen, openModal, closeModal, modalProps } = useLeadModal()

  const brands = [...new Set(products.map((p) => p.brand))]
  const categories = [...new Set(products.map((p) => p.category))]

  // Validate category
  const validCategories = categories.map(c => c.toLowerCase())
  if (!validCategories.includes(category.toLowerCase())) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-center">
          <h1 className="text-2xl font-bold">Category Not Found</h1>
          <p className="text-gray-500 mt-2">The category "{category}" does not exist.</p>
        </div>
        <Footer />
      </div>
    )
  }

  const filteredProducts = products.filter((product) => {
    const matchesCategory = product.category.toLowerCase() === category.toLowerCase()
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

    return matchesCategory && matchesSearch && matchesBrand && matchesPrice
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") {
      return a.price - b.price
    } else if (sortBy === "price-high") {
      return b.price - a.price
    } else if (sortBy === "rating") {
      return b.rating - a.rating
    } else {
      return b.reviews - a.reviews
    }
  })

  const handleGetQuote = (productName: string) => {
    openModal({
      title: `Get Quote for ${productName}`,
      subtitle: "Fill in your details and we'll provide you with the best pricing and installation options",
      source: `product_page_${category.toLowerCase()}`,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          <div className="lg:w-64 space-y-4 sm:space-y-6">
            <Card>
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Filter className="h-4 w-4 sm:h-5 sm:w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Search {normalizedCategory}</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder={`Search ${normalizedCategory.toLowerCase()}...`}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Brands</label>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={brand}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedBrands([...selectedBrands, brand])
                            } else {
                              setSelectedBrands(selectedBrands.filter((b) => b !== brand))
                            }
                          }}
                        />
                        <label htmlFor={brand} className="text-sm">
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={400000}
                    min={0}
                    step={1000}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl sm:text-2xl font-bold">{normalizedCategory}</h1>
                <span className="text-sm text-gray-600">{filteredProducts.length} products found</span>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="flex-1 sm:flex-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="flex-1 sm:flex-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div
              className={
                viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6" : "space-y-4"
              }
            >
              {sortedProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="rounded-lg w-full h-40 sm:h-48 object-cover"
                      />
                      {product.madeInIndia && (
                        <Badge className="absolute top-2 right-2 bg-green-600 text-xs">Made in India</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 sm:space-y-3">
                      <div>
                        <a href={`#${product.category.replace(/\s+/g, '').toLowerCase()}`} className="font-semibold text-base sm:text-lg line-clamp-2 hover:text-orange-600 transition-colors">
                          {product.name}
                        </a>
                        <p className="text-sm text-gray-600">{product.brand}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium ml-1">{product.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-orange-600">₹{product.price.toLocaleString()}</span>
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600">
                        {product.category === "Solar Panels" && (
                          <div>
                            <span>
                              • {product.wattage} • {product.efficiency} Efficiency
                            </span>
                          </div>
                        )}
                        {product.category === "Inverters" && (
                          <div>
                            <span>
                              • {product.capacity} • {product.technology} Technology
                            </span>
                          </div>
                        )}
                        {product.category === "Meters" && (
                          <div>
                            <span>
                              • {product.type}
                            </span>
                          </div>
                        )}
                        <div>• {product.warranty} Warranty</div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 pt-2">
                        <Button className="flex-1 h-9 sm:h-10 text-sm" onClick={() => handleGetQuote(product.name)}>
                          Get Quote
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No {normalizedCategory.toLowerCase()} found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedBrands([])
                    setPriceRange([0, 400000])
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <LeadModal
        isOpen={isOpen}
        onClose={closeModal}
        title={modalProps.title}
        subtitle={modalProps.subtitle}
        source={modalProps.source}
      />
      <Footer />
    </div>
  )
}