import React from "react";
import Layout from "../../../../Components/features/layout/layout";
import MyHead from "../../../../Components/features/head/myHead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faFaceMeh } from "@fortawesome/free-regular-svg-icons";
// import sentiment from "sentiment";

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
        <h1 className="text-2xl">Sentiment analysis</h1>

        <textarea value={text} onChange={handleTextChange}></textarea>
        <button
          className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-lg focus:outline-none"
          type="button"
          onClick={handleAnalyse}
        >
          Analyze
        </button>

        <p>{result}</p>
      </div>
    </Layout>
  );
}
