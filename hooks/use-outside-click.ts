"use client"

import type React from "react"
import { useEffect } from "react"

export function useOutsideClick(ref: React.RefObject<HTMLElement>, callback: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    // Only add the event listener in the browser environment
    if (typeof window !== "undefined") {
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
    return undefined
  }, [ref, callback])
}
