import CVReviewImg from "../assets/images/svg/cv-review.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CvReview() {
  const handleAlert = () => {
    toast.success("Feature coming soon!", {
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
    });
  };
  return (
    <>
      <section className="max-w-6xl mx-auto mt-24 w-[90%] p-6 mb-12 rounded-lg">
        <div className="flex flex-col gap-12 text-center  sm:text-left lg:flex-row">
          <div className="lg:flex-1/2">
            <div>
              <h2 className="text-3xl  font-bold text-[#002D6B] leading-normal mb-10">
                Get your CV noticed — let our AI review it for you!
              </h2>
              <div className="flex flex-col gap-8 ">
                <div className="flex gap-3 items-center">
                  <p className="py-2 px-4 text-white font-bold text-xl bg-amber-500 rounded-full">
                    1
                  </p>
                  <p className="text-xl  text-[#002D6B]">
                    Submit your CV for review
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <p className="py-2 px-4 text-white font-bold text-xl bg-amber-500 rounded-full">
                    2
                  </p>
                  <p className="text-xl  text-[#002D6B]">
                    Get personalised and instant feedback by our AI
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <p className="py-2 px-4 text-white font-bold text-xl bg-amber-500 rounded-full">
                    3
                  </p>
                  <p className="text-xl  text-[#002D6B]">
                    Use the feedback to strengthen your CV!
                  </p>
                </div>

                <a
                  className=" py-4 text-center transition px-12 bg-emerald-600 text-white font-bold cursor-pointer rounded-full hover:bg-emerald-800 "
                  onClick={handleAlert}
                >
                  Get CV Review
                </a>

                <small className="text-sm text-blue-700">
                  *In the case of high demand we reserve the right to extend the
                  number of business days to provide personalised feedback.
                </small>
              </div>
            </div>
          </div>

          <div className="">
            <img src={CVReviewImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
