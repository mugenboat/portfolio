import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Footer } from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div className="w-[70%] grid-cols-1 mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
