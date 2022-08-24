import {
  getAllCountriesService,
  getCountryByNameService,
  getCountryByContinent,
} from "./countries/countries";
import {
  ICountry,
  ICurrency,
  ILanguage,
  IRegionalBloc,
} from "./countries/countries.dto";

export type { ICountry, IRegionalBloc, ICurrency, ILanguage };

export {
  getAllCountriesService,
  getCountryByContinent,
  getCountryByNameService,
};
