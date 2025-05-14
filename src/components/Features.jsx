import { FaFileAlt, FaColumns, FaPalette } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaFileAlt className="text-blue-600 text-3xl" />,
      title: "User-Friendly Resumes",
      description:
        "Professionally designed resumes that are easy to read and tailored for modern recruitment systems.",
    },
    {
      icon: <FaColumns className="text-green-600 text-3xl" />,
      title: "Flexible Layouts",
      description:
        "Choose from two-column, single-column, or multi-page resume formats for the perfect structure.",
    },
    {
      icon: <FaPalette className="text-purple-600 text-3xl" />,
      title: "Customizable Design",
      description:
        "Easily change fonts, colors, and backgrounds to match your personal brand or industry style.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-start gap-4 hover:shadow-lg transition"
        >
          <div className="bg-gray-100 p-3 rounded-full">{feature.icon}</div>
          <h3 className="text-xl font-semibold">{feature.title}</h3>
          <p className="text-gray-600 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
