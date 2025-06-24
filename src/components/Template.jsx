export default function Template({
  imageUrl,
  id,
  handleTemplateSelect,
  template,
  selectedTemplate,
}) {
  return (
    <div
      className={`${
        selectedTemplate === template ? "border-emerald-700 border-3" : ""
      }   shadow-lg cursor-pointer transition `}
      onClick={() => {
        handleTemplateSelect(template, id);
      }}
    >
      <img src={imageUrl} alt={`Template ${id}`} />
    </div>
  );
}
