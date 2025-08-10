import { Facebook, Twitter, Linkedin, Instagram, Phone, MessageCircle, Youtube } from "lucide-react"

export function SocialBar() {
  return (
    <>
      {/* Desktop vertical bar */}
      <div
        className="
          fixed z-50
          top-1/3 left-0
          flex flex-col
          bg-white/80 rounded-r-lg shadow-lg px-2 py-3
          gap-4
          hidden
          sm:flex
        "
      >
        <a href="https://facebook.com/solardealsindia" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-110 transition-all duration-300 group">
          <Facebook className="h-6 w-6 text-gray-600 group-hover:text-[#4b69b1] transition-colors" />
        </a>
        <a href="https://twitter.com/solardealsindia" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:scale-110 transition-all duration-300 group">
          <Youtube className="h-6 w-6 text-gray-600 group-hover:text-[#a10202] transition-colors" />
        </a>
        <a href="https://linkedin.com/company/solardealsindia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-all duration-300 group">
          <Linkedin className="h-6 w-6 text-gray-600 group-hover:text-[#0477b5] transition-colors" />
        </a>
        <a href="https://instagram.com/solardealsindia" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition-all duration-300 group">
          <Instagram className="h-6 w-6 text-gray-600 group-hover:text-[#c9345a] transition-colors" />
        </a>
      </div>
      
      {/* Desktop Social Media Icons */}
      <div className="hidden md:flex fixed bottom-4 right-4 z-50 flex-col gap-3">
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919876543210?text=Hi! I'm interested in solar solutions from Chairbord Solar. Can you help me get a quote?" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="WhatsApp"
          className="rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png"
            alt="WhatsApp"
            className="h-12 w-12"
          />
        </a>
        
        {/* Call Button */}
        <a 
          href="tel:+919876543210" 
          aria-label="Call us"
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>

      
      {/* Mobile horizontal bar */}
      <div
        className="
          fixed z-50
          bottom-0 left-0 w-full
          flex flex-row justify-center items-center
          bg-white/90 shadow-t
          gap-8 py-2
          sm:hidden
        "
      >
        <a href="https://facebook.com/solardealsindia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Facebook className="h-6 w-6 text-gray-600 hover:text-orange-600 transition-colors" />
        </a>
        <a href="https://twitter.com/solardealsindia" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <Youtube className="h-6 w-6 text-gray-600 hover:text-red-600 transition-colors" />
        </a>
         {/* WhatsApp Button */}
         <a 
          href="https://wa.me/919876543210?text=Hi! I'm interested in solar solutions from Chairbord Solar. Can you help me get a quote?" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="WhatsApp"
          className="rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCSrmB1tkQjWMLAv9DkxjTB8erZ3zpBG9-Q&s"
            alt="WhatsApp"
            className="h-6 w-6"
          />
        </a>
        
        {/* Call Button */}
        <a href="tel:+919876543210" target="_blank" rel="noopener noreferrer" aria-label="Call us">
          <Phone className="h-6 w-6 text-gray-600 hover:text-blue-600 transition-colors" />
        </a>
        <a href="https://linkedin.com/company/solardealsindia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-6 w-6 text-gray-600 hover:text-orange-600 transition-colors" />
        </a>
        <a href="https://instagram.com/solardealsindia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="h-6 w-6 text-gray-600 hover:text-orange-600 transition-colors" />
        </a>
      </div>
    </>
  )
}