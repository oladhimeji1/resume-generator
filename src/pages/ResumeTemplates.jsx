import { Link } from "react-router-dom";
import Template from "../components/Template";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import templates from "../data.js";

export default function ResumeTemplates() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  useEffect(() => {
    if (selectedTemplate) {
      toast.success("Template Selected");
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
              to={`/build-resume/resume-builder/${selectedTemplate.id}`}
              className="pointer"
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
