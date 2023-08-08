import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const Shop = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Shop;
