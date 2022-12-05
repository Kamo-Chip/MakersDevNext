import Testimonials from "../sections/Testimonials";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Contact from "../sections/Contact";
import Layout from "../components/layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>MakersDev - Digital Agency for SMEs in South Africa</title>
        <meta
          name="description"
          content="MakersDev helps small to medium sized South African businesses establish their online presence. We design and develop your website as well as setup and manage your Google Business profile."
          key="desc"
        />
        <meta
          name="keywords"
          content="Web design in South Africa, Web development in South Africa, Google business profile management, Google business profile setup, Small business in South Africa, SME in South Africa"
        />
        <meta
          property="og:description"
          content="We establish your business online with ease. At an affordable price"
        />
        <meta
          property="og:image"
          content="https://www.partoo.co/mybusiness/wp-content/uploads/2022/04/google-my-business-ficha.jpg"
        />
        <meta name="author" content="MakersDev" />
        <meta name="theme-color" content="#ff802b" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Hero />
      <About />
      <Testimonials />
      <Services />
      <Contact />
    </Layout>
  );
}
