import React, { useEffect, useState } from "react";
import Layout from "../../../../Components/features/layout/layout";
import { Router } from "next/router";
import Link from "next/link";
import { Axios } from "axios";

export default function Sentiment() {
  const [teamName, setTeamName] = useState("");
  const [showPage, setShowPage] = useState(false);

  const handleTeamInput = (e) => {
    setTeamName(e.target.value);
  };

  const handlePageUnderConstruction = (fa) => {
    setShowPage(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (teamName.length > 5) {
      console.log(teamName);
    } else {
      console.log("That doesn't appear to be a valid name");
    }
  };

  return (
    <>
      <Layout
        pagetitle={"Sentiment Analysis"}
        desc={"football club sentiment analysis in twitter"}
      >
        <main className="flex flex-col items-center justify-center h-screen font-oxygen">
          <div className="flex flex-col gap-8 h-96 items-center justify-center border-8roundedp-10border-myblack2">
            <h1 className="text-3xl text-center">
              Welcome!
              <br /> Let&apos;s see how the world feels about your team.{" "}
            </h1>
            <form
              className="flex flex-col gap-4 items-center"
              onSubmit={handleSubmit}
            >
              <label className="text-xl">Enter a full team name</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter your team name"
                  value={teamName}
                  onChange={handleTeamInput}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-myteal p-2 border-myteal border-2 rounded-xl shadow-lg"
                  onClick={handlePageUnderConstruction}
                >
                  Check On Team
                </button>
              </div>
            </form>
            {showPage ? (
              <h2 className="text-3xl font-bold">Page under construction!!!</h2>
            ) : null}
          </div>
        </main>
      </Layout>
    </>
  );
}
