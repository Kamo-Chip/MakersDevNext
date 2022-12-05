import Image from "next/image";

const Testimonial = ({
  imgSrc,
  testimonialText,
  siteLink,
  profileLink,
  clientDetails,
}) => {
  return (
    <div className="testimonial" data-aos="fade-up" data-aos-easing="ease">
      <Image
        src={imgSrc}
        alt={clientDetails}
        width={100}
        height={100}
        className="testimonialImg"
      />
      <span className="testimonialText">
        {testimonialText}
        <br />
        <br />
        {siteLink ? (
          <a href={siteLink} target="_blank" rel="noreferrer">
            View website
          </a>
        ) : null}
        {profileLink ? (
          <>
            <br />
            <a href={profileLink} target="_blank" rel="noreferrer">
              View profile
            </a>
          </>
        ) : null}
        <br />
        <br />
        <b>- {clientDetails}</b>
      </span>
    </div>
  );
};

export default Testimonial;
