"use client"

import { useRef } from "react"
import { gsap, useGSAP } from "@/hooks/use-gsap"

export default function HeroPage() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from("[data-hero-title]", {
        y: 60,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from("[data-hero-description]", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      })
    },
    {
      scope: container,
    },
  )

  return (
    <section
      ref={container}
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <h1 data-hero-title className="text-6xl font-bold">
        Creative Development.
      </h1>

      <p data-hero-description className="mt-4">
        Built with Next.js, GSAP and Motion.
      </p>
    </section>
  )
}
