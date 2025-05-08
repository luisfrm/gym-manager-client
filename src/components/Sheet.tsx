'use client'

import { Menu } from 'lucide-react'

interface SheetProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  title?: string
  description?: string
}

export function Sheet({ isOpen, onOpenChange, children, title, description }: SheetProps) {
  return (
    <>
      <button
        type="button"
        onClick={() => onOpenChange(true)}
        className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
        aria-expanded={isOpen}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle Menu</span>
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" aria-hidden="true" onClick={() => onOpenChange(false)} />
      )}
      
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[300px] sm:w-[400px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        aria-describedby="sheet-description"
      >
        <div className="flex h-full flex-col overflow-y-auto py-6 px-4 sm:px-6">
          <div className="flex items-start justify-between">
            {title && (
              <h2 id="sheet-title" className="text-lg font-medium text-gray-900 sr-only">
                {title}
              </h2>
            )}
            {description && (
              <p id="sheet-description" className="text-sm text-gray-500 sr-only">
                {description}
              </p>
            )}
            <button
              type="button"
              className="ml-auto flex h-7 w-7 items-center justify-center rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={() => onOpenChange(false)}
            >
              <span className="sr-only">Close panel</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flex-1">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
