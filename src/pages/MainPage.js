import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <>
      <div>
        <Link to="/search">검색하기</Link>
      </div>
      <div> 설문을 만들고 싶으신가요~?</div>
      <div>
        <Link to="/edit/info"> 질문 만들기 </Link>
      </div>
    </>
  );
}

export default MainPage;
