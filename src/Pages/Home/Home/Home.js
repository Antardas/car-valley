import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../../Shared/Services/Services';
import Banner from '../Banner/Banner';
import NewsLetter from '../NewsLetter/NewsLetter';
import Reviews from '../Reviews/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services limit={6}></Services>
            <Reviews></Reviews>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;