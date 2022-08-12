import React from 'react';
import Choose from '../../Components/ChooseBenefit/Choose';
import Customer from '../../Components/Customer/Customer';
import Demo from '../../Components/Demo/Demo';
import Feature from '../../Components/Feature/Feature';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import AboutMainimg from '../../img/aboutMain.jpg';
import './About.css';

const About = () => {
    return (
        <>
            <Navbar />
            <div className="about-wrapper">

                <div className="about-heading">
                    <h1>About LedgerMax</h1>
                    <h3>Find out about Pakistan's Leading Accounting Software</h3>
                </div>

                <div className="about-img">
                    <img src={AboutMainimg} alt="" />
                </div>
            </div>
            <Choose />
            <Customer />
            <Feature />
            <Demo />
            <Footer />
        </>
    )
}

export default About