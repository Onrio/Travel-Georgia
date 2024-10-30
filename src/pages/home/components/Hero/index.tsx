import { useParams } from "react-router-dom";
import { getTranslation, defaultLocale } from "@/dammyData";
import style from "./style.module.css";

const Hero: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const translate = getTranslation(lang || defaultLocale);

  return (
    <section className={style["hero-section"]}>
      <div className={style["hero-section-thickness"]}>
        <div className={style["hero-section-content"]}>
          <h1>{translate("hero.title")}</h1>
          <p>{translate("hero.text")}</p>
          <button>{translate("hero.button")}</button>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = "Hero Component";

export default Hero;
