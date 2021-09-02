import React from 'react';
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import About from "./About/About";
import TourPartners from "./TourPartners/TourPartners";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer/Footer";
import FooterBottom from "./Footer/FooterBottom/FooterBottom";

const MainPage = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <About/>
            <TourPartners/>
            <Subscribe/>
            <Footer/>
            <FooterBottom/>
        </>
    );
};

export default MainPage;