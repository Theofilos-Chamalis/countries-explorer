import { FunctionComponent } from "react";
import Button from "./Button";
import { HiOutlineMoon } from "react-icons/hi";
import Link from "next/link";
import { useTheme } from "next-themes";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  // Use the useTheme hook to get the current theme and toggle it
  const { theme, setTheme } = useTheme();

  return (
    <nav
      className="bg-dmlm-white z-30 top-0 fixed md:py-4 shadow-md w-full border-b border-gray-200
    dark:bg-dm-dark-blue dark:border-gray-800"
    >
      <div className="flex justify-between pl-8 md:px-32">
        <Link href="/" className="flex">
          <span
            className="self-center text-sm md:text-xl font-nunito-bold text-lm-very-dark-blue
           whitespace-nowrap cursor-pointer dark:text-dmlm-white"
          >
            Where in the world?
          </span>
        </Link>
        <div className="mt-2 md:-mr-9">
          <Button
            text="Dark Mode"
            flat={true}
            icon={<HiOutlineMoon size={18} />}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
