/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";

type EmotionContextType = {
  emotion: string;
  setEmotion: (e: string) => void;
};

const EmotionContext = createContext<EmotionContextType>({
  emotion: "neutral",
  setEmotion: () => {},
});

export const EmotionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [emotion, setEmotion] = useState("neutral");

  return (
    <EmotionContext.Provider value={{ emotion, setEmotion }}>
      {children}
    </EmotionContext.Provider>
  );
};

export const useEmotion = () => useContext(EmotionContext);
