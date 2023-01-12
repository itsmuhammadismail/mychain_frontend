interface Props {
  text: string;
  img: string;
}

const Post = ({ text, img }: Props) => {
  return (
    <div className="flex-1 flex flex-col gap-4">
      <img src={img} alt="" className="rounded-[1.5rem]" />
      <p className="">{text}</p>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img src="/heart.svg" alt="" />
          <p className="font-semibold text-[#F24E1E] text-lg">0.1 ETH</p>
        </div>
        <p className="font-semibold text-[#017EFC] text-lg">TIPS: 10 ETH</p>
      </div>
    </div>
  );
};

export default Post;
