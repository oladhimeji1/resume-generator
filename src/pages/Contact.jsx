import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="w-[90%] h-[90vh] max-w-7xl mx-auto ">
        <div className="h-full flex items-center justify-center gap-7 max-w-5xl mx-auto  flex-col">
          <h2 className="text-2xl font-bold text-center md:text-5xl">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl  text-center text-zinc-700">
            Have concern about your account? Question about our products and
            services? Need technical support? You've come to the right place!
            We're here to help you seven days a week.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 min-h-screen">
  <div className="max-w-6xl mx-auto">

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

      {/* Right Column - Chat Option */}
      <div className="bg-[#F4F5FB] p-8 rounded-lg flex flex-col items-center justify-center space-y-6">
        <img src="/chat_icon_Light.png" alt="Chat Icon" className="w-20 h-20" />
        <h2 className="text-2xl font-bold text-center">Chat with us</h2>
        <p className="text-gray-600 text-center">Our friendly team is here to help.</p>
        <button className="bg-[#FFCD7D] hover:bg-amber-400 text-gray-900 font-bold py-3 px-12 rounded-full transition duration-200">
          Live Chat
        </button>
      </div>

      {/* Left Column - Contact Form */}
      <div className="bg-[#F4F5FB] p-8 rounded-lg">
        <form className="space-y-6">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              className="bg-[#e6e6e6] py-3 px-4 block w-full rounded-md"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              className="bg-[#e6e6e6] py-3 px-4 block w-full rounded-md"
              placeholder="Your email address"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Subject</label>
            <input
              type="text"
              className="bg-[#e6e6e6] py-3 px-4 block w-full rounded-md"
              placeholder="Subject"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">How can we help you? Feel free to get in touch!</label>
            <textarea
              rows="4"
              className="bg-[#e6e6e6] py-3 px-4 block w-full rounded-md"
              placeholder="Your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-md transition duration-200 cursor-pointer"
          >
            Get in touch
          </button>
        </form>
      </div>

      
    </div>
  </div>
</div>
      <Footer />
    </>
  );
}
