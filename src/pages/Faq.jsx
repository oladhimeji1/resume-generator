import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Why use our Resume Builder?",
    answer:
      "It’s fast, it’s easy, and it can make a professional, full-page resume for anyone. Regardless of how much work experience you have, how long you went to school, or what skills you possess, our software was designed by certified resume writers to generate a complete resume for every kind of job seeker.",
  },
  {
    question: "What should I put on my resume?",
    answer:
      "There are five main sections that every resume should include: Contact Info, Resume Introduction, Professional Experience, Education, and Skills. However, keep in mind that depending on your industry, you may want to include additional sections.",
  },
  {
    question: "Can I customize my resume layout?",
    answer:
      "Yes, you can choose from multiple templates and customize fonts, spacing, and layout to match your preferences and industry standards.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use encrypted connections and do not share or sell your information. Your data privacy is a top priority.",
  },
  {
    question: "Can I download my resume in different formats?",
    answer:
      "Yes, once you're done building your resume, you can download it as a PDF or DOCX file suitable for printing or online submission.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full px-4 md:px-12 py-12 bg-white">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-6 transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="text-left w-full text-xl font-semibold hover:text-blue-700 transition-colors"
            >
              {faq.question}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
