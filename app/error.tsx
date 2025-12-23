"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary text-white">
      <div className="text-center max-w-md p-6">
        <h1 className="text-4xl font-display font-bold mb-4 text-accent-orange">Something went wrong</h1>
        <p className="text-zinc-300 mb-8">We apologize for the inconvenience. An unexpected error has occurred.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            className="bg-accent-purple hover:bg-accent-orange text-white rounded-xl px-6 py-3 transition-all duration-300"
          >
            Try again
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-accent-purple text-white rounded-xl px-6 py-3 transition-all duration-300"
          >
            <Link href="/">Go back home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
