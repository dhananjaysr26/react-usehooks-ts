import { useEffect, useState, useRef } from 'react';


const  useSwipe=(SWIPE_THRESHOLD:number=60)=> {
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const swipeRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (touchStartX.current !== null && touchEndX.current !== null) {
        const deltaX = touchEndX.current - touchStartX.current;

        if (deltaX > SWIPE_THRESHOLD) {
          setSwipeDirection('right');
        } else if (deltaX < -SWIPE_THRESHOLD) {
          setSwipeDirection('left');
        } else {
          setSwipeDirection(null);
        }
      }
    };

    const element = swipeRef.current;

    if (element) {
      element.addEventListener('touchstart', handleTouchStart);
      element.addEventListener('touchmove', handleTouchMove);
      element.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (element) {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchmove', handleTouchMove);
        element.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  return [swipeDirection, swipeRef] as const;
}

export default useSwipe;
