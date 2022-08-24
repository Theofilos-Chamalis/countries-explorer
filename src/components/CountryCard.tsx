import { FunctionComponent } from "react";
import Image from "next/image";

interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

interface ILanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface IRegionalBloc {
  acronym: string;
  name: string;
  otherNames: string[];
}

interface ICountry {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: {
    svg?: string;
    png?: string;
  };
  currencies: ICurrency[];
  languages: ILanguage[];
  translations: {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
  };
  flag: string;
  regionalBlocs: IRegionalBloc[];
  cioc: string;
  independent: boolean;
}

interface CountryCardProps {
  country: ICountry;
}

const CountryCard: FunctionComponent<CountryCardProps> = (props) => {
  const renderCardRow = (label: string, value: string) => {
    return (
      <div className="flex items-center gap-1">
        <p className="text-sm font-nunito-regular">{label}</p>
        <p className="text-sm font-nunito-light">{value}</p>
      </div>
    );
  };

  return (
    <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer">
      <Image
        width={600}
        height={280}
        src={props.country.flags.png || ""}
        alt={props.country.name + " flag"}
      ></Image>
      <div className="px-4 py-4">
        <p className="font-nunito-bold text-base mb-2 text-lm-very-dark-blue">
          {props.country.name}
        </p>
        <div className="flex flex-col gap-1 mb-6">
          {renderCardRow("Population:", props.country.population.toString())}
          {renderCardRow("Region:", props.country.region)}
          {renderCardRow("Capital:", props.country.capital)}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
