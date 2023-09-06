import { useEffect, useState } from "react";

const useKeyPress = (key: string) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      setIsKeyPressed(event.key === key);
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, []);

  return isKeyPressed;
};

export default useKeyPress;
