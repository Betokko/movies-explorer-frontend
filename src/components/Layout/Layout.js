import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({isLoggedIn}) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
