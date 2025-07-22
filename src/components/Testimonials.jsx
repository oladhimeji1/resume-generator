import Container from "./container";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Rita",
    img: "/reviewers/grid1.png",
    text: "Intelligent CV  enabled me to put together an updated resume very easily. The templates provided made it simple to choose the right wording.",
  },
  {
    name: "Chris",
    img: "/reviewers/grid2.png",
    text: "Clear directions and high definitions. A good range for resume styles and templates, cost effective. Professional services including reviews and feedback for improvement.",
  },
  {
    name: "Damian",
    img: "/reviewers/grid12.png",
    text: "More easy to create resume in the PRO version with AI which takes the work out of me by populating the required field.",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to active card
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.offsetWidth * active,
        behavior: "smooth",
      });
    }
  }, [active]);

  return (
    <div className="bg-emerald-200 w-full py-6 min-h-90">
      <Container>
        <div className="max-w-full my-8 mx-auto w-full">
          <h2 className="text-2xl font-extrabold text-center md:text-4xl leading-relaxed mb-20">
            What People Are Saying About Our Resume Maker.
          </h2>

          <div className="relative">
            <div
              ref={scrollRef}
              className="flex overflow-x-hidden py-6 no-scrollbar scroll-smooth snap-x snap-mandatory"
              style={{ scrollBehavior: "smooth" }}
            >
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  className={`bg-white min-w-full md:min-w-[400px] max-w-md mx-auto p-8 rounded-2xl shadow-lg flex-shrink-0 snap-center transition-all duration-300 ${
                    idx === active ? "ring-4 ring-emerald-400" : "opacity-70"
                  }`}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: idx === active ? 1 : 0.95, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <div className="flex items-center justify-between gap-6 mb-6">
                    <h4 className="text-xl font-bold text-emerald-700">
                      {t.name}
                    </h4>
                    <img
                      src={t.img}
                      className="w-16 h-16 rounded-full object-cover border-2 border-emerald-300"
                      alt={t.name}
                    />
                  </div>
                  <p className="text-lg text-zinc-700 leading-relaxed italic">
                    "{t.text}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx === active ? "bg-emerald-700" : "bg-emerald-300"
                }`}
                onClick={() => setActive(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
