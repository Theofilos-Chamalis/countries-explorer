import type { NextPage } from "next";
import CountryCard from "../components/CountryCard";
import Dropdown from "../components/Dropdown";
import { useState } from "react";
import AppLayout from "../layouts/AppLayout";
import SearchInput from "../components/SearchInput";
import { useQuery } from "@tanstack/react-query";
import {
  ContinentsType,
  getAllCountriesService,
  getCountryByContinent,
} from "../services";
import Loading from "../components/Loading";

const HomePage: NextPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<ContinentsType | "">("");
  const [searchValue, setSearchValue] = useState("");
  const {
    fetchStatus: isLoadingAllCountries,
    error: errorAllCountries,
    data: dataAllCountries,
  } = useQuery(["all-countries"], () => getAllCountriesService());
  const {
    fetchStatus: isLoadingCountriesByRegion,
    error: errorCountriesByRegion,
    data: dataCountriesByRegion,
  } = useQuery(
    ["countries-by-region", selectedFilter],
    () => getCountryByContinent(selectedFilter),
    { enabled: !!selectedFilter }
  );

  const renderCountryCards = () => {
    if (
      isLoadingAllCountries === "fetching" ||
      isLoadingCountriesByRegion === "fetching"
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

    const countriesFromApi = selectedFilter
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
      <div className="grid grid-cols-4 gap-14">
        {filteredCountries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    );
  };

  return (
    <AppLayout>
      <div className="mt-32">
        <>
          <div className="flex justify-between mb-10">
            <SearchInput
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <Dropdown
              isDropdownOpen={isDropdownOpen}
              setIsDropdownOpen={setIsDropdownOpen}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              filterArray={["Africa", "Americas", "Asia", "Europe", "Oceania"]}
            />
          </div>
          {renderCountryCards()}

          {/*<div className="h-3" />*/}

          {/*<div className="h-3" />*/}
          {/*<Button*/}
          {/*  onClick={() => console.log("Clicked button!")}*/}
          {/*  icon={<HiOutlineArrowNarrowLeft size={18} />}*/}
          {/*  text="Back"*/}
          {/*  flat={false}*/}
          {/*/>*/}
          {/*<div className="h-3" />*/}
        </>
      </div>
    </AppLayout>
  );
};

export default HomePage;
