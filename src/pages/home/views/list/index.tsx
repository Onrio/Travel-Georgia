import "@/style/index.module.css";
import Hero from "@/pages/home/components/Hero/index";
import CountryCards from "../../components/CountryCards";
import MostLikedCountry from "../../components/PopularCountry/popularcountry";

const Home = () => {
  return (
    <>
      <Hero />
      <MostLikedCountry />
      <CountryCards />
    </>
  );
};

export default Home;
