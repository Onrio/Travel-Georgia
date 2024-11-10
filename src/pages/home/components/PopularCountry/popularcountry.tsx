import React from "react";
import { useParams } from "react-router-dom";
import countryData from "@/../database.json";
import mainStyle from "@/style/index.module.css";
import style from "./style.module.css";
import { getTranslation, defaultLocale } from "@/dammyData";

const MostLikedCountry: React.FC = () => {
  const mostLikedCountry = countryData.countries.reduce((prev, current) =>
    current.like > prev.like ? current : prev,
  );

  const { lang } = useParams<{ lang: string }>();
  const translate = getTranslation(lang || defaultLocale);
  const isGeorgian = lang === "ka";

  return (
    <section className={mainStyle["container"]}>
      <h2 className={mainStyle["section-title"]}>
        {String(translate("popCountry.title"))}
      </h2>
      <div className={style["liked-country-row"]}>
        <div className={style["country-image"]}>
          <img
            src={mostLikedCountry.image}
            alt={`${isGeorgian ? mostLikedCountry.georgianName : mostLikedCountry.name} vineyards`}
          />
        </div>
        <div className={style["country-info"]}>
          <h3 className={style["country-title"]}>
            {isGeorgian ? mostLikedCountry.georgianName : mostLikedCountry.name}
          </h3>
          <div className={style["info-row"]}>
            <span className={style["info-title"]}>
              {String(translate("popCountry.population"))}:
            </span>
            {mostLikedCountry.population} M
          </div>
          <div className={style["info-row"]}>
            <span className={style["info-title"]}>
              {String(translate("popCountry.capital"))}:
            </span>
            <span>
              {isGeorgian
                ? mostLikedCountry.georgianCapital
                : mostLikedCountry.capital}
            </span>
          </div>
          <div className={style["info-row"]}>
            {isGeorgian
              ? mostLikedCountry.georgianAbout
              : mostLikedCountry.about}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostLikedCountry;
