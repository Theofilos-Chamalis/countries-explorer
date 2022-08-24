import { FunctionComponent } from "react";
import Button from "./Button";
import { HiOutlineMoon } from "react-icons/hi";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = (props) => {
  return (
    <nav className="bg-white absolute px-20 py-4 shadow-md fixed w-full z-30 top-0 left-0 border-b border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="container flex justify-between items-center content-center mx-auto">
        <span className="self-center text-xl font-nunito-bold whitespace-nowrap dark:text-white">
          Where in the world?
        </span>
        <div className="mt-2">
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
