import { useState, useCallback, useEffect, useMemo } from 'react'

type TargetReached = boolean;

const useMediaQuery = (width: number): TargetReached => {
  const [targetReached, setTargetReached] = useState<TargetReached>(false)

  const updateTarget = useCallback((e:any) => {
    setTargetReached(e.matches)
  }, [])

  const mediaQuery = useMemo(() => `(max-width: ${width}px)`, [width])

  useEffect(() => {
    const media = window.matchMedia(mediaQuery)
    media.addEventListener('change', (e) => updateTarget(e))

    // Check on mount (callback is not called until a change occurs)
    setTargetReached(media.matches)

    return () => media.removeEventListener('change', (e) => updateTarget(e))
  }, [updateTarget, mediaQuery])

  return targetReached
}

export default useMediaQuery
