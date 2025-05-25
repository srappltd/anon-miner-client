import React from "react";
import HeroSection from "../Components/HeroSection";
import OurTopIntegration from "../Components/OurTopIntegration";
import ProductSection from "../Components/ProductSection";
import ServiceSection from "../Components/ServiceSection";
import FeatureSection from "../Components/FeatureSection";
import CoinDoxSection from "../Components/CoinDoxSection";
import How_Earn from "../Components/How_Earn";
import QuestionPage from "../Components/QuestionPage";
import { StartMining } from "../Components/StartMining";
import SuscribeNews from "../Components/SuscribeNews";
import GetTouchContact from "../contactComponent/GetTouchContact";
import Whyprestorix from "../Components/Whyprestorix";
import AboutPretorix from "../Components/AboutPretorix";
import AdvancedFeatures from "../AdvanceFeatures";
import BenefitsSection from "../BenefitsSection";
import FAQSection from "../Components/users/FAQSection";
import NextGenSection from "./NextGenSection ";
import Testimonials from "../Testimonials";
import DecentralizedFuture2 from "./DecentralizedFuture2";
import JourneySection from "../Components/JourneySection/JourneySection";
import CountrySlider from "../Components/CountrySlider";




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
