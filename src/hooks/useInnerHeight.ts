import { useEffect, useState, useCallback } from 'react'

type InnerHeight = number | null

const useInnerHeight = (): InnerHeight => {
  const [innerHeight, setInnerHeight] = useState<InnerHeight>(null)

  const handleResize = useCallback(() => {
    setInnerHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return innerHeight
}

export default useInnerHeight
