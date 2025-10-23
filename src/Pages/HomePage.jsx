import { useLoaderData } from "react-router";
import BannerCard from "../Components/BannerCard";
import PopularGame from "../Components/PopularGame";
const HomePage = () => {
  const data = useLoaderData();
  return (
    <>
      <BannerCard data={data} />
      <PopularGame data={data} />
    </>
  );
};

export default HomePage;
