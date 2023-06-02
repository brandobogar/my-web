import React from "react";
import Detail from "../project-detail/Detail";

export default function project() {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <div className="mt-20">
          <div className="pt-10 text-4xl underline phone:text-3xl">
            <h1>PROJECT</h1>
          </div>
          <div className="grid w-screen grid-cols-2 gap-20 p-20 text-left phone:grid-cols-1 tablet:grid-cols-1">
            <Detail
              topic="AI/Machine Learning"
              date="06-2021"
              title="Nutmeg Seed Image Classification"
              linkweb="https://github.com/brandobogar/Nutmeg-Image-Seed-Classification-Using-CNN.git"
            />
            <Detail
              topic="Flutter"
              date="01-2023"
              title="iMessage (Clone)"
              linkweb="https://github.com/brandobogar/imessage_clone.git"
            />
            <Detail
              topic="Flutter"
              date="02-2023"
              title="Portal Inspire Unsrat (Clone)"
              linkweb="https://github.com/brandobogar/portal-unsrat-clone-.git"
            />
            <Detail
              topic="Game Development"
              date="11-2017"
              title="JUMPJUMP"
              linkweb="https://github.com/brandobogar/JUMPJUMP.git"
            />
          </div>
        </div>
      </div>
    </>
  );
}
