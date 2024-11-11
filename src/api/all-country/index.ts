import axios from "axios";
import { Country } from "@/pages/countres/index";

export const getAllCountries = async ({
  pageParam = 1,
}): Promise<Country[]> => {
  try {
    const response = await axios.get<Country[]>(
      `/api/AllCountries?page=${pageParam}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};
