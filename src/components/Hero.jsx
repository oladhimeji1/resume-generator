import { Link } from "react-router-dom";
import HeroImg from "../assets/images/hero-img.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from "./container";

export default function Hero() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container>
      <Slider {...settings}>
        <div>
          <section
            id="hero"
            className="flex flex-col-reverse space-y-12 items-center justify-between min-h-screen mx-auto w-full lg:flex-row"
          >
            <div className="flex flex-col space-y-8 items-center justify-center lg:items-start lg:w-1/2 ">
              <h1 className="text-3xl font-bold text-center mb-8 lg:text-left sm:text-5xl leading-normal text-zinc-800">
                Make your professional resume{" "}
                <span className="text-emerald-900">in minutes</span>
              </h1>
              <p className="text-center text-bold  lg:text-left text-lg text-zinc-600">
                Build a professional resume that opens doors to new
                opportunities. Graft a resumse with us that stands out from the
                crowd, get noticed by employers with a resume that highlights
                your strengths.
              </p>

              <Link
                to="/build-resume"
                className="bg-emerald-900 px-8 py-4 text-white text-xl rounded-full text-center transition hover:bg-[#5E4AC3]"
              >
                Build Your Resume 📃
              </Link>
            </div>

            <div>
              <img
                src={HeroImg}
                alt="A simple resume template design with a simple face"
                loading="eager"
                className="sm:w-lg"
              />
            </div>
          </section>
        </div>
        <div>
          <section
            id="hero"
            className="flex flex-col-reverse space-y-12 items-center justify-between min-h-screen mx-auto w-full lg:flex-row"
          >
            <div>
              <img
                src={HeroImg}
                alt="A simple resume template design with a simple face"
                loading="eager"
                className="sm:w-lg"
              />
            </div>

            <div className="flex flex-col space-y-8 items-center justify-center lg:items-start lg:w-1/2 ">
              <h1 className="text-3xl font-bold text-center mb-8 lg:text-left sm:text-5xl leading-normal text-zinc-800">
                Make your professional resume{" "}
                <span className="text-emerald-900">in minutes</span>
              </h1>
              <p className="text-center text-bold  lg:text-left text-lg text-zinc-600">
                Build a professional resume that opens doors to new
                opportunities. Graft a resumse with us that stands out from the
                crowd, get noticed by employers with a resume that highlights
                your strengths.
              </p>

              <Link
                to="/build-resume"
                className="bg-emerald-900 px-8 py-4 text-white text-xl rounded-full text-center transition hover:bg-[#5E4AC3]"
              >
                Build Your Resume 📃
              </Link>
            </div>
          </section>
        </div>
      </Slider>

      {/* <section
      id="hero"
      className="flex flex-col-reverse space-y-12 items-center justify-between min-h-screen max-w-7xl mx-auto w-[90%] lg:flex-row"
    >
      <div className="flex flex-col space-y-8 items-center justify-center lg:items-start lg:w-1/2 ">
        <h1 className="text-3xl font-bold text-center mb-8 lg:text-left sm:text-5xl leading-normal text-zinc-800">
          Make your professional resume{" "}
          <span className="text-emerald-900">in minutes</span>
        </h1>
        <p className="text-center text-bold  lg:text-left text-lg text-zinc-600">
          Build a professional resume that opens doors to new opportunities.
          Graft a resumse with us that stands out from the crowd, get noticed by
          employers with a resume that highlights your strengths.
        </p>

        <Link
          to="/build-resume"
          className="bg-emerald-900 px-8 py-4 text-white text-xl rounded-full text-center transition hover:bg-[#5E4AC3]"
        >
          Build Your Resume 📃
        </Link>
      </div>

      <div>
        <img src={HeroImg} alt="A simple resume template design with a simple face" loading='eager' className="sm:w-lg" />
      </div>
    </section> */}
    </Container>
  );
}
