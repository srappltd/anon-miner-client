import React from "react";
import { Link } from "react-router-dom";
import { AuthRoutes } from "../context/Routes";
import { FaUser, FaShieldAlt, FaChartLine, FaRocket, FaLock, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import HeroSection from "../components/HomeComponents/HeroSection";
import OurTopIntegration from "../components/HomeComponents/OurTopIntegration";

import ProductSection from "../components/HomeComponents/ProductSection";
import ServiceSection from "../components/HomeComponents/ServiceSection";
import FeatureSection from "../components/HomeComponents/FeatureSection";
import CoinDoxSection from "../components/HomeComponents/CoinDoxSection";
import How_Earn from "../components/HomeComponents/How_Earn";
// import QuestionPage from "../components/HomeComponents/QuestionPage";
// import { StartMining } from "../components/HomeComponents/StartMining";
// import SuscribeNews from "../components/HomeComponents/SuscribeNews";
// import GetTouchContact from "../contactComponent/GetTouchContact";
import Whyprestorix from "../components/HomeComponents/Whyprestorix";
import AboutPretorix from "../components/HomeComponents/AboutPretorix";
// import AdvancedFeatures from "../AdvanceFeatures";
// import BenefitsSection from "../BenefitsSection";
// import FAQSection from "../components/HomeComponents/users/FAQSection";
// import NextGenSection from "./NextGenSection ";
// import Testimonials from "../Testimonials";
// import DecentralizedFuture2 from "./DecentralizedFuture2";
import JourneySection from "../components/HomeComponents/JourneySection/JourneySection";
import CountrySlider from "../components/HomeComponents/CountrySlider";
import AdvancedFeatures from "../Components/HomeComponents/AdvancedFeatures";
import BenefitsSection from "../Components/HomeComponents/BenefitsSection";
import NextGenSection from "../Components/HomeComponents/NextGenSection ";
import Testimonials from "../Components/HomeComponents/Testimonials";
import DecentralizedFuture2 from "../Components/HomeComponents/DecentralizedFuture2";
import FAQSection from "../Components/HomeComponents/FAQSection";




const Home = () => {
  const features = [
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Fast Mining",
      description: "Experience lightning-fast mining operations with our optimized platform"
    },
    {
      icon: <FaLock className="w-6 h-6" />,
      title: "Secure Platform",
      description: "Your security is our priority with advanced encryption and protection"
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Monitor your mining performance with detailed analytics and insights"
    },
    {
      icon: <FaGlobe className="w-6 h-6" />,
      title: "Global Network",
      description: "Connect with miners worldwide through our decentralized network"
    }
  ];

  return (
    <div className="">

<HeroSection />
<CountrySlider/>
<Whyprestorix />
{/* <JourneySection/> */}

<div className="w-full text-white bg-white">
        <OurTopIntegration />
        <div className="p-5">
          <ProductSection />
        </div>
     <ServiceSection />
        <FeatureSection />
            {/* <CoinDoxSection /> */}
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
    

     
  
    </div>
  );
};

export default Home;
