import { FunctionComponent } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/all";

interface ButtonProps {
  shouldGoBack?: boolean;
  onClick?: () => void;
  text: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  shouldGoBack = false,
  onClick,
  text,
}) => {
  return (
    <button
      type="button"
      className="flex justify-between gap-2.5 items-center text-lm-very-dark-blue shadow-md bg-dmlm-white hover:bg-lm-very-light-gray font-nunito-light rounded-md text-sm px-7 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
      onClick={onClick}
    >
      {shouldGoBack ? <HiOutlineArrowNarrowLeft size={18} /> : null}
      {text}
    </button>
  );
};

export default Button;
