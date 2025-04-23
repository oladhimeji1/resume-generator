import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<h1>404 Page Not Found</h1>} path="*" />
      </Routes>
    </Router>
  );
}

export default App;
