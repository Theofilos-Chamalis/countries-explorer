import { FunctionComponent } from "react";
import Button from "./Button";
import { HiOutlineMoon } from "react-icons/hi";
import Link from "next/link";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = (props) => {
  return (
    <nav className="bg-dmlm-white absolute py-4 shadow-md fixed w-full z-30 top-0 left-0 border-b border-gray-200">
      <div className="flex justify-between pl-32 pr-32">
        <Link href="/">
          <span className="self-center text-xl font-nunito-bold text-lm-very-dark-blue whitespace-nowrap cursor-pointer">
            Where in the world?
          </span>
        </Link>
        <div className="mt-2 -mr-9">
          <Button
            text="Dark Mode"
            flat={true}
            icon={<HiOutlineMoon size={18} />}
            onClick={() => console.log("Dark mode clicked!")}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
