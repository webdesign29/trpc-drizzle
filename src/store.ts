// !process.env.SKIP_ENV_VALIDATION && (await import("./env.mjs"));
import { createStore } from "zustand";
import { type AppProps, type AppActions, type RecursivePartial } from "./types";
import { createContext } from "react";

const initialState: RecursivePartial<AppProps> = {
  APP: {
    NAME: "App Name",
  },
};
// const stateOverrideApp: RecursivePartial<AppProps['APP']> = {}

export type AppStore = ReturnType<typeof createAppStore>;

export type AppStoreProps = AppProps & AppActions;

export const createAppStore = (initProps?: Partial<AppProps>) => {
  return createStore<AppStoreProps>()((set) => ({
    ...initialState,
    APP: {
      NAME: "App Name",
      setName: (name: string) => set((state) => ({ APP: { ...state.APP, NAME: name } })),
      URL: "https://example.com",
      THEME: {
        // LOGIN_BG: ,
      },
      BRAND: "Brand",
      LOGO: "Logo",
      ...initProps?.APP,
      // ...stateOverrideApp
    },
  }));
};

// export default useStore;
export const AppContext = createContext<AppStore | null>(null);
