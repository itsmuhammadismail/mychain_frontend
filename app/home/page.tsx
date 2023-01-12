import Button from "../../components/Button";
import NFT from "../../components/NFT";
import Post from "../../components/Post";
import UploadPost from "../../components/UploadPost";

const Page = () => {
  return (
    <div className="mb-8">
      <div className="container flex gap-[7rem] p-4">
        <div className="flex-1 flex flex-col gap-20">
          <UploadPost />
          <Post
            text={`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text
        ever since the 1500s,`}
            img={"/post.jpg"}
          />
        </div>
        <div className="">
          <NFT id={1} img={"/nft/img.png"} price={"1.5 ETH"} title={"1023"} />
          <NFT id={1} img={"/nft/img.png"} price={"1.5 ETH"} title={"1023"} />
          <Button type="primary" className="w-full">
            See All NFTs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
