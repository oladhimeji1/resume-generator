import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import ResumeBuild from "./pages/ResumeBuild";
import ResumeTemplates from "./pages/ResumeTemplates";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ResumeBuild />} path="/build-resume" />
        <Route
          element={<ResumeTemplates />}
          path="/build-resume/resume-templates"
        />
        <Route element={<PageNotFound />} path="*" />
      </Routes>
    </Router>
  );
}

export default App;
