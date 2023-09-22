import { FunctionComponent, useRef } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useClickAway } from 'react-use';
import { ContinentsType } from '../services';

interface DropdownProps {
  filterArray: ContinentsType[];
  isDropdownOpen: boolean;
  setIsDropdownOpen: (isDropdownOpen: boolean) => void;
  selectedFilter: ContinentsType | '';
  setSelectedFilter: (selectedFilter: ContinentsType | '') => void;
}

const Dropdown: FunctionComponent<DropdownProps> = ({
  filterArray,
  isDropdownOpen,
  setIsDropdownOpen,
  selectedFilter,
  setSelectedFilter,
}) => {
  const dropdownRef = useRef(null);
  useClickAway(dropdownRef, () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  });

  const renderDropdownRow = (row: ContinentsType | '', index: number) => {
    return (
      <li key={index + row}>
        <p
          className='block py-2 px-4 cursor-pointer hover:bg-lm-very-light-gray dark:hover:bg-gray-600 dark:hover:text-white'
          onClick={() => {
            setSelectedFilter(row);
            setIsDropdownOpen(false);
          }}>
          {row}
        </p>
      </li>
    );
  };

  return (
    <div ref={dropdownRef} className='w-fit'>
      <button
        id='dropdownDefault'
        className='flex z-10 justify-between w-44 shadow-md text-lm-very-dark-blue bg-dmlm-white border
        border-gray-100 dark:border-gray-800 hover:bg-lm-very-light-gray focus:outline-none font-nunito-regular rounded-md text-sm pl-4
        pr-2 py-2.5 text-center inline-flex items-center dark:bg-dm-dark-blue dark:hover:bg-dm-very-dark-blue
        dark:text-dmlm-white'
        type='button'
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {selectedFilter && selectedFilter !== 'Show All' ? selectedFilter : 'Filter by Region'}
        <MdOutlineKeyboardArrowDown />
      </button>
      <div
        id='dropdown'
        className={`${
          !isDropdownOpen ? 'hidden' : ''
        } z-10 w-44 bg-white rounded-md divide-y mt-1 divide-gray-100 shadow-md dark:bg-dm-dark-blue 
        dark:text-dmlm-white absolute`}>
        <ul
          className='py-1 text-sm font-nunito-regular text-lm-very-dark-blue dark:bg-dm-dark-blue
          dark:text-dmlm-white'
          aria-label='Filter by Region Dropdown'>
          {filterArray.map((row, index) => renderDropdownRow(row, index))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
