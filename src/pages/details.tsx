import { GetServerSidePropsContext, NextPage } from "next";
import {
  getCountryByCodeService,
  getCountryByNameService,
  ICountry,
} from "../services";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Image from "next/image";
import InfoRow from "../components/InfoRow";

interface DetailsPageProps {
  countryInfo: ICountry[];
  borderCountriesNames: string[] | null;
}

// Use getServerSideProps to fetch data from the API while on the server to
// avoid the need for the client to fetch the data. This is used to showcase
// the SSR (Server Side Rendering) approach which in this page does not require
// the client to fetch the data so no loading state is shown.
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // Set caching headers
  context.res?.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=60"
  );

  // Retrieve the countryName from the URL query params
  let countryName = context?.query?.countryName as string;

  // Remove accents from country name to support cases like Åland Islands
  countryName = countryName?.normalize("NFD")?.replace(/\p{Diacritic}/gu, "");

  const countryData = countryName
    ? await getCountryByNameService(countryName)
    : null;

  // If we don't have country data, go to the 404 page (we could also create a custom 404 page if needed)
  const notFound =
    !countryData || countryData?.ok === false || !countryData?.data;

  // Retrieve the country codes for the countries that border the country we are looking at. We do this
  // since the API does not provide the country names for the countries that border the country we are
  // looking at, so we need to make additional API calls (in parallel) to retrieve their names.
  const borderCountriesCodes =
    countryData?.data && !notFound && countryData?.data[0]?.borders?.length > 0
      ? countryData?.data[0].borders.map((borderCountry) => borderCountry)
      : null;

  // Create an array of Promises that will fetch the data for the countries that border the country we
  // are looking at
  const borderCountriesPromises =
    borderCountriesCodes && borderCountriesCodes.length > 0
      ? borderCountriesCodes.map((item) => getCountryByCodeService(item))
      : null;

  // Wait for all the Promises to either resolve or reject (parallel fetching)
  const borderCountriesResults = borderCountriesPromises
    ? await Promise.allSettled(borderCountriesPromises)
    : null;

  // Create an array of the country names that border the country we are looking at or show "N/A" in case a
  // network request failed
  const borderCountriesNames = borderCountriesResults
    ? borderCountriesResults.map(
        //@ts-ignore
        (borderCountry, index) => borderCountry?.value?.data?.name ?? "N/A"
      )
    : null;

  return {
    props: {
      countryInfo: countryData?.data || null,
      borderCountriesNames,
    },
    notFound,
  };
};

const DetailsPage: NextPage<DetailsPageProps> = ({
  countryInfo,
  borderCountriesNames,
}) => {
  const router = useRouter();

  const {
    name,
    nativeName,
    population,
    region,
    regionalBlocs,
    topLevelDomain,
    currencies,
    capital,
    languages,
    flags,
  } = countryInfo[0];

  const transformArrayToString = (array: any[]) => {
    if (!array || array.length === 0) return "None";

    return array.map((item) => item.name).join(", ");
  };

  const renderCountryInfo = () => {
    const subRegionsString = transformArrayToString(regionalBlocs);
    const currenciesString = transformArrayToString(currencies);
    const languagesString = transformArrayToString(languages);

    return (
      <div className="flex flex-col md:flex-row gap-10 md:gap-4 mb-6">
        <div className="flex flex-col gap-1">
          <InfoRow label="Native Name" value={nativeName} />
          <InfoRow
            label="Population"
            value={
              population ? new Intl.NumberFormat().format(population) : "0"
            }
          />
          <InfoRow label="Region" value={region} />
          <InfoRow label="Sub Region" value={subRegionsString} />
          <InfoRow label="Capital" value={capital} />
        </div>
        <div className="flex flex-col gap-1">
          <InfoRow label="Top Level Domain" value={topLevelDomain[0]} />
          <InfoRow label="Currencies" value={currenciesString} />
          <InfoRow label="Languages" value={languagesString} />
        </div>
      </div>
    );
  };

  const renderBorders = () => {
    if (!borderCountriesNames || borderCountriesNames.length === 0)
      return <InfoRow label="Border Countries" value={"None"} />;

    return (
      <div className="flex flex-col md:flex-row items-start md:items-center gap-1">
        <p className="text-sm font-nunito-regular mr-2 whitespace-nowrap">
          Border Countries:
        </p>
        <div>
          {borderCountriesNames.map((border, index) => {
            // The button below is styled differently to the <Button/> component in the components folder
            // in order to look more like a clickable tag.
            return (
              <button
                className="border border-gray-300 mr-2 mt-2 2xl:mt-0 text-lm-very-dark-blue shadow-none
                font-nunito-light bg-dmlm-white hover:bg-lm-very-light-gray rounded-md text-sm
                 px-4 py-1 focus:outline-none dark:bg-dm-dark-blue dark:hover:bg-dm-very-dark-blue
                 dark:text-dmlm-white dark:border-black"
                onClick={() => router.push(`/details?countryName=${border}`)}
              >
                {border}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <main
      className="pt-20 md:pt-32 px-8 md:px-32 pb-12 md:pb-0 bg-dmlm-white dark:bg-dm-very-dark-blue
       min-h-screen"
    >
      <Button
        text="Back"
        onClick={() => router.back()}
        icon={<HiOutlineArrowNarrowLeft size={18} />}
      />
      <div className="mt-12 md:mt-20 w-full flex md:justify-between flex-col md:flex-row">
        <div className="w-full md:w-2/5">
          <Image
            alt={"Flag of " + name}
            src={flags?.svg || ""}
            className={"rounded-xl"}
            width={500}
            height={350}
            layout={"responsive"}
            priority={true}
          />
        </div>
        <div className="flex flex-col justify-center w-full mt-8 md:mt-0 md:w-1/2">
          <h1 className="text-2xl font-nunito-bold mb-6 md:mb-8">{name}</h1>
          {renderCountryInfo()}
          {renderBorders()}
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
