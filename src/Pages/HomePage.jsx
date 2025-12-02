import { useLoaderData, useLocation } from "react-router";
import BannerCard from "../Components/BannerCard";
import PopularGame from "../Components/PopularGame";
import Newsletter from "../Components/NewsLetter";
import { motion } from "motion/react";
import ClientReviews from "../Components/ClientReviews";
import AboutgameHub from "./AboutGamehub";
import { useEffect } from "react";
import { scrollToSection } from "../utils/scrollToSection";
const HomePage = () => {
  const data = useLoaderData();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo);
    }
  }, [location]);
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="home">
        <BannerCard data={data}></BannerCard>
        <section id="popular-games">
          <PopularGame data={data} />
        </section>
        <ClientReviews></ClientReviews>
        <section className="px-4 py-9">
          <AboutgameHub></AboutgameHub>
        </section>
        <Newsletter></Newsletter>
      </div>
    </motion.div>
  );
};

export default HomePage;
