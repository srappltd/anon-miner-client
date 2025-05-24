import React from "react";
import HeroSection from "../components/HeroSection";
import OurTopIntegration from "../components/OurTopIntegration";
import ProductSection from "../components/ProductSection";
import ServiceSection from "../components/ServiceSection";
import FeatureSection from "../components/FeatureSection";
import CoinDoxSection from "../components/CoinDoxSection";
import How_Earn from "../components/How_Earn";
import QuestionPage from "../components/QuestionPage";
import { StartMining } from "../components/StartMining";
import SuscribeNews from "../components/SuscribeNews";
import GetTouchContact from "../contactComponent/GetTouchContact";
import Whyprestorix from "../components/Whyprestorix";
import AboutPretorix from "../components/AboutPretorix";
import AdvancedFeatures from "../AdvanceFeatures";
import BenefitsSection from "../BenefitsSection";
import FAQSection from "../components/users/FAQSection";
import NextGenSection from "./NextGenSection ";
import Testimonials from "../Testimonials";
import DecentralizedFuture2 from "./DecentralizedFuture2";
import JourneySection from "../components/JourneySection/JourneySection";
import CountrySlider from "../components/CountrySlider";




const Home = () => {
  return (
    <div className="w-full text-white lg:!px-[10rem] bg-[#0B1121]">
      <HeroSection />
      <CountrySlider/>
      <Whyprestorix />
      
      <JourneySection/>

     
      <div className="w-full text-white bg-white">
        <OurTopIntegration />
        <div className="p-5">
          <ProductSection />
        </div>
        <ServiceSection />
        <FeatureSection />
        <CoinDoxSection />
        <AboutPretorix />
        <How_Earn />
        <AdvancedFeatures />
        <BenefitsSection />
        <NextGenSection />
        <Testimonials />
        <DecentralizedFuture2 />
        <FAQSection />
        {/* <AdvancedFeatures></AdvancedFeatures> */}
      </div>
      {/* <QuestionPage /> */}
      {/* <StartMining /> */}
      {/* <SuscribeNews /> */}
    </div>
  );
};

export default Home;
