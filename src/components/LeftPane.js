import React from "react";
import face from "../assets/images/face.svg";
import arrow from "../assets/images/arrow.svg";
import "./LeftPane.css";
import { Link } from "react-router-dom";

const LeftPane = (props) => {
  return (
    <div className="my-4 py-4">
      <img className="my-4 py-4 face" src={face} alt="face" />
      <h2 className="my-4">Front-end challenge!</h2>
      <h6>This is a design that you will need to code up and impress us.</h6>
      <Link to={props.url}>
        <button className="button">
          <img className={props.className} alt="arrow" src={arrow} />
        </button>
      </Link>
    </div>
  );
};

export default LeftPane;
