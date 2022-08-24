import type { NextPage } from "next";
import CountryCard from "../components/CountryCard";
import Dropdown from "../components/Dropdown";
import { useState } from "react";
import Button from "../components/Button";
import AppLayout from "../layouts/AppLayout";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import SearchInput from "../components/SearchInput";
import { useQuery } from "@tanstack/react-query";
import { getAllCountriesService } from "../services";
import Loading from "../components/Loading";

const HomePage: NextPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const { isLoading, error, data } = useQuery(["allcountries"], () =>
    getAllCountriesService()
  );

  const renderCountryCards = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (error || data?.ok === false) {
      return (
        <p className="flex h-screen w-full justify-center content-center text-xl font-nunito-regular">
          Error while retrieving country data...
        </p>
      );
    }

    if (!data?.data) {
      return (
        <p className="flex h-screen w-full justify-center content-center text-xl font-nunito-regular">
          No country data found...
        </p>
      );
    }

    return data.data.map((country, index) => (
      <CountryCard key={index} country={country} />
    ));
  };

  return (
    <AppLayout>
      <div className="mt-32">
        {isLoading ? (
          <Loading />
        ) : (
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
                filterArray={["Africa", "America", "Asia", "Europe", "Oceania"]}
              />
            </div>
            <div className="grid grid-cols-4 gap-14">
              {renderCountryCards()}
            </div>

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
        )}
      </div>
    </AppLayout>
  );
};

export default HomePage;
