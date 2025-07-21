import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToggleProvider } from "./context/ToggleContex";


<style>
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
</style>
const inter = Inter({ subsets: ["latin"], display: "swap", weight: "400" });

export const metadata: Metadata = {
  title: "Nexoqod-portfolio app",
  description: "World best web agency company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ToggleProvider>

        <body
          className={inter.className}
          cz-shortcut-listen="true"
          data-new-gr-c-s-check-loaded="14.1215.0"
          data-gr-ext-installed=""
          data-gr-ext-disabled="forever"

        >
          {children}
        </body>
      </ToggleProvider>
    </html>
  );
}
