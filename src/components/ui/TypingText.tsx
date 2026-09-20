import { useEffect, useState } from "react"

interface TypingTextProps {
  text: string
  speed?: number
  delay?: number
}

const TypingText = ({
  text,
  speed = 35,
  delay = 0,
}: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (prefersReducedMotion) {
      return
    }

    let currentIndex = 0
    let typingTimer: number | undefined

    const delayTimer = window.setTimeout(() => {
      typingTimer = window.setInterval(() => {
        currentIndex += 1
        setDisplayedText(text.slice(0, currentIndex))

        if (currentIndex >= text.length) {
          window.clearInterval(typingTimer)
          setIsComplete(true)
        }
      }, speed)
    }, delay)

    return () => {
      window.clearTimeout(delayTimer)

      if (typingTimer !== undefined) {
        window.clearInterval(typingTimer)
      }
    }
  }, [delay, speed, text])

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const visibleText = prefersReducedMotion ? text : displayedText
  const showCursor = !prefersReducedMotion && !isComplete

  return (
    <span>
      {visibleText}
      {showCursor && (
        <span
          className="ml-1 inline-block h-[1em] w-px animate-pulse bg-accent align-middle"
          aria-hidden="true"
        />
      )}
    </span>
  )
}

export default TypingText