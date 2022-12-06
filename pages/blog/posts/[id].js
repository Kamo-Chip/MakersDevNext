import Layout from "../../../components/layout";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import Head from "next/head";
import Date from "../../../components/date";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import Alert from "../../../components/Alert";
import Aos from "aos";
import "aos/dist/aos.css";

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
  const [location, setLocation] = useState("");

  const copyTextToClipboard = async (text) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  const handleCopyClick = (copyText) => {
    copyTextToClipboard(copyText)
      .then(() => {
        window.alert("Link copied to clipboard");
        document.querySelector(".alert").style.display = "flex";
        setTimeout(() => {
          document.querySelector(".alert").style.display = "none";
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setLocation(window.location.href);
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <Layout blog={true}>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} key="desc" />
        <meta name="keywords" content={postData.keywords} />
        <meta property="og:description" content={postData.preview} />
        <meta property="og:image" content={`/${postData.image}`} />
        <meta name="author" content="Kamogelo Khumalo" />
      </Head>
      <Link href="/blog" className="blogLink">
        <IoIosArrowBack className="blogBack" size="2.5rem" />
      </Link>
      <article className="blogPost" data-aos="fade-in" data-aos-easing="ease">
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
          <BsFillShareFill
            size="2rem"
            onClick={() => handleCopyClick(location)}
            className="shareBtn"
          />
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
              priority
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
      <Alert />
    </Layout>
  );
}
