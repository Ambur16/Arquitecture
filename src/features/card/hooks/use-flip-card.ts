import { useState } from "react";

export const useFlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped((prev) => !prev);

  return { isFlipped, toggleFlip };
};
