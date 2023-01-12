const CartItem = () => {
  return (
    <div className="flex gap-4">
      <img
        src="/nft/img.png"
        alt=""
        className="w-[8rem] h-[8rem] rounded-[1.5rem]"
      />
      <div className="flex flex-col justify-center">
        <h3 className="text-[#017EFC] font-semibold mb-4 text-xl">#1026</h3>
        <div className="h-[3.75rem] px-[1rem] py-[0.5rem] rounded-[1.5rem] bg-white flex items-center border border-[#017EFC] text-[#017EFC] ">
          1.5 ETH
        </div>
      </div>
    </div>
  );
};

export default CartItem;
