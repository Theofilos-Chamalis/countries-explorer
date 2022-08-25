import { FunctionComponent } from "react";

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow: FunctionComponent<InfoRowProps> = ({ label, value }) => {
  return (
    <div className="flex items-center gap-1">
      <p className="text-sm font-nunito-regular text-lm-very-dark-blue dark:text-dmlm-white">
        {label}:
      </p>
      <p className="text-sm font-nunito-light text-lm-very-dark-blue dark:text-dmlm-white">
        {value}
      </p>
    </div>
  );
};

export default InfoRow;
