import Button from "./Button";

interface Props {
  id: number;
  img: string;
  title: string;
  price: string;
}

const NFT = ({ id, img, title, price }: Props) => {
  return (
    <div className="w-[20rem]  nft-shadow overflow-hidden rounded-[1.5rem] flex flex-col mb-8">
      <div
        className="h-[18rem] bg-cover bg-no-repeat bg-center relative"
        style={{ backgroundImage: `url('${img}')` }}
      >
        <div className="h-[3.75rem] px-[1rem] py-[0.5rem] rounded-[1.5rem] bg-white flex items-center text-[#017EFC] absolute bottom-5 left-5">
          {price}
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-[#017EFC] font-semibold mb-4 text-xl">#{title}</h3>
        <div className="flex gap-2">
          <Button type="primary" className="w-[9rem]">
            Buy Now
          </Button>
          <Button type="secondary" className="w-[9rem]">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NFT;
