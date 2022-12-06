import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import duck from "../public/duck.jpg";
import Image from "next/image";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <section
      className="about"
      id="about"
      data-aos="fade-in"
      data-aos-easing="ease-in"
    >
      <div className="img-container">
        <Image
          src="/duck.jpg"
          alt="one orange duck surrounded by yellow ducks"
          height={479}
          width={359}
        />
      </div>
      <div className="text-container">
        <h1>Make a good first impression</h1>
        <div>
          <p>
            First impressions are everything in {"today's"} fast-paced
            environment. If you do not give consumers a reason to pick your
            service within a short amount of time they lose interest and move on
            to a competitor that satisfies their needs. Now the question is how
            do you gain the
            {" consumer's"} attention?
          </p>
          <p>
            At MakersDev our mission is to help small to medium sized businesses secure their
            growth and profitability in the ever-changing digital economy. We do
            this by establishing your online presence with ease, at an
            affordable price. We understand how hard it is to get started, so we
            cut out the fluff of traditional web development agencies by making
            you pay for only what you need.
          </p>
          <p>
            Our range of services makes it easy for you to get started on the
            right track, and ensure your success. We craft a beautiful website
            for your business and make your business rank high in searches.
          </p>
          <p>
            Having a website and a Google Business Profile builds trust between
            you and potential clients because it lets them know that you are
            legit. This increases the chances of them becoming paying customers.
            Our services have proven to be an extremely effective way of
            improving your visibility, and we can confidently say that we will
            make you seen! So let us handle the hassle of putting your business
            online so that you can focus on doing what you do best!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
