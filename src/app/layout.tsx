import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portoflio",
  description: "Art Flex On Boomers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
