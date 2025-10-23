import { useLoaderData } from "react-router";
import BannerCard from "../Components/BannerCard";
import PopularGame from "../Components/PopularGame";
import Newsletter from "../Components/NewsLetter";
const HomePage = () => {
  const data = useLoaderData();
  return (
    <>
      <BannerCard data={data} />
      <PopularGame data={data} />
      <Newsletter></Newsletter>
    </>
  );
};

export default HomePage;
