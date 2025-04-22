import HeroImg from "../assets/images/hero-img.webp";

export default function Hero() {
  return (
    <section
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
          Graft a resume with us that stands out from the crowd, get noticed by
          employers with a resume that highlights your strengths.
        </p>

        <a
          href="#"
          className="bg-emerald-900 px-8 py-4 text-white text-xl rounded-full text-center transition hover:bg-[#5E4AC3]"
        >
          Build Your Resume 📃
        </a>
      </div>

      <div>
        <img src={HeroImg} alt="" className="sm:w-lg" />
      </div>
    </section>
  );
}
