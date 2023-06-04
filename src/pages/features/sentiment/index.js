import React from "react";
import Layout from "../../../../Components/features/layout/layout";
import MyHead from "../../../../Components/features/head/MyHead";

import Image from "next/image";

import UI from "../../../../Components/ui/UI";

export default function _sentiment() {
  const [text, setText] = React.useState("");
  // const [result, setResult] = React.useState("");
  const [score, setScore] = React.useState(0);
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleAnalyse = () => {
    var Sentiment = require("sentiment");
    var sentiment = new Sentiment();
    const res = sentiment.analyze(text);
    // setResult(`Score: ${res.score}, Comparative: ${res.comparative}`);
    console.log({ res });
    setScore(res.score);
  };

  const SetEmoji = () => {
    if (score == 0) {
      return (
        <Image src="/icons/netral.svg" alt="netral" width={100} height={100} />
      );
    } else if (score > 0) {
      return (
        <Image
          src="/icons/positif.svg"
          alt="positif"
          width={100}
          height={100}
        />
      );
    } else if (score < 0) {
      return (
        <Image
          src="/icons/negatif.svg"
          alt="negatif"
          width={100}
          height={100}
        />
      );
    }
  };

  return (
    <Layout>
      <MyHead
        pageTitle={"Sentiment"}
        desc={"sentiment analysis"}
        author={"Brando Margendy Bogar"}
        keyword={"sentiment, sentiment analyis, node js"}
      />
      <div className="flex flex-col items-center  w-full h-screen gap-10 mt-20">
        <h1 className="text-3xl text-myblack">Sentiment analysis</h1>

        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Enter a sentences"
          className="w-2/4 h-32 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none resize-none placeholder-slate-300 text-slate-600 focus:outline-none focus:ring"
        ></textarea>
        <UI.Button type={"button"} onClick={handleAnalyse} title={"Analyze"} />
        <SetEmoji />

        {/* <p className="text-myblack">{result}</p> */}
      </div>
    </Layout>
  );
}
