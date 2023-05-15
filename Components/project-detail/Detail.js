import React, { Component } from "react";
import Link from "next/link";
export default class Detail extends Component {
  render() {
    return (
      <>
        <div className="flex flex-col h-64 p-4 pl-8 border-4  w-108 border-myteal justify-evenly text-myblack border-opacity-70 rounded-bl-3xl rounded-tr-3xl phone:h-full">
          <div className="mb-2 text-lg font-bold ">
            <h1>{this.props.topic}</h1>
          </div>

          <div className="mb-2 text-lg">
            <h2>{this.props.date}</h2>
          </div>
          <div className="mb-2 text-2xl text-myblack2">
            <h3>{this.props.title}</h3>
          </div>
          <div className="mb-2 text-lg ">
            <Link
              href={this.props.linkweb}
              className="flex flex-row items-center "
              target="_blank"
            >
              Continue Reading
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 pl-1"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
