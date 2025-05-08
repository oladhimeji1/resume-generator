import { useParams } from "react-router-dom";

export default function TemplatePreview() {
  const { templateId } = useParams();

  return (
    <div className="">
      <h1>Template Preview Page </h1>
      <p> Currently in {templateId} page </p>
    </div>
  );
}
