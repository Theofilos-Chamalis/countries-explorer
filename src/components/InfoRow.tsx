import { FunctionComponent } from 'react';

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow: FunctionComponent<InfoRowProps> = ({ label, value }) => {
  return (
    <div className='flex gap-4 w-[240px] justify-between'>
      <p className='text-sm font-nunito-regular text-lm-very-dark-blue dark:text-dmlm-white whitespace-nowrap'>
        {label}:
      </p>
      <p className='text-sm font-nunito-light text-lm-very-dark-blue dark:text-dmlm-white text-end break-words line-clamp-2'>
        {value}
      </p>
    </div>
  );
};

export default InfoRow;
