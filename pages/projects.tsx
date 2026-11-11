import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// Old page kept so existing links still work — sends visitors to the new section.
export default function Redirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/#experience");
  }, [router]);
  return (
    <Head>
      <meta name="robots" content="noindex" />
      <meta httpEquiv="refresh" content="0; url=/portfolio/#experience" />
    </Head>
  );
}
