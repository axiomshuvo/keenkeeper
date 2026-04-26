import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { FriendsProvider } from "./context/FriendsContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen Keeper",
  description: "A personal project to keep track of my life and work.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="light"
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <FriendsProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </FriendsProvider>
      </body>
    </html>
  );
}
