import Head from "next/head";
import Layout, { name } from "../components/layout";
import Image from "next/image";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <Layout blog={true}>
      <Head>
        <title>The MakersDev Blog</title>
        <meta
          name="description"
          content="Your guide to your business's online success. We dicuss how small to medium sized South African businesses can establish their online presence."
          key="desc"
        />
        <meta
          name="keywords"
          content="small business sites, websites for small business owners, best business websites, best digital marketing agency websites"
        />
        <meta
          property="og:description"
          content="Your guide to your business's online success."
        />
        <meta property="og:image" content="/ducks.jpg" />
        <meta name="author" content="MakersDev" />
      </Head>
      <section className="blogContainer">
        <h1>{"Your guide to your business's online success"}</h1>
        <ul className="blogList">
          {allPostsData.map(
            ({ id, date, title, tag, image, imageAlt, preview }) => (
              <Link
                href={`/blog/posts/${id}`}
                key={id}
                className="blogItem"
                data-aos="fade-right"
                data-aos-easing="ease"
              >
                <li className="blogPreviewDetails">
                  <Image
                    priority
                    src={`/${image}`}
                    alt={imageAlt}
                    width={100}
                    height={50}
                  />
                  <div className="blogPreviewText">
                    <span>{tag}</span>
                    <h3>{title}</h3>
                    <br />
                    <small>
                      <Date dateString={date} />
                    </small>
                    <p>{preview}</p>
                  </div>
                </li>
              </Link>
            )
          )}
        </ul>
      </section>
    </Layout>
  );
}
