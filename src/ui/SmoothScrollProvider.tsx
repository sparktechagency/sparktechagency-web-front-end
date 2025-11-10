'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    const smootherRef = useRef<ScrollSmoother | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        if (typeof window === 'undefined') return

        if (!smootherRef.current) {
            smootherRef.current = ScrollSmoother.create({
                smooth: 1.2,
                effects: true ,
                smoothTouch: 0.1
            })
        } else {
            smootherRef.current.refresh()
        }


    }, [pathname])

    useEffect(() => {
        return () => {
            smootherRef.current?.kill()
            smootherRef.current = null
        }
    }, [])

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                {children}
            </div>
        </div>
    )
}