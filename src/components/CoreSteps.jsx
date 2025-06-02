import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BagIcon from "../assets/images/svg/bag.svg";
import CameraIcon from "../assets/images/svg/camera.svg";
import TimerIcon from "../assets/images/svg/timer.svg";

export default function CoreSteps() {
  return (
    <section className="mx-auto max-w-7xl flex flex-col justify-center p-6">
      <div className="flex justify-between items-center flex-col max-w-7xl gap-5 mx-auto mb-18">
        <h2 className="text-2xl sm:text-4xl text-center font-bold">
          Create a Resume that get results
        </h2>
        <Link
          className="block transition py-4 px-12 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-800"
          to="/build-resume/resume-templates"
        >
          Choose a template
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <motion.div
          className="flex flex-col gap-3"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <img src={BagIcon} alt="bag icon" width="48" />
          <h3 className="font-bold text-xl">Recruiter-Approved Resume</h3>
          <p className="font-light">
            We work with recruiters to design resume templates that format
            automatically.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-3"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <img src={TimerIcon} alt="bag icon" width="48" />
          <h3 className="font-bold text-xl">
            Finish Your Resume in 15 Minutes
          </h3>
          <p className="font-light">
            Resume Now helps you tackle your work experience by reminding you
            what you did at your job.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-3"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <img src={CameraIcon} alt="bag icon" width="48" />
          <h3 className="font-bold text-xl">Land an Interview</h3>
          <p className="font-light">
            We suggest the skills you should add. It helped over a million
            people get interviews.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
