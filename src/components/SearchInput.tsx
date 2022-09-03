import { FunctionComponent } from "react";
import { HiOutlineSearch } from "react-icons/hi";

interface SearchInputProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({
  searchValue,
  setSearchValue,
}) => {
  return (
    <form className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search for a country...
      </label>
      <div className="relative w-full md:w-96">
        <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none">
          <HiOutlineSearch size={18} />
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-dmlm-white shadow-md text-lm-very-dark-blue text-sm font-nunito-light rounded-md border
           border-gray-100 focus:outline-none block w-full pl-14 p-2.5 dark:bg-dm-dark-blue dark:border-gray-800
           dark:placeholder-dmlm-white dark:text-dmlm-white"
          placeholder="Search for a country..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchInput;
