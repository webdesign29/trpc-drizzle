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
      NAME: "Nom de l'application",
      setName: (name: string) => set((state) => ({ APP: { ...state.APP, NAME: name } })),
      URL: "https://example.com",
      THEME: {
        // LOGIN_BG: ,
      },
      BRAND: "Brand",
      LOGO: "Logo",

      MAIN_NAV: [
        {
          title: "Acceuil",
          href: "/",
        },
        {
          title: "Acceuil",
          href: "/",
        },
        {
          title: "Configurateur",
          href: "/builder",
        },
        {
          title: "Utils",
          children: [
            {
              title: "Products",
              href: "/products",
              description: "All the products we have to offer.",
              items: [],
            },
            {
              title: "Build a Board",
              href: "/build-a-board",
              description: "Build your own custom skateboard.",
              items: [],
            },
            {
              title: "Blog",
              href: "/blog",
              description: "Read our latest blog posts.",
              items: [],
            },
            {
              title: "Blog",
              href: "/blog",
              description: "Read our latest blog posts.",
              items: [],
            },
            {
              title: "Blog",
              href: "/blog",
              description: "Read our latest blog posts.",
              items: [],
            },
            {
              title: "Blog",
              href: "/blog",
              description: "Read our latest blog posts.",
              items: [],
            },
          ],
        }
      ],

      ...initProps?.APP,
      // ...stateOverrideApp
    },
  }));
};

// export default useStore;
export const AppContext = createContext<AppStore | null>(null);
