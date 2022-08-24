import type { NextPage } from "next";
import CountryCard from "../components/CountryCard";
import Dropdown from "../components/Dropdown";
import { useState } from "react";
import Button from "../components/Button";
import AppLayout from "../layouts/AppLayout";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const countryMock = {
  name: "Canada",
  topLevelDomain: [".ca"],
  alpha2Code: "CA",
  alpha3Code: "CAN",
  callingCodes: ["1"],
  capital: "Ottawa",
  altSpellings: ["CA"],
  subregion: "Northern America",
  region: "Americas",
  population: 38005238,
  latlng: [60, -95],
  demonym: "Canadian",
  area: 9984670,
  gini: 33.3,
  timezones: [
    "UTC-08:00",
    "UTC-07:00",
    "UTC-06:00",
    "UTC-05:00",
    "UTC-04:00",
    "UTC-03:30",
  ],
  borders: ["USA"],
  nativeName: "Canada",
  numericCode: "124",
  flags: {
    svg: "https://flagcdn.com/ca.svg",
    png: "https://flagcdn.com/w320/ca.png",
  },
  currencies: [
    {
      code: "CAD",
      name: "Canadian dollar",
      symbol: "$",
    },
  ],
  languages: [
    {
      iso639_1: "en",
      iso639_2: "eng",
      name: "English",
      nativeName: "English",
    },
    {
      iso639_1: "fr",
      iso639_2: "fra",
      name: "French",
      nativeName: "français",
    },
  ],
  translations: {
    br: "Canadá",
    pt: "Canadá",
    nl: "Canada",
    hr: "Kanada",
    fa: "کانادا",
    de: "Kanada",
    es: "Canadá",
    fr: "Canada",
    ja: "カナダ",
    it: "Canada",
    hu: "Kanada",
  },
  flag: "https://flagcdn.com/ca.svg",
  regionalBlocs: [
    {
      acronym: "NAFTA",
      name: "North American Free Trade Agreement",
      otherNames: [
        "Tratado de Libre Comercio de América del Norte",
        "Accord de Libre-échange Nord-Américain",
      ],
    },
  ],
  cioc: "CAN",
  independent: true,
};

const HomePage: NextPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  return (
    <AppLayout>
      <div className="mt-32">
        <CountryCard country={countryMock} />
        <div className="h-3" />
        <Dropdown
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          filterArray={["Africa", "America", "Asia", "Europe", "Oceania"]}
        />
        <div className="h-3" />
        <Button
          onClick={() => console.log("Clicked button!")}
          icon={<HiOutlineArrowNarrowLeft size={18} />}
          text="Back"
          flat={false}
        />
        <footer className="flex justify-center">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-nunito-bold text-dm-dark-blue"
          >
            Powered by{" Vercel"}
          </a>
        </footer>
      </div>
    </AppLayout>
  );
};

export default HomePage;
