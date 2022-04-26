import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <ul>
      <li>
        <Link to="/search">검색하기</Link>
      </li>
    </ul>
  );
}

export default MainPage;
