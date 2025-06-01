import AmazonLogo from "../assets/images/amazon.webp";
import GoogleLogo from "../assets/images/google.webp";
import SpotifyLogo from "../assets/images/spotify.webp";
import TeslaLogo from "../assets/images/tesla.webp";
import Slider from "react-slick";

export default function LovedInterveiwers() {
  const settings = {
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrow: false,
    rtl: true,
  };
  return (
    <section className="max-w-7xl mx-auto p-6">
      {/* <h2 className="text-center mb-12 font-bol text-emerald-900 -tracking-tight">
        Loved by Interviewers at
      </h2> */}
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img
              src={AmazonLogo}
              className="w-3/4 sm:w-1/3"
              alt="Amazon logo"
            />
          </div>
          <div>
            <img src={TeslaLogo} className="w-3/4 sm:w-1/3" alt="Tesla logo" />
          </div>
          <div>
            <img
              src={SpotifyLogo}
              className="w-3/4 sm:w-1/3"
              alt="Spotify logo"
            />
          </div>
          <div>
            <img
              src={GoogleLogo}
              className="w-3/4 sm:w-1/3"
              alt="Google logo"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
}
