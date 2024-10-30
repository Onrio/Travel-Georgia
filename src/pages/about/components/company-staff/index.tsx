import { useParams } from "react-router-dom";
import { getTranslation, defaultLocale } from "@/dammyData";
import mainStyle from "@/style/index.module.css";
import style from "./style.module.css";

const AboutDescription: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const translate = getTranslation(lang || defaultLocale);

  return (
    <section className={style["about-us-section"]}>
      <div className={mainStyle["container"]}>
        <div className={style["about-us"]}>
          <div className={style["about-us-text"]}>
            <h2 className={mainStyle["section-title"]}>
              {String(translate("aboutUs.title"))}
            </h2>
            <p>{String(translate("aboutUs.text"))}</p>
          </div>
          <div className={style["about-us-img"]}>
            <img
              src={`/src/assets/about-us/${translate("aboutUs.image")}`}
              alt="Our company staff"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDescription;
