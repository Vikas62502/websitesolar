import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

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
        <a href="https://facebook.com/solardealsindia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Facebook className="h-6 w-6 text-gray-600 hover:text-orange-600 transition-colors" />
        </a>
        <a href="https://twitter.com/solardealsindia" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <Twitter className="h-6 w-6 text-gray-600 hover:text-orange-600 transition-colors" />
        </a>
        <a href="https://linkedin.com/company/solardealsindia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-6 w-6 text-gray-600 hover:text-orange-600 transition-colors" />
        </a>
        <a href="https://instagram.com/solardealsindia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="h-6 w-6 text-gray-600 hover:text-orange-600 transition-colors" />
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
        <a href="https://twitter.com/solardealsindia" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <Twitter className="h-6 w-6 text-gray-600 hover:text-orange-600 transition-colors" />
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