import { FunctionComponent } from "react";

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow: FunctionComponent<InfoRowProps> = ({ label, value }) => {
  return (
    <div className="flex items-center gap-1">
      <p className="text-sm font-nunito-regular">{label}:</p>
      <p className="text-sm font-nunito-light">{value}</p>
    </div>
  );
};

export default InfoRow;
