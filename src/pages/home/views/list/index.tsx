import "@/style/index.module.css";
import Hero from "@/pages/home/components/Hero/index";
import CountryCards from "../../components/CountryCards";

const Home = () => {
  return (
    <>
      <Hero />
      <CountryCards />
    </>
  );
};

export default Home;
