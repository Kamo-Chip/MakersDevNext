import { useEffect } from "react";
// import HeroImg from "../public/hero.png";
import { FaWhatsappSquare } from "react-icons/fa";
import Aos from "aos";
import Image from "next/image";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text-container">
          <span data-aos="fade-left" data-aos-easing="ease">
            Get Found 🔎
            <br />
          </span>
          <span
            data-aos="fade-left"
            data-aos-delay="1500"
            data-aos-easing="ease"
          >
            Get Leads 🧲
          </span>
          <span
            data-aos="fade-left"
            data-aos-delay="2500"
            data-aos-easing="ease"
          >
            Get Customers 📈
          </span>
          <small
            data-aos="fade-in"
            data-aos-delay="3000"
            data-aos-easing="ease-in"
          >
            We establish your business online with ease. At an affordable price
          </small>
        </div>
        <Image src="/hero.png" alt="Phone" width={2852} height={1757} />
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          right: "0",
          zIndex: "1000",
        }}
      >
        <a
          href="https://wa.me/270724802452"
          target="_blank"
          rel="noreferrer"
          title="Message us on WhatsApp"
        >
          <FaWhatsappSquare
            color="#25D366"
            size="4rem"
            style={{
              padding: "0 .5rem .5rem 0",
            }}
            className="whatsapp"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
