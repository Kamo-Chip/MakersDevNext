import Layout from "../../../components/layout";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import Head from "next/head";
import Date from "../../../components/date";
import Link from "next/link";
import backArrow from "../../../public/backArrow.svg";
import Image from "next/image";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export default function Post({ postData }) {
  return (
    <Layout blog={true}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Link href="/blog" className="blogLink">
        <Image
          src={backArrow}
          alt="Back to main blog list"
          width={32}
          height={32}
          className="blogBack"
        />
      </Link>
      <article className="blogPost">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "1rem",
            fontSize: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>
              Updated <Date dateString={postData.date} />
            </span>
            <span>
              <b>{postData.tag}</b>
            </span>
          </div>
          <BsFillShareFill size="2rem"/>
        </div>
        <h1>{postData.title}</h1>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              margin: "1.5rem 0 0 0",
              fontSize: "1rem",
            }}
          >
            <Image
              src="/Me.jpg"
              alt="Kamogelo Khumalo"
              width={60}
              height={60}
              style={{ borderRadius: "50%" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "1rem",
              }}
            >
              <span>Kamogelo Khumalo</span>
              <span>
                Founder of{" "}
                <Link href="/" style={{ fontFamily: "grifter" }}>
                  MakersDev
                </Link>
              </span>
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <Link href="https://www.instagram.com/makersdev/">
              <AiFillInstagram size={"2rem"} />
            </Link>
            <Link href="https://twitter.com/kamo_io">
              <AiOutlineTwitter size={"2rem"} />
            </Link>
          </div>
        </div>

        <Image
          priority
          src={`/${postData.image}`}
          alt={postData.imageAlt}
          width={100}
          height={50}
          className="postHeroImg"
        />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
