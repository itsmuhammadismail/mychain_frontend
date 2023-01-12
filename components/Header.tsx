import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MyDrawer from "./Drawer";
import Nav from "./Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className="">
      <div className="container flex justify-between items-center p-6">
        <Link href="/home">
          <Image alt="" src="/logo.svg" width={48} height={48} />
        </Link>
        <Nav toggleDrawer={toggleDrawer} />
      </div>
      <MyDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default Header;
