import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../../Shared/Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;