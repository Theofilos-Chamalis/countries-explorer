import { FunctionComponent } from "react";
import Image from "next/image";
import { ICountry } from "../services";
import { useRouter } from "next/router";
import InfoRow from "./InfoRow";

interface CountryCardProps {
  country: ICountry;
}

// Card component that displays the country information in the home page
// and redirects the user to the details page when clicked
const CountryCard: FunctionComponent<CountryCardProps> = ({ country }) => {
  const router = useRouter();

  return (
    <div
      className="max-w-xs rounded-md overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
      onClick={() => router.push(`/details?countryName=${country.name}`)}
    >
      <Image
        width={600}
        height={280}
        src={country.flags.png || ""}
        alt={country.name + " flag"}
        priority={true}
      ></Image>
      <div className="px-4 py-4">
        <p className="font-nunito-bold text-base mb-2 text-lm-very-dark-blue dark:text-dmlm-white">
          {country.name}
        </p>
        <div className="flex flex-col gap-1 mb-6">
          <InfoRow
            label="Population"
            value={
              country.population
                ? new Intl.NumberFormat().format(country.population)
                : "0"
            }
          />
          <InfoRow label="Region" value={country.region} />
          <InfoRow label="Capital" value={country.capital} />
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
