import { useLoaderData } from "react-router";
import BannerCard from "../Components/BannerCard";
import PopularGame from "../Components/PopularGame";
import Newsletter from "../Components/NewsLetter";
import { motion } from "motion/react";
const HomePage = () => {
  const data = useLoaderData();
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="home">
        <BannerCard data={data}></BannerCard>
        <PopularGame data={data} />
        <Newsletter></Newsletter>
      </div>
    </motion.div>
  );
};

export default HomePage;
