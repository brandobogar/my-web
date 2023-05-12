import React from "react";
import Layout from "../../../../Components/features/layout/layout";
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
    <Layout pagetitle={"Sentiment"} desc={"sentiment analysis"}>
      <div className="flex flex-col items-center justify-center h-screen w-full gap-10">
        <h1 className="text-2xl">Sentiment analysis</h1>

        <textarea value={text} onChange={handleTextChange}></textarea>
        <button
          className="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
