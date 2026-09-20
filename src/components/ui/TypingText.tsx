import { useEffect, useState } from "react"

interface TypingTextProps {
  text: string
  speed?: number
}

const TypingText = ({ text, speed = 80 }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    if (mediaQuery.matches) {
      return
    }

    let index = 0

    const interval = window.setInterval(() => {
      index += 1
      setDisplayedText(text.slice(0, index))

      if (index >= text.length) {
        window.clearInterval(interval)
      }
    }, speed)

    return () => {
      window.clearInterval(interval)
    }
  }, [text, speed])

  return (
    <span>
      {displayedText || text}
    </span>
  )
}

export default TypingText