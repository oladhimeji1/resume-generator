import { Link } from "react-router-dom";
import Template from "../components/Template";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

// template image
import cvBold from "../assets/images/templates-img/cv-bold.webp";
import cvDistinct from "../assets/images/templates-img/cv-distinct.webp";
import cvExpressive from "../assets/images/templates-img/cv-expressive.webp";
import cv1 from "../assets/images/templates-img/cv1.webp";
import cv4 from "../assets/images/templates-img/cv4.webp";
import cv5 from "../assets/images/templates-img/cv5.webp";
import cv7 from "../assets/images/templates-img/cv7.webp";
import cv14 from "../assets/images/templates-img/cv14.webp";
import cv20 from "../assets/images/templates-img/cv20.webp";

export default function ResumeTemplates() {
  const templates = [
    {
      id: 1,
      image: cvBold,
    },
    {
      id: 2,
      image: cvDistinct,
    },
    {
      id: 3,
      image: cvExpressive,
    },
    {
      id: 4,
      image: cv1,
    },
    {
      id: 5,
      image: cv4,
    },
    {
      id: 6,
      image: cv5,
    },
    {
      id: 7,
      image: cv7,
    },
    {
      id: 8,
      image: cv14,
    },
    {
      id: 9,
      image: cv20,
    },
  ];

  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  useEffect(() => {
    if (selectedTemplate) {
      toast("Template Selected");
    }
  }, [selectedTemplate]);
  return (
    <section className="min-h-screen p-2 relative">
      <div className="mb-12">
        <Link to="/" className="font-bold text-cyan-950 text-xl">
          Resume Wizard
        </Link>
      </div>

      <div className="flex flex-col gap-2 items-center text-center ">
        <h2 className="text-3xl font-bold text-cyan-900">
          Choose from our resume templates
        </h2>
        <p className="text-zinc-700">
          Be sure to make a right choice, there is no going back
        </p>
      </div>

      <div className="grid grid-cols-1 justify-center gap-3 md:grid-cols-2 lg:grid-cols-3 mt-10 max-w-7xl mx-auto">
        {templates.map((template) => {
          return (
            <Template
              key={template.id}
              imageUrl={template.image}
              handleTemplateSelect={handleTemplateSelect}
              id={template.id}
              template={template}
            />
          );
        })}
      </div>

      <div className="shadow-2xl shadow-zinc-700 fixed bottom-0 left-0 right-0 h-18 px-12 bg-white">
        <div className="flex gap-4 items-center h-full justify-end">
          <button className="text-cyan-950 font-bold underline ">
            Choose later
          </button>
          {selectedTemplate && (
            <Link
              to="/resume-generator"
              className="pointer"
              state={{ template: selectedTemplate }}
            >
              <button className="text-white bg-fuchsia-600 py-2 px-4 rounded-full transition pointer hover:bg-fuchsia-900">
                Use this template
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
