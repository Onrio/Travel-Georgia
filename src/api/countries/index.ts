import { httpClient } from "../index";
import { Country } from "@/pages/home/components/CountryCards/index";

// Fetch all countries
export const getCountries = async (
  sortOrder: "asc" | "desc" | null = null,
): Promise<Country[]> => {
  try {
    const queryParam = sortOrder
      ? `?_sort=${sortOrder === "asc" ? "like" : "-like"}`
      : "";
    const response = await httpClient.get(`/${queryParam}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw new Error("Failed to fetch countries.");
  }
};

// Add a new country
export const addCountry = async (country: Country): Promise<Country> => {
  try {
    const response = await httpClient.post("/", country);
    return response.data;
  } catch (error) {
    console.error("Error adding country:", error);
    throw new Error("Failed to add country.");
  }
};

// Delete a country
export const deleteCountry = async (countryId: string): Promise<void> => {
  try {
    await httpClient.delete(`/${countryId}`);
  } catch (error) {
    console.error(`Error deleting country with ID ${countryId}:`, error);
    throw new Error("Failed to delete country.");
  }
};

// Edit a country
export const editCountry = async (
  countryId: string,
  updatedCountry: Country,
): Promise<Country> => {
  try {
    const response = await httpClient.put(`/${countryId}`, updatedCountry);
    return response.data;
  } catch (error) {
    console.error(`Error editing country with ID ${countryId}:`, error);
    throw new Error("Failed to edit country.");
  }
};

// Fetch a single country by ID
export const getCountryById = async (id: string): Promise<Country | null> => {
  try {
    const response = await httpClient.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching country with ID ${id}:`, error);
    return null;
  }
};

// Like a country
export const likeCountry = async (countryId: string): Promise<Country> => {
  try {
    const country = await getCountryById(countryId);

    if (!country) throw new Error("Country not found");

    const updatedCountry = { ...country, like: country.like + 1 };

    const response = await httpClient.put(`/${countryId}`, updatedCountry);

    return response.data;
  } catch (error) {
    console.error(`Error liking country with ID ${countryId}:`, error);
    throw new Error("Failed to like country.");
  }
};
