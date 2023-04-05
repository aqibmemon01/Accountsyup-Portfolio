import React from 'react';
import './Footer.css';
import Logo from '../../img/mainLogo.png';
import Facebook from '../../img/facebook.svg';
import Linkedin from '../../img/linkedin.svg';
import Youtube from '../../img/youtube.png';

const Footer = () => {
    return (
        <>
            <div className="footer-wrapper">
                <div className="footer-container">
                    <div className="footer-header">
                        <div className="footer-header-l">
                            <div className="footer-logo">
                                <h2>Accountsyup.com</h2>
                                {/* <img src={Logo} alt="" width={100} /> */}
                            </div>
                        </div>
                        <div className="footer-header-r">
                            <div className="footer-btn">
                                <h1>Schedule a Demo</h1>
                                <button >See Demo</button>
                            </div>
                        </div>
                    </div>
                    <div className="footer-main">
                        <div className="footer-main-l">
                            <div className="footer-items">
                                <div className="footer-items-title">
                                    <h2>Features</h2>
                                </div>
                                <div className="footer-items-details">
                                    <ul>
                                        <li>Financial</li>
                                        <li>Sales & Purchase</li>
                                        <li>Inventory</li>
                                        <li>Manufacturing</li>
                                        <li>Payroll & HR</li>
                                        <li>Timesheet</li>
                                        <li>Taxation</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer-items">
                                <div className="footer-items-title">
                                    <h2>Explore Accountsyup</h2>
                                </div>
                                <div className="footer-items-details">
                                    <ul>
                                        <li>Pricing Plans</li>
                                        <li>Compare us</li>
                                        <li>Our Blog</li>
                                        <li>Book a Demo</li>
                                        <li>Help Videos</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer-items">
                                <div className="footer-items-title">
                                    <h2>Company</h2>
                                </div>
                                <div className="footer-items-details">
                                    <ul>
                                        <li>About us</li>
                                        <li>Why us</li>
                                        <li>Careers</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer-items" style={{paddingLeft:'50px'}}>
                                <div className="footer-items-title">
                                    <h2>Legal</h2>
                                </div>
                                <div className="footer-items-details">
                                    <ul>
                                        <li>Privacy Policy</li>
                                        <li>Terms of Usage</li>
                                    </ul>
                                </div>
                            </div>

                        </div>


                        <div className="footer-main-r">
                            <div className="ft-head">
                                <h1>Follow Our Socials</h1>
                            </div>
                            <div className="footer-icon">
                                <div className="icon-img">
                                <img src={Facebook} alt="" width={15} />
                               </div>
                               
                               <div className="icon-img">
                                <img src={Linkedin} alt="" width={15} />
                               </div>
                               
                               <div className="icon-img">
                                <img src={Youtube} alt="" width={15} />
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer