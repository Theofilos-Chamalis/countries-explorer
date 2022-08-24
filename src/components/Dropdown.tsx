import { FunctionComponent, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useClickAway } from "react-use";

interface DropdownProps {
  filterArray: string[];
  isDropdownOpen: boolean;
  setIsDropdownOpen: (isDropdownOpen: boolean) => void;
  selectedFilter: string;
  setSelectedFilter: (selectedFilter: string) => void;
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

  const renderDropdownRow = (row: string, index: number) => {
    return (
      <li key={index}>
        <p
          className="block py-2 px-4 cursor-pointer hover:bg-lm-very-light-gray dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => {
            setSelectedFilter(row);
            setIsDropdownOpen(false);
          }}
        >
          {row}
        </p>
      </li>
    );
  };

  return (
    <div ref={dropdownRef} className="w-fit">
      <button
        id="dropdownDefault"
        className="flex z-10 justify-between w-44 shadow-md text-lm-very-dark-blue bg-dmlm-white hover:bg-lm-very-light-gray focus:outline-none font-medium rounded-md text-sm pl-4 pr-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700"
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedFilter ? selectedFilter : "Filter by Region"}
        <MdOutlineKeyboardArrowDown />
      </button>
      <div
        id="dropdown"
        className={`${
          !isDropdownOpen ? "hidden" : ""
        } z-10 w-44 bg-white rounded-md divide-y mt-1 divide-gray-100 shadow-md dark:bg-gray-700`}
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-label="Filter by Region Dropdown"
        >
          {filterArray.map((row, index) => renderDropdownRow(row, index))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
