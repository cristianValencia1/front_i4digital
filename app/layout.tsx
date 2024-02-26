import type { Metadata } from "next";
import { Inter } from "next/font/google";
import I4EspecialistasContextProvider from "./context/index";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "I4_Especialistas ",
  description: "Tipos de citas I4_Especialistas ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <I4EspecialistasContextProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </I4EspecialistasContextProvider>
  );
}
