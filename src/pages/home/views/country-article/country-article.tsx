import { useParams } from "react-router-dom";
import { getTranslation, namespaces, defaultLocale } from "@/dammyData";
import style from "./style.module.css";
import mainStyle from "@/style/index.module.css";

interface ArticleData {
  name: string;
  about: string;
  image: string;
}

const CountryArticle = () => {
  const { id, lang } = useParams<{ id: string; lang: string }>();

  const translate = getTranslation(lang || defaultLocale);

  const articleIndex = namespaces[lang || defaultLocale].countries.findIndex(
    (country) => country.id === id,
  );

  if (articleIndex === -1) {
    return <div>Article not found :/</div>;
  }

  const articleData = translate(`countries.${articleIndex}`);

  if (
    !articleData ||
    typeof articleData !== "object" ||
    !("name" in articleData) ||
    !("about" in articleData) ||
    !("image" in articleData)
  ) {
    return <div>Article data not found :/</div>;
  }

  const { name, about, image } = articleData as ArticleData;

  return (
    <section>
      <div className={mainStyle["container"]}>
        <div className={style["country-view-row"]}>
          <div className={style["country-view-info"]}>
            <h2>{name}</h2>
            <p>{about}</p>
          </div>
          <div className={style["country-view-image"]}>
            <img
              src={`/src/assets/vineyards/${image}`}
              alt={`vineyard in ${name}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryArticle;
