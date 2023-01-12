const UploadPost = () => {
  return (
    <div className="flex gap-4">
      <textarea
        rows={1}
        className="bg-[#F7F7F7] border border-[#E0E0E0] focus:outline-none py-3 px-6 rounded-[1.5rem] h-[3rem] flex-1 overflow-hidden"
        placeholder="What you want to share?"
      />
      <button className="h-[3rem] px-[2rem] py-[0.5rem] rounded-[1.5rem] bg-[#017EFC] text-white">
        <img src="/gallery.svg" />
      </button>
      <button className="h-[3rem] px-[2rem] py-[0.5rem] rounded-[1.5rem] bg-[#017EFC] text-white">
        Share
      </button>
    </div>
  );
};

export default UploadPost;
