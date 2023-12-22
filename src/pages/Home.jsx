/* eslint-disable no-unused-vars */
// import React from "react";
// import { Link } from "react-router-dom";
import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";
import BannerSection from "../components/Home/BannerSection";
import ContactBanner from "../components/Home/ContactBanner";
import OurAwardSection from "../components/Home/OurAward/OurAwardSection";
import OurCountDown from "../components/Home/OurCouwndown";

export default function Home() {
  ScrollTop(0, 0);

  return (
    <>
      <Pagetitle>Home || TaskTrove</Pagetitle>
      <BannerSection></BannerSection> 
      <OurAwardSection></OurAwardSection>
      <OurCountDown></OurCountDown>
    </>
  );
}
