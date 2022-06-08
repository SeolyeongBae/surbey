import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import MakeSurbeyInfopPage from "./pages/MakeSurbeyInfoPage";
import MakeSurbeyPage from "./pages/MakeSurbeyPage";
import MakeSurbeySwiperPage from "./pages/MakeSurbeySiwperPage";
import SearchPage from "./pages/SearchPage";
import ShareSurveyPage from "./pages/ShareSurveyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="response/:id" element={<SearchPage />} />
      <Route path="surveys/:id" element={<MakeSurbeyPage />} />
      <Route path="surveys/:id/share" element={<ShareSurveyPage />} />
      <Route path="edit/info" element={<MakeSurbeyInfopPage />} />
      <Route path="surveys/:id/detail" element={<MakeSurbeySwiperPage />} />
    </Routes>
  );
}

export default App;
