import Button from "../../../components/Button";
import NFT from "../../../components/NFT";

const Page = () => {
  return (
    <div className="">
      <div className="bg-[url('/nft/cover.png')] bg-cover bg-no-repeat bg-center h-[20rem] flex justify-center items-center">
        <h1 className="text-white font-bold text-[6rem]">NFTs</h1>
      </div>
      <div className="mx-auto flex justify-center items-center gap-4 max-w-[45rem] my-[2rem]">
        <Button type="primary" className="flex-1">
          All NFTs
        </Button>
        <Button type="secondary" className="flex-1">
          My Purchased
        </Button>
        <Button type="secondary" className="flex-1">
          My Sellings
        </Button>
      </div>
      <div className="container px-4 flex flex-wrap gap-4 justify-center">
        <NFT id={1} img={"/nft/img.png"} price={"1.5 ETH"} title={"1023"} />
        <NFT id={1} img={"/nft/img.png"} price={"1.5 ETH"} title={"1023"} />
        <NFT id={1} img={"/nft/img.png"} price={"1.5 ETH"} title={"1023"} />
        <NFT id={1} img={"/nft/img.png"} price={"1.5 ETH"} title={"1023"} />
        <NFT id={1} img={"/nft/img.png"} price={"1.5 ETH"} title={"1023"} />
        <NFT id={1} img={"/nft/img.png"} price={"1.5 ETH"} title={"1023"} />
      </div>
    </div>
  );
};

export default Page;
