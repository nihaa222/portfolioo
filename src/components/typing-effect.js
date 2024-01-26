import { useEffect, useRef, useState } from "react";

export function useTypingEffect(textToType, interKeyStrokeDurationInMs) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const currentPositionRef = useRef(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        setCurrentPosition((value) => value + 1);
        currentPositionRef.current += 1;

        if (currentPositionRef.current >= textToType.length) {
          clearInterval(intervalId);
        }
      }, Math.max(interKeyStrokeDurationInMs, 50)); // Ensure a minimum interval of 50ms

      return () => {
        clearInterval(intervalId);
      };
    }, 3000); // Wait for 3 seconds before starting the typing effect

    return () => {
      clearTimeout(timeoutId);
    };
  }, [interKeyStrokeDurationInMs, textToType]);

  return textToType.substring(0, currentPosition);
}
