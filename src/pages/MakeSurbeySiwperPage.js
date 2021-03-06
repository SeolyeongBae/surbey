import React from "react";
import { Link, useLocation } from "react-router-dom";
import MakeSurbeySwiperContainer from "../containers/MakeSurbeySwiperContainer";

function MakeSurbeySwiperPage() {
  const location = useLocation();

  const focusIndex =
    location.state.focusIndex == null ? 1 : location.state.focusIndex;
  //새로고침하면 안되는 이유 : 스토어에 들어있는게 날아감.
  //이전 페이지에서 swiper로 넘어오며 어떤 index를 먼저 보여줄지 결정하는 게 focus index다.

  return (
    <div className="flex flex flex-col py-10">
      <div className="py-1 rounded-lg text-2xl font-bold px-10 mb-10">
        <Link to="/edit"> 설문 제작 </Link>
      </div>
      <MakeSurbeySwiperContainer focusIndex={focusIndex} />
    </div>
  );
}

export default MakeSurbeySwiperPage;
