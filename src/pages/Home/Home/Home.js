import React from 'react';
import Footer from '../../../shared/Footer/Footer';
import Header from '../../../shared/Header.js/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;