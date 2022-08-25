import { create } from "apisauce";

// We could use env variables or secrets manager here
const COUNTRIES_API_BASE_URL = "https://restcountries.com";
const COUNTRIES_API_VERSION = "2";

// We use apisauce instead of plain fetch because it has nice utilities for error
// and timeout handling.
export const api = create({
  baseURL: `${COUNTRIES_API_BASE_URL}/v${COUNTRIES_API_VERSION}`,
  timeout: 10000,
});
