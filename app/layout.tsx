import type { Metadata } from "next";
import { inter } from "./fonts";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import "@/styles/page.css";

export const metadata: Metadata = {
  title: "Author Desk",
  description: "Made for authors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`body ${inter.className}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
