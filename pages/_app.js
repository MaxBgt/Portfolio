import Layout from "@/components/Layout";
import "../styles/index.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Portfolio | Maxime Bignolet | Développeur Front-end</title>
        <meta
          name="description"
          content="Portfolio de Maxime Bignolet, développeur front-end spécialisé en React, Next.js et autres technologies web modernes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-domain.com/" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
