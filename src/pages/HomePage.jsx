import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LovedInterveiwers from "../components/LovedInterviewers";
import Features from "../components/Features";
import CoreSteps from "../components/CoreSteps";
import CvReview from "../components/CvReview";
import JobReviewer from "../components/JobReviewer";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import FAQ from "./Faq";
import PricingPage from "../components/Pricing";
export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="mt-24">
        <Hero />
        <LovedInterveiwers />
        <Features />
        <CoreSteps />
        <CvReview />
        
        <JobReviewer />
        <Testimonials />
        <PricingPage />
        <FAQ />
        {/* <Ads /> */}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
