import { useEffect } from "react"

const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | Sina Koulani`
  }, [title])
}

export default usePageTitle