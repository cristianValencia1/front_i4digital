"use client";

import React, { createContext, useState } from "react";

interface I4EspecialistasContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const I4EspecialistasContext = createContext<I4EspecialistasContextProps | undefined>(
  undefined
);

const I4EspecialistasContextProvider = ({ children }: any) => {
  const [loading, setLoading] = useState<boolean>(false);

  const contextValue = {
    loading,
    setLoading,
  };

  return (
    <I4EspecialistasContext.Provider value={contextValue}>
      {children}
    </I4EspecialistasContext.Provider>
  );
};

export default I4EspecialistasContextProvider;
