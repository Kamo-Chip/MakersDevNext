import Head from "next/head";
import Layout, { name } from "../components/layout";
import Image from "next/image";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout blog={true}>
      <Head>
        <title>MakersDev Blog</title>
      </Head>
      <section className="blogContainer">
        <h1>{"Your guide to your business's online success"}</h1>
        <ul className="blogList">
          {allPostsData.map(
            ({ id, date, title, tag, image, imageAlt, preview }) => (
              <Link href={`/blog/posts/${id}`} key={id} className="blogItem">
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
