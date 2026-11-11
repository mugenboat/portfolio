import Layout from "@/components/Layout";
import { LanguageProvider } from "@/components/LanguageContext";
import "@fontsource/press-start-2p/400.css";
import "@fontsource/pixelify-sans/400.css";
import "@fontsource/pixelify-sans/700.css";
import "@fontsource/kanit/400.css";
import "@fontsource/kanit/600.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

const SITE_URL = "https://mugenboat.github.io/portfolio";
const TITLE = "Thanate Janyaswasdi (Boat) — Content & Digital Marketing";
const DESCRIPTION =
  "Content & digital marketing portfolio of Thanate Janyaswasdi: content planning, social media, influencer marketing, Facebook & TikTok Ads and short-form video.";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Head>
        <title>{TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/profile.jpg`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="th_TH" />
        <meta name="twitter:card" content="summary" />
        <meta name="theme-color" content="#1b1b2f" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}
