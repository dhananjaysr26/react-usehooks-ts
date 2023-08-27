import { useEffect, useState } from "react";
import { detectIncognitoScriptLink } from "../utils";

export const useDetectIncognito = () => {
  const [isIncognito, setIsIncognito] = useState<boolean>(false);
  const [isDetectingIncognito, setIsDetectingIncognito] =
    useState<boolean>(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = detectIncognitoScriptLink;
    script.async = true;
    script.onload = () => {
      const detectIncognitoFunction = (window as any).detectIncognito;
      if (!detectIncognitoFunction) {
        console.error("detectIncognito is not available in the window object.");
        setIsDetectingIncognito(false);
        return;
      }

      detectIncognitoFunction()
        .then(({ isPrivate }: { isPrivate: boolean }) => {
          setIsIncognito(isPrivate);
          setIsDetectingIncognito(false);
        })
        .catch((error: Error) => {
          console.error("Error while detecting Incognito Mode:", error);
          setIsDetectingIncognito(false);
        });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return [isIncognito, isDetectingIncognito];
};
