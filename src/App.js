import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import MakeSurbeyInfopPage from "./pages/MakeSurbeyInfoPage";
import MakeSurbeyPage from "./pages/MakeSurbeyPage";
import MakeSurbeySwiperPage from "./pages/MakeSurbeySiwperPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="edit" element={<MakeSurbeyPage />} />
      <Route path="edit/info" element={<MakeSurbeyInfopPage />} />
      <Route path="edit/detail" element={<MakeSurbeySwiperPage />} />
    </Routes>
  );
}

export default App;
