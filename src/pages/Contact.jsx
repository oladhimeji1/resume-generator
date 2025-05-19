import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="w-[90%] h-[90vh] max-w-7xl mx-auto ">
        <div className="h-full flex items-center justify-center gap-7 max-w-5xl mx-auto  flex-col">
          <h2 className="text-2xl font-bold text-center md:text-5xl">
            We're here for you 7 days a week
          </h2>
          <p className="text-lg md:text-xl  text-center text-zinc-700">
            Have concern about your account? Question about our products and
            services? Need technical support? You've come to the right place!
            We're here to help you seven days a week.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg min-h-150 flex justify-center flex-col">
        <div className="flex flex-col gap-5 mb-8">
          <h3 className="text-xl font-bold md:text-3xl">Contact us</h3>
          <p className="text-lg md:text-xl">
            Need to talk to someone? Here's how:
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold md:text-3xl">Call Us</h3>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-12">
            <div className="flex flex-col gap-4 md:flex-row  justify-between p-4 flex-1 shadow-lg min-h-60">
              <div className="flex flex-col gap-4">
                <p className="text-xl font-medium">Garki, Abuja</p>
                <p className="text-xl font-medium">+2349130327299</p>
              </div>

              <div className="">
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-zinc-700 md:text-lg">Mon - Fri</p>
                  <p className="text-md md:text-xl">8:00AM - 8:00PM WAT</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-zinc-700 md:text-lg">Sat</p>
                  <p className="text-md md:text-xl">8:00AM - 5:00PM WAT</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-zinc-700 md:text-lg">Sun</p>
                  <p className="text-md md:text-xl">10:00AM - 6:00PM WAT</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row   justify-between p-4 flex-1 shadow-lg min-h-60">
              <div className="flex flex-col gap-4">
                <p className="text-xl font-medium">Port Harcourt, Nigeria</p>
                <p className="text-xl font-medium">+2349130327299</p>
              </div>

              <div className="">
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-zinc-700 md:text-lg">Mon - Fri</p>
                  <p className="text-md md:text-xl">8:00AM - 8:00PM WAT</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-zinc-700 md:text-lg">Sat</p>
                  <p className="text-md md:text-xl">8:00AM - 5:00PM WAT</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-zinc-700 md:text-lg">Sun</p>
                  <p className="text-md md:text-xl">10:00AM - 6:00PM WAT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 min-h-100">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr] items-start justify-start">
          <div className="bg-[#F4F5FB] p-6 rounded-lg flex flex-col items-center justify-center space-y-4">
            <img src="/chat_icon_Light.png" alt="" />
            <h2 className="text-xl md:text-3xl font-bold">Chat with us</h2>
            <div>
              <button className="cursor-pointer px-12 py-3 rounded-full bg-[#FFCD7D] font-bold text-sm md:text-xl">
                Live Chat
              </button>
            </div>
          </div>

          <div className="bg-[#F4F5FB] p-6 rounded-lg">
            <form action="#">
              <h3 className="text-sm md:text-xl font-bold mb-8">
                Reach us Via Email
              </h3>

              <div className="flex flex-col gap-3 mb-6">
                <label htmlFor="" className="text-sm md:text-lg">
                  Full name
                </label>
                <input
                  type="text"
                  className="border py-2 px-4 block w-full rounded-sm ring-1 ring-zinc-600 focus:ring-0"
                  placeholder="Godstime Olademeji"
                />
              </div>
              <div className="flex flex-col gap-3 mb-6">
                <label htmlFor="" className="text-sm md:text-lg">
                  Email address
                </label>
                <input
                  type="email"
                  className="border py-2 px-4 block w-full rounded-sm ring-1 ring-zinc-600 focus:ring-0"
                  placeholder="godstimeolademieji@resume.com"
                />
              </div>
              <div className="flex flex-col gap-3 mb-6">
                <label htmlFor="" className="text-sm md:text-lg">
                  How can we help you?
                </label>
                <textarea
                  rows="15"
                  cols="30"
                  className="border py-2 px-4 block w-full rounded-sm ring-1 ring-zinc-600 focus:ring-0"
                  placeholder="Type here.."
                ></textarea>
              </div>

              <div className="">
                <button className="bg-emerald-900  px-8 py-2 cursor-pointer text-white text-xl rounded-full text-center transition hover:bg-[#5E4AC3]">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
