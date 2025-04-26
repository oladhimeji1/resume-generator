export default function Template({ imageUrl, id, handleTemplateSelect, template }) {
  return (
    <div className=" shadow-lg cursor-pointer transition hover:-translate-y-5 relative" onClick={()=> {
      
      handleTemplateSelect(template)
    }}>
      <img src={imageUrl} alt={`Template ${id}`} />
    </div>
  );
}
