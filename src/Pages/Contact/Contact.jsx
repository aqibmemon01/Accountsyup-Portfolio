import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Contact.css';
import Contact1 from '../../img/contact1.svg';
import Contact2 from '../../img/contact2.svg';
import Contact3 from '../../img/contact3.svg';
import Contact4 from '../../img/contact4.svg';
import Demo from '../../Components/Demo/Demo';
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="contact-wrapper">
                <div className="contact-t">
                    <div className="contact-t-head">
                        <h1>Contact LedgerMax</h1>
                        <h3>We reply fast. Give us a try!</h3>
                    </div>
                    <div className="contact-t-main">
                        <div>
                            <input type="text" placeholder='Full Name' />
                            <input type="Email" placeholder='Email Address' />
                        </div>

                        <div>
                            <input type="text" placeholder='Company Name' />
                            <input type="text" placeholder='+92' />
                            <textarea placeholder='Type your message here' style={{ height: '200px' }}></textarea>
                        </div>

                        <div>
                            <button>Submit Form</button>
                        </div>
                    </div>
                </div>
                <div className="contact-b">
                    <div className="contact-b-l">
                        <div className="contact-map">
                        <iframe width="590" height="330" title='map' id="gmap_canvas" src="https://maps.google.com/maps?q=garden%20zoo%20karachi&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                    <div className="contact-b-right">
                        <div className="contact-items">
                            <div className="contact-icon">
                                <img src={Contact1} alt="" />
                            </div>
                            <div className="contact-text">
                                <h2>Sales Inquiries</h2>
                                <h4>Fill out our contact form or call +92 21 34559516-7</h4>
                            </div>
                        </div>

                        <div className="contact-items">
                            <div className="contact-icon">
                                <img src={Contact2} alt="" />
                            </div>
                            <div className="contact-text">
                                <h2>Cutomer Support</h2>
                                <h4>Email your inquiries to support@ledgermax.pk or call +92 333 1036858</h4>
                            </div>
                        </div>

                        <div className="contact-items">
                            <div className="contact-icon">
                                <img src={Contact3} alt="" />
                            </div>
                            <div className="contact-text">
                                <h2>HR / Careers</h2>
                                <h4>Visit our careers page for more information</h4>
                            </div>
                        </div>

                        <div className="contact-items">
                            <div className="contact-icon">
                                <img src={Contact4} alt="" />
                            </div>
                            <div className="contact-text">
                                <h2>Visit us</h2>
                                <h4>Office # 602, Plot 5- Azyaam Plaza، Main Shahrah-e-Faisal , Block A (SMCHS) Karachi, Pakistan</h4>
                            </div>
                        </div>
                        <div className="contact-btn">
                        <div className="google-btn">View on Google Maps</div>
                        </div>                        
                    </div>

                </div>
            </div>
            <Demo/>
            <Footer/>
        </>
    )
}

export default Contact