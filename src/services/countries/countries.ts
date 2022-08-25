import { api } from "../apiClient";
import { ApiResponse } from "apisauce";
import { ContinentsType, ICountry } from "./countries.dto";

export const getAllCountriesService = async () => {
  const countriesFromBE: ApiResponse<ICountry[]> = await api.get("/all");
  return countriesFromBE;
};

export const getCountryByNameService = async (name: string) => {
  const countriesByNameFromBE: ApiResponse<ICountry[]> = await api.get(
    `/name/${name}`
  );
  return countriesByNameFromBE;
};

export const getCountriesByContinentService = async (
  continent: ContinentsType | ""
) => {
  if (!continent) return null;

  const countriesByContinentFromBE: ApiResponse<ICountry[]> = await api.get(
    `/region/${continent.toLowerCase()}`
  );
  return countriesByContinentFromBE;
};

export const getCountryByCodeService = async (code: string) => {
  const countriesByCodeFromBE: ApiResponse<ICountry[]> = await api.get(
    `/alpha/${code}`
  );
  return countriesByCodeFromBE;
};
