import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Timesheet App",
  description: "A timesheet tracking application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="stylesheet" href={inter.url} />
        <link rel="icon" type="image/png" href="/icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
