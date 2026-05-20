import { BrowserRouter, Route, Routes } from "react-router-dom";
import LearningRoadmapPage from "./components/LearningRoadmapPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LearningRoadmapPage />} />
        <Route path="/roadmap" element={<LearningRoadmapPage />} />
      </Routes>
    </BrowserRouter>
  );
}
