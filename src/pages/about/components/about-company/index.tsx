import mainStyle from "@/style/index.module.css";
import style from "./style.module.css";
import { getTranslation, defaultLocale } from "@/dammyData";
import { useParams } from "react-router-dom";

const AboutDescription: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const translate = getTranslation(lang || defaultLocale);

  const aboutCompany = translate("aboutCompany") as Array<{
    name: string;
    text: string;
    image: string;
  }>;

  return (
    <section>
      <div className={mainStyle["container"]}>
        <div className={style["company-row"]}>
          {aboutCompany &&
            aboutCompany.map((info) => (
              <div key={info.name} className={style["company-block"]}>
                <div className={style["about-us-text"]}>
                  <h3>{info.name}</h3>
                  <p>{info.text}</p>
                </div>
                <div className={style["about-us-img"]}>
                  <img
                    src={`/src/assets/about-us/${info.image}`}
                    alt={info.name}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AboutDescription;
