"use client";
import { createContext, useContext } from "react";
import { Dictionary } from "../models/dictionaries";

const DictionariesContext = createContext<Dictionary>({} as Dictionary);

export const useDictionaries = () => useContext(DictionariesContext);

export const DictionariesProvider = ({
  dictionary,
  children
}: React.PropsWithChildren<{ dictionary: Dictionary }>) => {
  return (
    <DictionariesContext.Provider value={dictionary}>
      {children}
    </DictionariesContext.Provider>
  );
};
