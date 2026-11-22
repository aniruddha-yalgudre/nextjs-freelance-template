"use client"

import { useEffect, type ReactNode } from "react"
import Lenis from "lenis"

import { gsap, ScrollTrigger } from "@/lib/animations/gsap"

type AnimationProviderProps = {
  children: ReactNode
  smoothScroll?: boolean
}

export function AnimationProvider({
  children,
  smoothScroll = false,
}: AnimationProviderProps) {
  useEffect(() => {
    if (!smoothScroll) return

    // Respect the user's reduced-motion preference.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    )

    if (prefersReducedMotion.matches) return

    // Initialize Lenis.
    const lenis = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      syncTouch: false,
    })

    // Synchronize Lenis with GSAP ScrollTrigger.
    const onScroll = () => {
      ScrollTrigger.update()
    }

    lenis.on("scroll", onScroll)

    // Use GSAP's ticker as the single animation loop.
    const update = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)

    // Prevent lag between Lenis and GSAP.
    gsap.ticker.lagSmoothing(0)

    // Refresh scroll positions after initialization.
    const refreshFrame = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    return () => {
      cancelAnimationFrame(refreshFrame)

      // Remove the GSAP ticker callback.
      gsap.ticker.remove(update)

      // Destroy Lenis and its event listeners.
      lenis.destroy()

      // Restore GSAP's default lag smoothing.
      gsap.ticker.lagSmoothing(500, 33)
    }
  }, [smoothScroll])

  return <>{children}</>
}
