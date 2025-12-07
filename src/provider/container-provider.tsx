"use client";

import { createContext, useContext, ReactNode } from "react";

type ContainerContextType = {
  defaultMaxWidth: string;
};

const ContainerContext = createContext<ContainerContextType>({
  defaultMaxWidth: "max-w-[1440px]",
});

interface ContainerProviderProps {
  children: ReactNode;
  defaultMaxWidth?: string;
}

export function ContainerProvider({
  children,
  defaultMaxWidth = "max-w-[1440px]",
}: ContainerProviderProps) {
  return (
    <ContainerContext.Provider value={{ defaultMaxWidth }}>
      {children}
    </ContainerContext.Provider>
  );
}

export function useContainerConfig() {
  return useContext(ContainerContext);
}
