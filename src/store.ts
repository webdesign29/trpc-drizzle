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

      MAIN_NAV: [
        {
          title: "Home things",
          children: [
            {
              title: "Home",
              href: "/",
              description: "Go back to the homepage.",
              items: [],
            },
            {
              title: "Films",
              href: "/search/movies",
              description: "Browse all the films we have.",
              items: [],
            },
            {
              title: "TV Series",
              href: "/search/tv-shows",
              description: "Browse all the TV series we have.",
              items: [],
            },
          ],
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
        },
        {
          title: "Listes",
          children: [
            {
              title: "Filmographies",
              href: "/filmographies",
              description: "Browse all the filmographies we have.",
              items: [],
            },
            {
              title: "TV Series Lists",
              href: "/tv-series-lists",
              description: "Browse all the TV series lists we have.",
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
