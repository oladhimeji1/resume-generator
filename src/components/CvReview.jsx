import CVReviewImg from "../assets/images/svg/cv-review.svg";
export default function CvReview() {
  return (
    <section className="max-w-6xl mx-auto mt-24 w-[90%] bg-[#F6F5F0] p-6 mb-12 rounded-lg">
      <div className="flex flex-col gap-12 text-center  sm:text-left lg:flex-row">
        <div className="lg:flex-1/2">
          <div>
            <h2 className="text-4xl  font-bold text-[#002D6B] mb-10 lg:text-5xl">
              Help get your CV noticed with a CV review!
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
                  Get personalised feedback within 2-3 business days*
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
                className=" py-4 text-center px-12 bg-emerald-600 text-white font-bold rounded-full"
                href="#"
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
  );
}
