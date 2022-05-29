import { createContext, useContext } from "react";
import { RootStoreModel } from "../store/rootStore";

const StoreContext = createContext<RootStoreModel>({} as RootStoreModel);

export const useStore = () => useContext(StoreContext);
export const StoreProvider = StoreContext.Provider;
