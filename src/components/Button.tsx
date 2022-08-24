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
        flat ? "shadow-none font-nunito-regular" : "shadow-md font-nunito-light"
      } bg-dmlm-white hover:bg-lm-very-light-gray rounded-md text-sm px-7 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none`}
      onClick={onClick}
    >
      {icon || null}
      {text}
    </button>
  );
};

export default Button;
