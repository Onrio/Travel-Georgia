import React, { useReducer, useState, useEffect } from "react";
import style from "./style.module.css";
import mainStyle from "@/style/index.module.css";
import Card from "./components/Card";
import Modal from "./components/Modal";
import EditModal from "./components/EditModal";

import { getTranslation, defaultLocale } from "@/dammyData";
import "react-multi-carousel/lib/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5000/countries";

type ActionType =
  | { type: "SET_COUNTRIES"; payload: Country[] }
  | { type: "ADD_COUNTRY"; payload: Country }
  | { type: "DELETE_COUNTRY"; payload: string }
  | { type: "LIKE_COUNTRY"; payload: string }
  | { type: "SORT_BY_LIKES"; payload: "asc" | "desc" };

type Country = {
  name: string;
  population: number;
  capital: string;
  about: string;
  image: string;
  id: string;
  like: number;
  isDeleted: boolean;
  originalIndex: number;
  georgianName: string;
  georgianCapital: string;
  georgianAbout: string;
};

const countryReducer = (state: Country[], action: ActionType): Country[] => {
  switch (action.type) {
    case "SET_COUNTRIES":
      return action.payload;
    case "ADD_COUNTRY":
      return [
        ...state,
        { ...action.payload, isDeleted: false, originalIndex: state.length },
      ];
    case "DELETE_COUNTRY":
      return state.map((country) =>
        country.id === action.payload
          ? { ...country, isDeleted: true }
          : country
      );
    case "LIKE_COUNTRY":
      return state.map((country) =>
        country.id === action.payload
          ? { ...country, like: country.like + 1 }
          : country
      );
    case "SORT_BY_LIKES":
      return [...state].sort((a, b) =>
        action.payload === "asc" ? a.like - b.like : b.like - a.like
      );
    default:
      return state;
  }
};

const CountryCards: React.FC<{ lang?: string }> = () => {
  const [countryData, dispatch] = useReducer(countryReducer, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortByLikes, setSortByLikes] = useState<"asc" | "desc" | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editCountry, setEditCountry] = useState<Country | null>(null);

  const { lang } = useParams<{ lang: string }>();
  const translate = getTranslation(lang || defaultLocale);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(API_URL);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const countries = response.data.map((country: any, index: number) => ({
          ...country,
          isDeleted: false,
          originalIndex: index,
        }));
        dispatch({ type: "SET_COUNTRIES", payload: countries });
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openEditModal = (country: Country) => {
    setEditCountry(country);
    setIsEditModalOpen(true);
  };

  const handleAddCountry = async (
    name: string,
    capital: string,
    population: number,
    about: string,
    image: string,
    georgianName: string,
    georgianCapital: string,
    georgianAbout: string
  ) => {
    const newCountry: Country = {
      name,
      capital,
      population,
      about,
      image,
      like: 0,
      id: (Number(countryData.at(-1)?.id) + 1).toString(),
      isDeleted: false,
      originalIndex: countryData.length,
      georgianName,
      georgianCapital,
      georgianAbout,
    };

    try {
      const response = await axios.post(API_URL, newCountry);
      dispatch({ type: "ADD_COUNTRY", payload: response.data });
    } catch (error) {
      console.error("Error adding country:", error);
    }

    closeModal();
  };

  const handleDeleteCountry = async (countryId: string) => {
    try {
      await axios.delete(`${API_URL}/${countryId}`);
      dispatch({ type: "DELETE_COUNTRY", payload: countryId });
    } catch (error) {
      console.error("Error deleting country:", error);
    }
  };

  const sortedCountries = [...countryData]
    .sort((a, b) => {
      if (sortByLikes) {
        return sortByLikes === "asc" ? a.like - b.like : b.like - a.like;
      }
      return a.originalIndex - b.originalIndex;
    })
    .sort((a, b) => {
      return a.isDeleted === b.isDeleted ? 0 : a.isDeleted ? 1 : -1;
    });

  const closeEditModal = () => setIsEditModalOpen(false);

  const handleEditCountry = async (updatedCountry: Country) => {
    try {
      await axios.put(`${API_URL}/${updatedCountry.id}`, updatedCountry);
      dispatch({
        type: "SET_COUNTRIES",
        payload: countryData.map((country) =>
          country.id === updatedCountry.id ? updatedCountry : country
        ),
      });
    } catch (error) {
      console.error("Error updating country:", error);
    }
    closeEditModal();
  };
  return (
    <section className={mainStyle["container"]}>
      <div className={style["country-card-header"]}>
        <h2 className={mainStyle["section-title"]}>
          {String(translate("hero.title"))}
        </h2>
        <div className={style["country-sort"]}>
          <button onClick={() => setSortByLikes("asc")}>Asc</button>
          <button onClick={() => setSortByLikes("desc")}>Desc</button>
          <button onClick={openModal}>
            {String(translate("country.addCountry"))}
          </button>
        </div>
      </div>
      <div className={style["country-card-row"]}>
        <Swiper
          spaceBetween={8}
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: `.${style["swiper-button-prev"]}`,
            nextEl: `.${style["swiper-button-next"]}`,
          }}
          modules={[Navigation]}
        >
          {sortedCountries.map((country) => (
            <SwiperSlide key={country.id}>
              <Card
                cardData={{
                  ...country,
                  name: lang === "ka" ? country.georgianName : country.name,
                  capital:
                    lang === "ka" ? country.georgianCapital : country.capital,
                  about: lang === "ka" ? country.georgianAbout : country.about,
                }}
                handleLikeClick={() =>
                  dispatch({ type: "LIKE_COUNTRY", payload: country.id })
                }
                handleDelete={() => handleDeleteCountry(country.id)}
                handleEdit={() => openEditModal(country)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={style["swiper-button-prev"]}>
          <span>&#10148;</span>
        </div>
        <div className={style["swiper-button-next"]}>
          <span>&#10148;</span>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleAddCountry}
      />
      {isEditModalOpen && editCountry && (
        <EditModal
          country={editCountry}
          onClose={closeEditModal}
          onSubmit={handleEditCountry}
        />
      )}
    </section>
  );
};

CountryCards.displayName = "Country Card Component";

export default CountryCards;
