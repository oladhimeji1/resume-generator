import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LovedInterveiwers from "./components/LovedInterviewers";
import Features from "./components/Features";
import CoreSteps from "./components/CoreSteps";
import CvReview from "./components/CvReview";

function App() {
  return (
    <>
      <Navbar />

      <main className="mt-24">
        <Hero />
        <LovedInterveiwers />
        <Features />
        <CoreSteps />
        <CvReview />
      </main>
    </>
  );
}

export default App;
