import { Html, Head, Main, NextScript } from "next/document";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Thanate Janyaswasdi",
  alternateName: "Boat",
  jobTitle: "Content & Digital Marketing",
  url: "https://mugenboat.github.io/portfolio/",
  image: "https://mugenboat.github.io/portfolio/profile.jpg",
  email: "mailto:boat.thanate@gmail.com",
  address: { "@type": "PostalAddress", addressRegion: "Chonburi", addressCountry: "TH" },
  alumniOf: "Thai-Nichi Institute of Technology",
  knowsLanguage: ["th", "en"],
  sameAs: [
    "https://www.linkedin.com/in/thanate-janyaswasdi",
    "https://github.com/mugenboat",
    "https://www.lemon8-app.com/@boattheblur",
  ],
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/portfolio/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/portfolio/icon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/portfolio/icon-192.png" />
        <link rel="apple-touch-icon" href="/portfolio/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
