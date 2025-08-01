"use client"

import { Calculator, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LeadModal } from "@/components/lead-modal"
import { useLeadModal } from "@/hooks/use-lead-modal"

interface HomeLeadSectionProps {
  variant?: "hero" | "cta"
}

export function HomeLeadSection({ variant = "hero" }: HomeLeadSectionProps) {
  const { isOpen, openModal, closeModal, modalProps } = useLeadModal()

  const handleCalculatorClick = () => {
    openModal({
      title: "Get Started with Solar Calculator",
      subtitle: "Tell us about your requirements to get accurate solar estimates",
      source: "calculator_cta",
    })
  }

  const handleGetRecommendations = () => {
    openModal({
      title: "Get Personalized Solar Recommendations",
      subtitle: "Our experts will recommend the best solar solution for your home",
      source: "recommendations_cta",
    })
  }

  if (variant === "cta") {
    return (
      <>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" onClick={handleCalculatorClick}>
            <Calculator className="mr-2 h-5 w-5" />
            Calculate Your Savings
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            onClick={handleGetRecommendations}
          >
            Get Recommendations
          </Button>
        </div>
        <LeadModal
          isOpen={isOpen}
          onClose={closeModal}
          title={modalProps.title}
          subtitle={modalProps.subtitle}
          source={modalProps.source}
          onSubmit={(data) => {
            if (data.source === "calculator_cta") {
              // Redirect to calculator after form submission
              setTimeout(() => {
                window.location.href = "/calculator"
              }, 2500)
            } else if (data.source === "recommendations_cta") {
              // Redirect to recommendations after form submission
              setTimeout(() => {
                window.location.href = "/recommendations"
              }, 2500)
            }
          }}
        />
      </>
    )
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
        <Button
          size="lg"
          className="bg-orange-600 hover:bg-orange-700 h-12 sm:h-14 text-sm sm:text-base"
          onClick={handleCalculatorClick}
        >
          <Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
          Free Site Visit
        </Button>
      </div>
      <LeadModal
        isOpen={isOpen}
        onClose={closeModal}
        title={modalProps.title}
        subtitle={modalProps.subtitle}
        source={modalProps.source}
        onSubmit={(data) => {
          if (data.source === "calculator_cta") {
            // Redirect to calculator after form submission
            setTimeout(() => {
              window.location.href = "/calculator"
            }, 2500)
          }
        }}
      />
    </>
  )
}
