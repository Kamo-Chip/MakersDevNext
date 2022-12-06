import { AiFillCheckCircle } from "react-icons/ai";

const Alert = () => {
  return (
    <div className="alert">
      <span
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AiFillCheckCircle color="#1ee854" />
        <span style={{marginLeft: "1rem"}}>Link copied to clipboard</span>
      </span>
    </div>
  );
};

export default Alert;
