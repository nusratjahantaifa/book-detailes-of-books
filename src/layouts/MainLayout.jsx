
import Banner from "../components/Banner";
import Books from "../components/Books";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Banner></Banner>
     <Books></Books>
    </>
  );
};

export default MainLayout;
