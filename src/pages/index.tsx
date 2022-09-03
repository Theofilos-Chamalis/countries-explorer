import type { NextPage } from "next";
import CountryCard from "../components/CountryCard";
import Dropdown from "../components/Dropdown";
import { useState } from "react";
import SearchInput from "../components/SearchInput";
import { useQuery } from "@tanstack/react-query";
import {
  ContinentsType,
  getAllCountriesService,
  getCountriesByContinentService,
} from "../services";
import Loading from "../components/Loading";
import LazyLoad from "react-lazy-load";

const HomePage: NextPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<ContinentsType | "">("");
  const [searchValue, setSearchValue] = useState("");
  // Fetch all countries using React-Query and the getAllCountriesService service when
  // the component/page mounts. This approach is used to showcase CSR (Client Side Rendering)
  // and handling of errors/loading states. Also, react-query is configured to refetch from the
  // API when the window is refocused which might be useful in some cases.
  const {
    fetchStatus: fetchStatusAllCountries,
    error: errorAllCountries,
    data: dataAllCountries,
  } = useQuery(["all-countries"], () => getAllCountriesService());
  // Fetch all countries by region/continent using React-Query and the getCountriesByContinentService service when
  // there is a filter selected from the Dropdown component.
  const {
    fetchStatus: fetchStatusCountriesByRegion,
    error: errorCountriesByRegion,
    data: dataCountriesByRegion,
  } = useQuery(
    ["countries-by-region", selectedFilter],
    () => getCountriesByContinentService(selectedFilter),
    { enabled: !!selectedFilter && selectedFilter !== "Show All" }
  );

  // Function which renders the countries card grid and handles cases
  // where there is no data, an error, or the API calls are loading.
  const renderCountryCards = () => {
    if (
      fetchStatusAllCountries === "fetching" ||
      fetchStatusCountriesByRegion === "fetching"
    ) {
      return <Loading />;
    }

    if (
      errorAllCountries ||
      dataAllCountries?.ok === false ||
      errorCountriesByRegion ||
      dataCountriesByRegion?.ok === false
    ) {
      return (
        <p className="flex h-screen w-full justify-center content-center text-xl font-nunito-regular">
          Error while retrieving country data...
        </p>
      );
    }

    const countriesFromApi =
      selectedFilter && selectedFilter !== "Show All"
        ? dataCountriesByRegion?.data
        : dataAllCountries?.data;

    const filteredCountries = countriesFromApi?.filter((country) =>
      country.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (!filteredCountries || filteredCountries.length === 0) {
      return (
        <p className="flex h-screen w-full justify-center content-center text-xl font-nunito-regular">
          No country data found...
        </p>
      );
    }

    return (
      <div
        className="grid 3xl:grid-cols-6 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
       gap-y-14 gap-x-32 w-full sm:justify-items-center"
      >
        {filteredCountries.map((country, index) => (
          <LazyLoad key={index + country.capital}>
            <CountryCard key={index} country={country} />
          </LazyLoad>
        ))}
      </div>
    );
  };

  return (
    <main className="pt-16 md:pt-32 px-8 md:px-32 pb-12 md:pb-0 min-h-screen bg-dmlm-white dark:bg-dm-very-dark-blue">
      <div className="flex justify-between flex-col md:flex-row gap-8 md:gap-1 mb-10">
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <Dropdown
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          filterArray={[
            "Africa",
            "Americas",
            "Asia",
            "Europe",
            "Oceania",
            "Show All",
          ]}
        />
      </div>
      {renderCountryCards()}
    </main>
  );
};

export default HomePage;
