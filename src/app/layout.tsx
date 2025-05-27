import { type Metadata } from "next";
import "@/styles/globals.css";
import { appfonts } from "@/fonts";
import AppRootProvider from "@/providers/app-root-provider";

export const metadata: Metadata = {
  title: "ECOMMERCE WEB APP",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning lang="en" className={appfonts}>
      <body>
        <AppRootProvider>{children}</AppRootProvider>
      </body>
    </html>
  );
}
