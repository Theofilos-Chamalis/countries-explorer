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
      <div className="relative md:w-96 sm:w-fit">
        <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none">
          <HiOutlineSearch size={18} />
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-dmlm-white shadow-md text-lm-very-dark-blue text-sm font-nunito-light rounded-md focus:outline-none block w-full pl-14 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search for a country..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchInput;
