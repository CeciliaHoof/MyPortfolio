import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./ui/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cecilia Chimento",
  description: "Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-light min-h-screen">
          <Nav />
          <div className="relative isolate px-6 pt-16 lg:px-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
