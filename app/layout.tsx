import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "./components/layout/footer";
import CreateChat from "./components/chat/createChat";
// import { Notifications } from "react-push-notification";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Askus | Anytime",
  description: "We are ready to answer your questions, day or night.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} font-MontserratRegular bg-white text-black`}
      >
        <Providers>
          <CreateChat />
          <div className="bg-[#f9f9f9]">
            {/* <Notifications /> */}
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
