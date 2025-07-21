function SummaryForm() {
  return (
    <div className="flex flex-col gap-2 mb-4 relative">
      <label htmlFor="summary" className="font-semibold">
        SUMMARY
      </label>
      <textarea
        rows="10"
        className="bg-[#e6e6e6] py-3 rounded-md px-4 focus:outline-none"
        name="summary"
        id="summary"
        onChange={(e) => {
          handleInputChange("summary", e.target.value);
        }}
        value={resumeData.summary}
        autoComplete="true"
      ></textarea>
    </div>
  );
}

export default SummaryForm;
