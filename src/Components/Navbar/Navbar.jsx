import React from 'react';
import './Navbar.css';
import MainLogo from '../../img/mainLogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="navbar-wrapper">
                <div className="nav-main">

                    <div className="navbar-l">
                        <div className="navbar-icon">
                            {/* <Link to='/'> */}
                                <div className='myLogo'>AccountsYup.com</div>
                                {/* <button className="nav-btn">See Demo</button> */}
                            {/* <img src={MainLogo} alt="" /> */}
                            {/* </Link> */}
                        </div>
                        <div className="navbar-items">
                            <ul>
                                <li></li>
                                {/* <li>
                                    <span>Features</span>
                                    <div className="dropdown">
                                        <div className="dropdown-l">
                                            <div className="dropdown-box">
                                                <div className="dropdown-title">CORE FEATURES</div>
                                                <div className="dropdown-items">
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
                                        </div>
                                        <div className="dropdown-r"></div>
                                    </div>
                                </li> */}
                                <li><Link to='/pricing'>Pricing</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                                <li><Link to='/contact'>About Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-r">
                        <div className="navbar-btn">
                            <button className="nav-btn">Live Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar