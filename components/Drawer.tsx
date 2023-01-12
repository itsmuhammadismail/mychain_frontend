import Drawer from "@mui/material/Drawer";
import Button from "./Button";
import CartItem from "./CartItem";

interface Props {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const MyDrawer = ({ isOpen, toggleDrawer }: Props) => {
  return (
    <Drawer anchor={"right"} open={isOpen} onClose={(e) => toggleDrawer()}>
      <div className="bg-white w-[30rem]">
        <div className="flex flex-col">
          <h2 className="p-8 font-semibold text-xl">Your Cart</h2>
          <hr />
          <div className="flex-1 overflow-auto h-full p-8 flex flex-col gap-8">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <hr />
          <div className="p-8 flex flex-col gap-4 relative bottom-0  ">
            <div className="flex justify-between">
              <h3 className="font-semibold text-lg">Total Price</h3>
              <h3 className="font-semibold text-lg">3.0 ETH</h3>
            </div>
            <Button type="primary">Complete Purchase</Button>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default MyDrawer;
