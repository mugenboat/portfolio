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
        <link rel="icon" href="/portfolio/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
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
