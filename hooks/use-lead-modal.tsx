"use client"

import { useState } from "react"

export function useLeadModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalProps, setModalProps] = useState({
    title: "Get Your Free Solar Quote",
    subtitle: "Fill in your details and our solar experts will contact you within 24 hours",
    source: "general",
  })

  const openModal = (props?: Partial<typeof modalProps>) => {
    if (props) {
      setModalProps((prev) => ({ ...prev, ...props }))
    }
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return {
    isOpen,
    openModal,
    closeModal,
    modalProps,
  }
}
