import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import QueryProvider from "@/providers/QueryProvider";

export const metadata = {
  title: "Fake Store",
  description: "Next.js Fake Store App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <Navbar />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
