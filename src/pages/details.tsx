import { GetServerSidePropsContext, NextPage } from "next";
import { getCountryByNameService, ICountry } from "../services";

interface DetailsPageProps {
  countryInfo: ICountry[];
}

// Use getServerSideProps to fetch data from the API while on the server to
// avoid the need for the client to fetch the data.
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

  return {
    props: {
      countryInfo: countryData?.data || null,
    },
    notFound,
  };
};

const DetailsPage: NextPage<DetailsPageProps> = ({ countryInfo }) => {
  console.log(countryInfo);
  return (
    <p className="flex w-full mt-32 justify-center">{countryInfo[0].name}</p>
  );
};

export default DetailsPage;
