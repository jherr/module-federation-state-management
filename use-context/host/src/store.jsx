import React, { createContext, useContext, useState } from "react";

const CountContext = createContext([0, () => {}]);

export function CountProvider({ children }) {
  return (
    <CountContext.Provider value={useState(0)}>
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  return useContext(CountContext);
}
