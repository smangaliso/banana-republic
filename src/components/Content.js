import React from "react";
import "./Content.css";
import { LoremIpsum } from "react-lorem-ipsum";

const Content = () => {
  return (
    <div className="content-format">
      <h3>My world today</h3>

      <LoremIpsum avgSentencesPerParagraph={11} className="paragraph" />
    </div>
  );
};

export default Content;
