import Provider from "@/components/provider";
import { meta } from "@/config/metadata";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
      <body className={"sans min-h-screen"}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
