import { useEffect, useState, useRef } from 'react';

type ClipboardText = string;

const useListenPaste = (textLength: number): ClipboardText => {
  const [clipboardText, setClipboardText] = useState<ClipboardText>('');
  const textLengthRef = useRef<number>(textLength);

  useEffect(() => {
    const handlePaste = async () => {
      const text = await navigator.clipboard.readText();
      if (text.length === textLengthRef.current) {
        setClipboardText(text);
      }
    };

    document.addEventListener('paste', handlePaste);

    return () => {
      document.removeEventListener('paste', handlePaste);
    };
  }, []);

  return clipboardText;
};

export default useListenPaste;
