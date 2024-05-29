import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { TRPCReactProvider } from "~/trpc/react";
import { AppSessionProvider } from "./sessions";
import LayoutClient from "./layoutClient";
import { headers } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = headers();
  const app = headersList.get("x-app");
  return (
    <html lang="fr">
      <body className={`font-sans ${inter.variable}`}>
        <LayoutClient
          app={app}
        >
          {/* <TRPCReactProvider cookies={cookies().toString()}> */}
          <TRPCReactProvider>
            <AppSessionProvider>{children}</AppSessionProvider>
          </TRPCReactProvider>
          <Toaster richColors />
        </LayoutClient>
      </body>
    </html>
  );
}
