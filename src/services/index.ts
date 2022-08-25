import {
  getAllCountriesService,
  getCountryByNameService,
  getCountriesByContinentService,
} from "./countries/countries";
import {
  ICountry,
  ICurrency,
  ILanguage,
  IRegionalBloc,
  ContinentsType,
} from "./countries/countries.dto";

export type { ICountry, IRegionalBloc, ICurrency, ILanguage, ContinentsType };

export {
  getAllCountriesService,
  getCountriesByContinentService,
  getCountryByNameService,
};
