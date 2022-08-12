import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Pricing.css';
import Customer from '../../Components/Customer/Customer';
import Feature from '../../Components/Feature/Feature';
import Demo from '../../Components/Demo/Demo';
import Footer from '../../Components/Footer/Footer';
import Choose from '../../Components/ChooseBenefit/Choose';

const Pricing = () => {
    return (
        <>
            <Navbar />
            <div className="pricing-wrapper">
                <div className="pricing-heading">
                    <h1>Pricing Plans</h1>
                    <h2>Easy and affordable payment plans</h2>
                </div>
                <div className="price">
                    <div className="price-left">
                        <h1>OUR PRICING</h1>
                        <h3>#1 Accounting Software in Pakistan</h3>
                        <h4>Free Demo</h4>
                        <h5>Used by more than 500 Businesses in Pakistan</h5>
                    </div>
                    <div className="price-right">
                        <div className="price-box">
                            <h1>Standard</h1>
                            <ul>
                                <li>Unlimited users</li>
                                <li>Multi-companies</li>
                                <li>100+. Features and reports</li>
                            </ul>
                            <h2>Rs.6,000 <span>per month*</span></h2>
                            <button className="price-btn">Get Started</button>
                            <h3>Billed Annually at Rs.72,000 / Year</h3>
                        </div>

                        <div className="price-box">
                            <h1>Enterprise</h1>
                            <ul>
                                <li>All standard features</li>
                                <li>Priority support</li>
                                <li>Customizations</li>
                            </ul>
                            <h2>Rs.12,500<span> per month*</span></h2>
                            <button className="price-btn">Get Started</button>
                            <h3>Billed quarterly</h3>
                        </div>
                    </div>
                </div>
            </div>
            
            <Choose/>
            <Customer/>
            <Feature/>
            <Demo/>
            <Footer/>



        </>
    )
}

export default Pricing