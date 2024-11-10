import { useState } from "react";
import style from "../style.module.css";

type Country = {
  name: string;
  capital: string;
  population: number;
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

interface EditModalProps {
  country: Country;
  onClose: () => void;
  onSubmit: (updatedCountry: Country) => void;
}

const EditModal: React.FC<EditModalProps> = ({
  country,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: country.name,
    capital: country.capital,
    population: country.population,
    about: country.about,
    georgianName: country.georgianName,
    georgianCapital: country.georgianCapital,
    georgianAbout: country.georgianAbout,
    image: country.image,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...country, ...formData });
  };

  return (
    <div className={style["modal"]}>
      <div className={style["modal-content"]}>
        <div className={style["modal-header"]}>
          <h2>Edit Country</h2>
          <button onClick={onClose}>
            <span>&#88;</span>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Country Name"
          />
          <input
            type="text"
            name="capital"
            value={formData.capital}
            onChange={handleChange}
            placeholder="Capital"
          />
          <input
            type="number"
            name="population"
            value={formData.population}
            onChange={handleChange}
            placeholder="Population"
          />
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="About"
          ></textarea>
          <input
            type="text"
            name="georgianName"
            value={formData.georgianName}
            onChange={handleChange}
            placeholder="Georgian Name"
          />
          <input
            type="text"
            name="georgianCapital"
            value={formData.georgianCapital}
            onChange={handleChange}
            placeholder="Georgian Capital"
          />
          <textarea
            name="georgianAbout"
            value={formData.georgianAbout}
            onChange={handleChange}
            placeholder="Georgian About"
          ></textarea>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            accept="image/*"
          />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
