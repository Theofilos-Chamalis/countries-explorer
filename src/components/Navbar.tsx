import { FunctionComponent } from "react";
import Button from "./Button";
import { HiOutlineMoon } from "react-icons/hi";
import Link from "next/link";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = (props) => {
  return (
    <nav className="bg-dmlm-white z-30 top-0 fixed md:py-4 shadow-md w-full border-b border-gray-200">
      <div className="flex justify-between pl-8 md:px-32">
        <Link href="/">
          <span className="self-center text-sm md:text-xl font-nunito-bold text-lm-very-dark-blue whitespace-nowrap cursor-pointer">
            Where in the world?
          </span>
        </Link>
        <div className="mt-2 md:-mr-9">
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
