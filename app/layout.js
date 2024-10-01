import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import NavbarComponent from "./components/Navbar";
import {Toaster} from 'sonner'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Hometribe",
  description: "Homeschooling made simple!",
  name: 'viewport',
  content: 'width=device-width, initial-scale=1.0'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased px-4`}>
        <Providers>
          <div className="flex flex-col justify-center min-w-[350px]">
            <Toaster richColors position="top-center"/>
            <NavbarComponent />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
