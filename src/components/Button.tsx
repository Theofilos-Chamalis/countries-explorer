import { FunctionComponent, ReactElement } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  icon?: ReactElement<IconType>;
  onClick?: () => void;
  text: string;
  flat?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  icon,
  onClick,
  text,
  flat = false,
}) => {
  return (
    <button
      type="button"
      className={`flex justify-between gap-2.5 items-center text-lm-very-dark-blue ${
        flat
          ? "shadow-none font-nunito-regular"
          : "shadow-md font-nunito-light border border-gray-100 dark:border-gray-800"
      } bg-dmlm-white hover:bg-lm-very-light-gray rounded-md text-sm px-7 py-2 mr-2 mb-2
      focus:outline-none dark:bg-dm-dark-blue dark:hover:bg-dm-very-dark-blue dark:text-dmlm-white`}
      onClick={onClick}
    >
      {icon || null}
      {text}
    </button>
  );
};

export default Button;
