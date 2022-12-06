const Item = ({ serviceName, price, tagLine, perkList, furtherPerkList }) => {
  return (
    <div className="item" data-aos="fade-left" data-aos-easing="ease">
      <h3>{serviceName}</h3>
      {serviceName === "Google Business Profile management" ||
      serviceName === "Starter" ||
      serviceName === "Google Business Pack" ? (
        <span
          style={{
            position: "absolute",
            backgroundColor: "#00cbba",
            color: "#fff",
            fontFamily: "grifter, sans-serif",
            fontSize: "1.25rem",
            borderRadius: "20px",
            transform: "rotate(-10deg) translate(-15%, -40px)",
            padding: ".5em",
            height: "fit-content",
          }}
        >
          <b>
            {serviceName === "Google Business Profile management"
              ? "Most popular"
              : serviceName === "Starter"
              ? "Save R250"
              : "Save R250"}
          </b>
        </span>
      ) : null}
      {console.log(price)}
      <span
        className="price"
        dangerouslySetInnerHTML={{ __html: `R ${price}` }}
      />
      <p style={{ textAlign: "center" }}>{tagLine}</p>
      <ul>
        {perkList.map((perk, idx) => {
          return <li key={"perkList" + idx}>{perk}</li>;
        })}
        {furtherPerkList ? (
          <>
            <li>The service includes:</li>
            <div>
              {furtherPerkList.map((perk, idx) => {
                return <li key={"fPerkList" + idx}>{perk}</li>;
              })}
            </div>
          </>
        ) : null}
      </ul>
    </div>
  );
};

export default Item;
