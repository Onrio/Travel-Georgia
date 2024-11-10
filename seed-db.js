import axios from "axios";
import { promises as fs } from "fs";
import path from "path";

const databasePath = path.resolve("./database.json");

async function fetchCountriesData() {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return [];
  }
}

function processCountryData(apiCountry) {
  return {
    name: apiCountry.name.common,
    population: (apiCountry.population / 1e6).toFixed(2),
    capital: apiCountry.capital ? apiCountry.capital[0] : "N/A",
    about: `Discover the culture and beauty of ${apiCountry.name.common}.`,
    image: `/src/assets/vineyards/vineyards-italy.jpg`,
    id: apiCountry.cca3,
    like: 0,
    georgianAbout: `აღმოაჩინეთ ${apiCountry.name.common} კულტურა და სილამაზე.`,
    georgianName: apiCountry.translations?.ka?.common || apiCountry.name.common,
    georgianCapital: apiCountry.capital ? apiCountry.capital[0] : "N/A",
  };
}

async function writeDatabase(data) {
  try {
    await fs.writeFile(
      databasePath,
      JSON.stringify({ countries: data }, null, 2),
    );
    console.log("Database updated successfully!");
  } catch (error) {
    console.error("Error writing to database:", error);
  }
}

async function updateDatabase() {
  const apiData = await fetchCountriesData();
  const processedCountries = apiData.map(processCountryData);
  await writeDatabase(processedCountries);
}

updateDatabase();
