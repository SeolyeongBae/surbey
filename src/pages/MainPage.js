import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <ul>
      <li>
        <Link to="/search">검색하기</Link>
      </li>
      <il>
        <Link to="/edit"> 질문 만들기 </Link>
      </il>
    </ul>
  );
}

export default MainPage;
