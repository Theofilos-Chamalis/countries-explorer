import { api } from "../apiClient";
import { ApiResponse } from "apisauce";
import { ICountry } from "./countries.dto";

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

export const getCountryByContinent = async (
  continent: "Africa" | "America" | "Asia" | "Europe" | "Oceania"
) => {
  const countriesByContinentFromBE: ApiResponse<ICountry[]> = await api.get(
    `/region/${continent.toLowerCase()}`
  );
  return countriesByContinentFromBE;
};
