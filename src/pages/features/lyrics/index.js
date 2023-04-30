import Layout from "../../../../Components/features/layout/layout";
import lyrics from "../../api/lyrics.json";
import React from "react";
import style from "./index.module.css";

export default function Lyrics() {
  const [randomIndex, setRandomIndex] = React.useState(null);
  const [quote, setQuote] = React.useState("");
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    if (randomIndex !== null) {
      setQuote(lyrics[randomIndex].quote);
      setName(lyrics[randomIndex].name);
    }
  }, [randomIndex]);

  const generateRandomIndex = () => {
    const min = 0;
    const max = lyrics.length - 1;
    const index = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomIndex(index);
  };

  return (
    <Layout
      pagetitle={"Lyrics quote"}
      desc={"generate a random lyrics from song with singer"}
    >
      <div className="flex flex-col justify-start items-center h-full w-full mt-40 font-oxygen">
        <button onClick={generateRandomIndex} className={style.button2}>
          Click Me!!!
        </button>
        {randomIndex !== null && (
          <div className="h-1/4 w-1/2 text-center flex flex-col gap-10 text-myblack">
            <h2 className="text-3xl">Today&apos;s lyrics:</h2>
            <p className="text-2xl">{quote}</p>
            <p className="text-xl">~ {name} ~</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
