"use client"

import { Button } from "@/components/ui/button"
import { LeadModal } from "@/components/lead-modal"
import { useLeadModal } from "@/hooks/use-lead-modal"

interface CompanyLeadSectionProps {
  companyName: string
}

export function CompanyLeadSection({ companyName }: CompanyLeadSectionProps) {
  const { isOpen, openModal, closeModal, modalProps } = useLeadModal()

  const handleGetQuote = () => {
    openModal({
      title: `Get Quote from ${companyName}`,
      subtitle: `Connect with ${companyName} for personalized solar solutions and competitive pricing`,
      source: "company_page",
    })
  }

  return (
    <>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          View Products
        </Button>
        <Button size="sm" onClick={handleGetQuote}>
          Get Quote
        </Button>
      </div>
      <LeadModal
        isOpen={isOpen}
        onClose={closeModal}
        title={modalProps.title}
        subtitle={modalProps.subtitle}
        source={modalProps.source}
      />
    </>
  )
}
