import CVReviewImg from "../assets/images/svg/cv-review.svg";
export default function CvReview() {
  return (
    <section className="max-w-6xl mx-auto mt-24 w-[90%] ">
      <div className="flex flex-col gap-12 text-center  sm:text-left lg:flex-row">
        <div className="">
          <div>
            <h2 className="text-4xl font-bold text-blue-600 mb-10">
              Help get your CV noticed with a CV review!
            </h2>
            <div className="flex flex-col gap-8 ">
              <div className="flex gap-3 items-center">
                <p className="py-2 px-4 text-white font-bold text-xl bg-amber-500 rounded-full">
                  1
                </p>
                <p className="text-xl font-medium text-blue-500">
                  Submit your CV for review
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <p className="py-2 px-4 text-white font-bold text-xl bg-amber-500 rounded-full">
                  2
                </p>
                <p className="text-xl font-medium text-blue-500">
                  Get personalised feedback within 2-3 business days*
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <p className="py-2 px-4 text-white font-bold text-xl bg-amber-500 rounded-full">
                  3
                </p>
                <p className="text-xl font-medium text-blue-500">
                  Use the feedback to strengthen your CV!
                </p>
              </div>
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
