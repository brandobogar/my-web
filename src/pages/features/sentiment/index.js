import React from "react";
import Layout from "../../../../Components/features/layout/layout";
import MyHead from "../../../../Components/features/head/MyHead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faFaceMeh } from "@fortawesome/free-regular-svg-icons";
import UI from "../../../../Components/ui/UI";

export default function _sentiment() {
  const [text, setText] = React.useState("");
  const [result, setResult] = React.useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleAnalyse = () => {
    var Sentiment = require("sentiment");
    var sentiment = new Sentiment();
    const res = sentiment.analyze(text);
    setResult(`Score: ${res.score}, Comparative: ${res.comparative}`);
  };

  return (
    <Layout>
      <MyHead
        pageTitle={"Sentiment"}
        desc={"sentiment analysis"}
        author={"Brando Margendy Bogar"}
        keyword={"sentiment, sentiment analyis, node js"}
      />
      <div className="flex flex-col items-center justify-center w-full h-screen gap-10">
        <h1 className="text-3xl text-myblack">Sentiment analysis</h1>

        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Enter a sentences"
          className="bg-white w-48 text-myblack h-24 p-2 resize-none"
        ></textarea>
        <UI.Button type={"button"} onClick={handleAnalyse} title={"Analyze"} />

        <p className="text-myblack">{result}</p>
      </div>
    </Layout>
  );
}
