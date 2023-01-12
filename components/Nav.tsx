import Link from "next/link";

interface Props {
  toggleDrawer: () => void;
}

const Nav = ({ toggleDrawer }: Props) => {
  return (
    <ul className="flex gap-10">
      <Link href="/home">
        <li>
          <img src="/nav/home.svg" alt="" className="h-[1.5rem]" />
        </li>
      </Link>
      <Link href="/home/nft">
        <li>
          <img src="/nav/nft.svg" alt="" className="h-[1.5rem]" />
        </li>
      </Link>

      <li className="cursor-pointer" onClick={toggleDrawer}>
        <img src="/nav/cart.svg" alt="" className="h-[1.5rem]" />
      </li>

      <Link href="">
        <li>
          <img src="/nav/message.svg" alt="" className="h-[1.5rem]" />
        </li>
      </Link>
    </ul>
  );
};

export default Nav;
