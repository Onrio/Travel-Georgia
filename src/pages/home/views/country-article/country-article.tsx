import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./style.module.css";
import mainStyle from "@/style/index.module.css";
import axios from "axios";

interface ArticleData {
  name: string;
  about: string;
  image: string;
}

const CountryArticle = () => {
  const { id, lang } = useParams<{ id: string; lang: string }>();

  const [articleData, setArticleData] = useState<ArticleData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/countries/${id}`
        );
        if (response.data) {
          setArticleData({
            name:
              lang === "ka" ? response.data.georgianName : response.data.name,
            about:
              lang === "ka" ? response.data.georgianAbout : response.data.about,
            image: response.data.image,
          });
        } else {
          setError("Article not found :/");
        }
      } catch (err) {
        console.error("Error fetching article:", err);
        setError("Failed to load article data :/");
      }
    };

    fetchCountryData();
  }, [id, lang]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!articleData) {
    return <div>Loading...</div>;
  }

  const { name, about, image } = articleData;

  return (
    <section>
      <div className={mainStyle["container"]}>
        <div className={style["country-view-row"]}>
          <div className={style["country-view-info"]}>
            <h2>{name}</h2>
            <p>{about}</p>
          </div>
          <div className={style["country-view-image"]}>
            <img src={image} alt={`vineyard in ${name}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryArticle;
