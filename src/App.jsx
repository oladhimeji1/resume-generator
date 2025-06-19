import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// import app routes (pages)
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import ResumeBuild from "./pages/ResumeBuild";
import ResumeTemplates from "./pages/ResumeTemplates";
import ResumeBuilder from "./components/ResumeBuilder";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<ResumeBuild />} path="/build-resume" />
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<Policy />} path="/policy" />
          <Route element={<Contact />} path="/contact" />
          <Route
            element={<ResumeTemplates />}
            path="/build-resume/resume-templates"
          />
          <Route
            element={<ResumeBuilder />}
            path="/build-resume/resume-builder/:templateId"
          />
          <Route element={<PageNotFound />} path="*" />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
