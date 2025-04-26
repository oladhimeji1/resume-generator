import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import ResumeBuild from "./pages/ResumeBuild";
import ResumeTemplates from "./pages/ResumeTemplates";
import ResumeBuilder from "./components/ResumeBuilder";
function App() {
  useEffect(() => {
    toast.success("Welcome to Resume Wizard");
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<ResumeBuild />} path="/build-resume" />
          <Route
            element={<ResumeTemplates />}
            path="/build-resume/resume-templates"
          />
          <Route
            element={<ResumeBuilder />}
            path="/build-resume/resume-builder"
          />
          <Route element={<PageNotFound />} path="*" />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
