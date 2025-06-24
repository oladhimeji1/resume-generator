import { Link } from "react-router-dom";
import Template from "../components/Template";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import templates from "../data.js";
import Container from "../components/container.jsx";
import Navbar from "../components/Navbar.jsx";

export default function ResumeTemplates() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [templateId, setTemplateId] = useState(null);

  const handleTemplateSelect = (template, id) => {
    setSelectedTemplate(template);
    setTemplateId(id);
  };

  useEffect(() => {
    if (selectedTemplate) {
      toast.success(`Template ${templateId} Selected`);
    }
  }, [selectedTemplate]);
  return (
    <Container>
      <section className="min-h-screen pt-2 relative">
        <div className="h-34">
          {/* <Link to="/" className="font-bold text-cyan-950 text-xl">
          Resume Wizard
        </Link> */}
        </div>
        <Navbar />

        <div className="flex flex-col gap-2 items-center text-center ">
          <h2 className="text-3xl font-bold text-cyan-900">
            Choose from our resume templates
          </h2>
          <p className="text-zinc-700">
            You can always change the template later in the resume builder.
          </p>
        </div>

        <div className="grid pb-50 grid-cols-1 gap-8 justify-center md:grid-cols-2 lg:grid-cols-3 mt-10 max-w-full mx-auto">
          {templates.map((template) => {
            return (
              <Template
                key={template.id}
                imageUrl={template.image}
                handleTemplateSelect={handleTemplateSelect}
                id={template.id}
                template={template}
                selectedTemplate={selectedTemplate}
              />
            );
          })}
        </div>

        <div className="shadow-2xl shadow-zinc-700 fixed bottom-0 left-0 right-0 h-18 px-12 bg-white">
          <div className="flex gap-4 items-center h-full justify-end">
            <button className="text-cyan-950 font-bold underline ">
              Generate with our AI
            </button>
            {selectedTemplate && (
              <Link
                to={`/build-resume/resume-builder/${selectedTemplate.id}`}
                className="pointer"
              >
                <button className="text-white bg-fuchsia-600 py-2 px-4 rounded-full transition pointer hover:bg-fuchsia-900 cursor-pointer">
                  Use template {templateId}
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </Container>
  );
}
