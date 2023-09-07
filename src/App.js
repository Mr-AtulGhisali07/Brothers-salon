import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import About from "./pages/About";
import ServiceLadies from "./pages/ServiceLadies";
import ServiceGents from "./pages/ServiceGents";
import ContactUs from "./pages/ContactUs";
import Error404 from "./pages/Error404";
import GoTopButton from "./Components/Container/GoTopButton";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomeSlider from "./Components/Container/HomeSlider";
import Collection from "./pages/collections/Collection";
import RockNFolk from "./pages/collections/pages/RockNFolk";
import LaunchPad from "./pages/collections/pages/LaunchPad";
import Collection2020 from "./pages/collections/pages/Collection2020";
import BridalCollection from "./pages/collections/pages/BridalCollection";
import Collection2023 from "./pages/collections/pages/Collection2023";
import AndpersandShoot from "./pages/collections/pages/AndpersandShoot";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exct path="/" element={<HomeSlider />} />
          <Route path="/about" element={<About />} />
          <Route path="/gents" element={<ServiceGents />} />
          <Route path="/ladies" element={<ServiceLadies />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/launch-pad" element={<LaunchPad />} />
          <Route path="/collection-2020" element={<Collection2020 />} />
          <Route path="/rock-n-folk" element={<RockNFolk />} />
          <Route path="/bridal" element={<BridalCollection />} />
          <Route path="/collection-2023" element={<Collection2023 />} />
          <Route path="/andpersand-shoot" element={<AndpersandShoot />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <GoTopButton />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;
