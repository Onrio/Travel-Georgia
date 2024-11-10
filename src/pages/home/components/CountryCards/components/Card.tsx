import { Link } from "react-router-dom";
import style from "../style.module.css";
import like from "@/assets/like.png";
import { getTranslation, defaultLocale } from "@/dammyData";
import { useParams } from "react-router-dom";

interface CardProps {
  cardData: {
    originalIndex: number;
    name: string;
    image: string;
    capital: string;
    population: number;
    about: string;
    id: string;
    like: number;
    isDeleted: boolean;
  };
  handleLikeClick: () => void;
  handleDelete: () => void;
  handleEdit: () => void;
}

const Card: React.FC<CardProps> = ({
  cardData,
  handleLikeClick,
  handleDelete,
  handleEdit,
}) => {
  const isDeleted = cardData.isDeleted;
  const cardClass = isDeleted
    ? `${style["country-card"]} ${style["deleted"]}`
    : style["country-card"];

  const { lang } = useParams<{ lang: string }>();
  const translate = getTranslation(lang || defaultLocale);

  const handleLikeButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    handleLikeClick();
  };

  const handleDeleteButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    handleDelete();
  };
  const handleEditButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    handleEdit();
  };

  const countryName = String(
    translate(`countries.${cardData.originalIndex}.name`) || cardData.name,
  );
  const countryCapital = String(
    translate(`countries.${cardData.originalIndex}.capital`) ||
      cardData.capital,
  );
  const countryAbout = String(
    translate(`countries.${cardData.originalIndex}.about`) || cardData.about,
  );

  return (
    <Link to={`country-view/${cardData.id}`} className={cardClass}>
      <div id={cardData.id}>
        <div className={style["card-image"]}>
          {cardData.image.startsWith("data:image/") ? (
            <img src={cardData.image} alt={`${cardData.name} Image`} />
          ) : (
            <img src={cardData.image} alt={`vineyard in ${cardData.name}`} />
          )}
        </div>
        <div className={style["card-body"]}>
          <div className={style["card-info"]}>
            <h3>{countryName}</h3>
            <div className={style["info-row"]}>
              <span className={style["capital"]}>{countryCapital}</span>
              <span>{cardData.population}</span>
            </div>
          </div>
          <p>{countryAbout}</p>
          <div className={style["button-row"]}>
            <div className={style["button-row-left"]}>
              <button
                className={style["delete-button"]}
                onClick={handleDeleteButtonClick}
              >
                {String(translate("country.delete"))}
              </button>
              <button
                className={style["delete-button"]}
                onClick={handleEditButtonClick}
              >
                {String(translate("country.edit"))}
              </button>
            </div>
            <button
              onClick={handleLikeButtonClick}
              className={style["like-button"]}
            >
              <img src={like} alt="like" />
              <span>{cardData.like}</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
