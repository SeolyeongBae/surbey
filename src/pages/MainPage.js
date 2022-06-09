import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <>
      <div className="flex flex flex-col px-10 py-10">
        <div className="mt-40 mb-5 w-20 content-center ">
          <img
            src="https://www.seekpng.com/png/full/890-8908836_election-officials-need-timely-information-about-data-ballot.png"
            alt="투표"
          />
        </div>
        <h3 className="py-1 rounded-lg text-2xl font-bold">
          쉽고 편하고 꼼꼼한 설문 만들기
        </h3>

        <div> 세상에서 가장 쉬운 설문 제작에 도전해요! </div>
        <Link to="/edit/info">
          <button className="mt-5 py-2 px-4 font-semibold rounded-lg text-white bg-blue-500 hover:bg-blue-700">
            설문 만들기
          </button>
        </Link>
      </div>
    </>
  );
}

export default MainPage;
