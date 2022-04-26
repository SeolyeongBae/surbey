import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="search" element={<SearchPage />} />
      {/* <Route path="storage/:id" element={<Storage />} /> */}
    </Routes>
  );
}

export default App;

/*
photo 포함, react, redux middleware 사용해서 
router
single page application 화면 바뀔 때마다 action dispatch 
redux middelware, redux saga 사용해서 api 콜,
swipe 안에 넣고 swiper 기능까지 만들어보기!?
*/
