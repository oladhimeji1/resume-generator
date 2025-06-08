import Container from "./container";

const Testimonials = () => {
  return (
    <div className="bg-emerald-200 w-full py-6 min-h-90">
      <Container>
      <div className="max-w-full my-8 mx-auto w-full">
        <h2 className="text-2xl font-extrabold text-center md:text-4xl leading-relaxed mb-20">
          What People Are Saying About Our Resume Maker.
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg hover:ring-2 ring-emerald-900"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              mass: 1,
              duration: 0.8,
              bounce: 0.5,
              delay: 1,
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="flex items-center justify-between gap-10 mb-8">
              <h4 className="text-xl font-bold">Oladimeji Abdulrazaq</h4>
              <img
                src="/reviewers/grid1.png"
                className="w-18 rounded-full md:w-20"
                alt=""
              />
            </div>

            <p className="text-xl text-zinc-700 leading-relaxed">
              ResumeWizard enabled me to put together an updated resume very
              easily. The templates provided made it simple to choose the right
              wording.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg hover:ring-2 ring-emerald-900"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              mass: 1,
              duration: 5,
              delay: 1.5,
              bounce: 1,
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="flex items-center justify-between gap-10 mb-8">
              <h4 className="text-xl">Chris</h4>
              <img
                src="/reviewers/grid2.png"
                className="w-18 rounded-full md:w-20"
                alt=""
              />
            </div>

            <p className="text-xl text-zinc-700 leading-relaxed">
              Clear directions and high definitions. A good range for resume
              styles and templates, cost effective. Professional services
              including reviews and feedback for improvement.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg hover:ring-2 ring-emerald-900"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              mass: 1,
              duration: 0.8,
              bounce: 0.5,
              delay: 2,
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="flex items-center justify-between gap-10 mb-8">
              <h4 className="text-xl">Damian</h4>
              <img
                src="/reviewers/grid12.png"
                className="w-18 rounded-full md:w-20"
                alt=""
              />
            </div>

            <p className="text-xl text-zinc-700 leading-relaxed">
              More easy to create resume in the PRO version with AI which takes
              the work out of me by populating the required field.
            </p>
          </motion.div>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default Testimonials;
