import logo from "@/assets/logo/logo.png";
import mainStyle from "@/style/index.module.css";
import style from "./style.module.css";
import {
  Link,
  NavLink,
  NavLinkRenderProps,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getTranslation, defaultLocale } from "@/dammyData";

const Header: React.FC = () => {
  const handleActiveNav = ({ isActive }: NavLinkRenderProps) =>
    isActive ? style["active_nav_item"] : style["nav_item"];

  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();

  const translate = getTranslation(lang);

  const toggleLanguage = () => {
    const newLang = lang === "ka" ? "en" : "ka";
    navigate(`/${newLang}`);
  };

  return (
    <header>
      <div className={mainStyle["container"]}>
        <div className={style["main-header-row"]}>
          <div className={style["logo"]}>
            <Link to={`/${lang || defaultLocale}`}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <nav className={style["main-nav"]}>
            <ul>
              <li className={style["nav_item"]}>
                <a href="#">{String(translate("header.travelTo"))}</a>
              </li>
              <li className={style["main-nav-list"]}>
                <NavLink
                  to={`/${lang || defaultLocale}/about`}
                  className={handleActiveNav}
                >
                  {String(translate("header.aboutUs"))}
                </NavLink>
              </li>
              <li className={style["nav_item"]}>
                <NavLink
                  to={`/${lang || defaultLocale}/contact`}
                  className={handleActiveNav}
                >
                  {String(translate("header.contact"))}
                </NavLink>
              </li>
              <li className={style["nav_item"]}>
                <NavLink
                  to={`/${lang || defaultLocale}/countries`}
                  className={handleActiveNav}
                >
                  {String(translate("header.countries"))}
                </NavLink>
              </li>
              <li>
                <button
                  onClick={toggleLanguage}
                  className={style["language-button"]}
                >
                  {lang === "ka" ? "Eng" : "ქარ"}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.displayName = "Header Component";

export default Header;
