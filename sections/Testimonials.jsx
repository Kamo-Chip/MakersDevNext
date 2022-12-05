import client1 from "../public/obles.jpg";
import client2 from "../public/matnomz.jpg";
import client3 from "../public/mthombeni.jpg";
import Testimonial from "../components/Testimonial";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section className="testimonials" id="testimonials">
      <h1>What Clients Are Saying About Us</h1>
      <div className="testimonialsContainer">
        <Testimonial
          imgSrc={client1}
          testimonialText="Throughout the whole project, MakersDev
            supported us and exceeded our expectations. Our experience personal and friendly, and their ability to identify
            and present our key messages in an imaginative and creative way gave
            us a huge amount of confidence in them."
          siteLink="https://www.oblesremoval.co.za"
          clientDetails="Lesley, Obles Removal"
        />
        <Testimonial
          imgSrc={client2}
          testimonialText="MakersDev helped us set up our Google business profile and develop a
          website. They made the process extremely easy for us and always kept
          us up to date on the status of things. I would definitely recommend
          them."
          siteLink="https://matnomzkennels.business.site"
          profileLink="https://goo.gl/maps/sqozschtPHEaE1BJ6"
          clientDetails="Ohimane, Matnomz Frenchies"
        />
        <Testimonial
          imgSrc={client3}
          testimonialText="In a competitive industry such as construction, we’re always looking for a way to get an edge. MakersDev has made it easy
          for us to get great results from our profile without having to do
          any of the work ourselves."
          profileLink="https://goo.gl/maps/Upp4vkENjxSDzE8u8"
          clientDetails="Jethro, Mthombeni Holdings And Projects"
        />
      </div>
    </section>
  );
};

export default Testimonials;
