import { useParams } from "react-router-dom";
import style from "./style.module.css";
import mainStyle from "@/style/index.module.css";
import { useQuery } from "@tanstack/react-query";
import { getCountryById } from "@/api/countries/index";

interface ArticleData {
  name: string;
  about: string;
  image: string;
}

const CountryArticle = () => {
  const { id, lang } = useParams<{ id: string; lang: string }>();

  const { data: country, error, isLoading } = useQuery<ArticleData | null, Error>({
    queryKey: ["country", id, lang],
    queryFn: async () => {
      if (!id) throw new Error("Country ID is missing.");
      const countryData = await getCountryById(id);
      if (countryData) {
        return {
          name: lang === "ka" ? countryData.georgianName : countryData.name,
          about: lang === "ka" ? countryData.georgianAbout : countryData.about,
          image: countryData.image,
        };
      } else {
        throw new Error("Country not found");
      }
    },
  });


  if (error) {
    console.error("Error fetching country:", error);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!country) {
    return <div>No country data available</div>;
  }

  return (
    <section>
      <div className={mainStyle["container"]}>
        <div className={style["country-view-row"]}>
          <div className={style["country-view-info"]}>
            <h2>{country.name}</h2>
            <p>{country.about}</p>
          </div>
          <div className={style["country-view-image"]}>
            <img src={country.image} alt={`vineyard in ${country.name}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryArticle;
