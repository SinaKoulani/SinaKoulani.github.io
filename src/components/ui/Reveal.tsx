import { useEffect, useRef, useState, type ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  className?: string
}

const Reveal = ({ children, className = "" }: RevealProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const handleMotionPreference = () => {
      setReducedMotion(mediaQuery.matches)

      if (mediaQuery.matches) {
        setIsVisible(true)
      }
    }

    handleMotionPreference()
    mediaQuery.addEventListener("change", handleMotionPreference)

    return () => {
      mediaQuery.removeEventListener("change", handleMotionPreference)
    }
  }, [])

  useEffect(() => {
    if (reducedMotion) {
      return
    }

    const element = ref.current

    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.1,
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [reducedMotion])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible && !reducedMotion
          ? "translate-y-0 opacity-100"
          : reducedMotion
            ? "opacity-100"
            : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Reveal;