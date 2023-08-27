import { useEffect, useState } from 'react'

interface UseDebounceOptions {
  delay?: number
  minLength?: number
}

export const useDebounce = (
  value: string,
  options: UseDebounceOptions = {}
) => {
  const { delay = 500, minLength } = options
  const [debounceValue, setDebounceValue] = useState<string | null>(null)

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (value && value.length > (minLength || 3)) {
        setDebounceValue(value)
      }
    }, delay)

    return () => clearTimeout(timerId)
  }, [value, delay, minLength])

  return debounceValue
}
