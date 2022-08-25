import { FunctionComponent } from "react";
import Image from "next/image";
import { ICountry } from "../services";
import { useRouter } from "next/router";

interface CountryCardProps {
  country: ICountry;
}

// Card component that displays the country information in the home page
// and redirects the user to the details page when clicked
const CountryCard: FunctionComponent<CountryCardProps> = (props) => {
  const router = useRouter();

  const renderCardRow = (label: string, value: string) => {
    return (
      <div className="flex items-center gap-1">
        <p className="text-sm font-nunito-regular">{label}</p>
        <p className="text-sm font-nunito-light">{value}</p>
      </div>
    );
  };

  return (
    <div
      className="max-w-xs rounded-md overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
      onClick={() => router.push(`/details?countryName=${props.country.name}`)}
    >
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
