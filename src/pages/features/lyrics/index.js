import Layout from "../../../../Components/features/layout/layout";
import lyrics from "../../api/lyrics.json";
import React from "react";
import style from "./index.module.css";
import MyHead from "../../../../Components/features/head/MyHead";
import UI from "../../../../Components/ui/UI";
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
    <Layout>
      <MyHead
        keyword={"lyrics, api, generate random"}
        desc={"generate a random lyrics from song with singer"}
        pageTitle={"Lyrics quote"}
        author={"Brando Margendy Bogar"}
      />

      <div className="flex flex-col items-center justify-start w-full h-full mt-32 font-oxygen">
        <UI.Button onClick={generateRandomIndex} title={"Click Me!!!"} />

        {randomIndex !== null && (
          <div className="flex flex-col w-1/2 gap-10 text-center h-1/4 text-myblack mt-10">
            <h2 className="text-3xl">Today&apos;s lyrics:</h2>
            <p className="text-2xl">{quote}</p>
            <p className="text-xl">~ {name} ~</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
