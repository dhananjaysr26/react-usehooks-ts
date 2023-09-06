import  { useEffect, useRef } from 'react'

const useOutSideClickHook = (callback: Function, initialValue = null) => {
  const elementRef = useRef<HTMLInputElement>(initialValue)
  useEffect(() => {
    function handler(event: any) {
      if (!elementRef.current?.contains(event.target)) {
        callback()
      }
    }
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [callback])
  return elementRef
}

export default useOutSideClickHook
