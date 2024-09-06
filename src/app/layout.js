// layouts can be global like here or for single pages like in blog folder

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>hello i am in all pages</h1>
        {children}
      </body>
    </html>
  );
}
