import { useLocation } from "react-router-dom";

export default function ResumeBuilder() {
  const location = useLocation();
  const template = location.state.template;
  return (
    <div>
      <h1>Resume Builder</h1>
      <p>Selected Template: {template.id}</p>
      <img src={template.image} alt="" />
    </div>
  );
}
