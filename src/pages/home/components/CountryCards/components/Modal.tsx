import React, { ChangeEvent, useState, FormEvent } from "react";
import style from "../style.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (
    name: string,
    capital: string,
    population: number,
    about: string,
    image: string,
    georgianName: string,
    georgianCapital: string,
    georgianAbout: string
  ) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [capital, setCapital] = useState("");
  const [population, setPopulation] = useState("");
  const [about, setInfo] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const [georgianName, setGeorgianName] = useState("");
  const [georgianCapital, setGeorgianCapital] = useState("");
  const [georgianAbout, setGeorgianAbout] = useState("");

  const [nameError, setNameError] = useState("");
  const [capitalError, setCapitalError] = useState("");
  const [populationError, setPopulationError] = useState("");
  const [aboutError, setAboutError] = useState("");
  const [imageError, setImageError] = useState("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validImageTypes = ["image/jpeg", "image/png"];
      if (!validImageTypes.includes(file.type)) {
        setImageError("Only JPG and PNG files are allowed.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (!name) {
      setNameError("Country name is required");
      isValid = false;
    }

    if (!capital) {
      setCapitalError("Capital is required");
      isValid = false;
    }

    if (!population) {
      setPopulationError("Population is required");
      isValid = false;
    }

    if (!about) {
      setAboutError("Please write something about the country");
      isValid = false;
    }

    if (!image) {
      setImageError("Image is required");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    onSubmit(
      name,
      capital,
      Number(population),
      about,
      image as string,
      georgianName,
      georgianCapital,
      georgianAbout
    );
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={style["modal"]}>
      <div className={style["modal-content"]}>
        <div className={style["modal-header"]}>
          <h2>Add Country</h2>
          <button onClick={onClose}>
            <span>&#88;</span>
          </button>
        </div>
        <form onSubmit={handleSubmit} className={style["modal-form"]}>
          <input
            type="text"
            name="name"
            placeholder="Country name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && (
            <span className={style["input-error"]}>{nameError}</span>
          )}

          <input
            type="text"
            name="capital"
            placeholder="Country capital"
            value={capital}
            onChange={(e) => setCapital(e.target.value)}
          />
          {capitalError && (
            <span className={style["input-error"]}>{capitalError}</span>
          )}

          <input
            type="number"
            name="population"
            placeholder="Population"
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
          />
          {populationError && (
            <span className={style["input-error"]}>{populationError}</span>
          )}

          <textarea
            name="about"
            placeholder="About country"
            value={about}
            onChange={(e) => setInfo(e.target.value)}
          ></textarea>
          {aboutError && (
            <span className={style["input-error"]}>{aboutError}</span>
          )}

          <input type="file" accept="image/*" onChange={handleImageChange} />
          {imageError && (
            <span className={style["input-error"]}>{imageError}</span>
          )}

          <h3>Georgian Information</h3>
          <input
            type="text"
            name="georgianName"
            placeholder="Georgian name"
            value={georgianName}
            onChange={(e) => setGeorgianName(e.target.value)}
          />
          <input
            type="text"
            name="georgianCapital"
            placeholder="Georgian capital"
            value={georgianCapital}
            onChange={(e) => setGeorgianCapital(e.target.value)}
          />
          <textarea
            name="georgianAbout"
            placeholder="Georgian about"
            value={georgianAbout}
            onChange={(e) => setGeorgianAbout(e.target.value)}
          ></textarea>

          <button type="submit">Add Country</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
