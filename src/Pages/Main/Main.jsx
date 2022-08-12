import React from 'react';
import './Main.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Feature from '../../Components/Feature/Feature';
import Customer from '../../Components/Customer/Customer';
import MAIN from '../../img/main.png';
import A1 from '../../img/A1.png';
import A2 from '../../img/A2.png';
import A3 from '../../img/A3.png';
import A4 from '../../img/A4.png';
import A5 from '../../img/A5.png';
import A6 from '../../img/A6.png';
import Check from '../../img/check.svg';
import Google from '../../img/googlePlay.jpg';
import App from '../../img/AppStore.jpg';
import BackToTopButton from '../../Components/AddToTopButton/BackToTop';
import { motion } from 'framer-motion';


const Main = () => {

    const firstVariants = {
        phala: {
            y: '200px'
        },
        badmain: {
            y: '0px',
            transition: {
                type: 'liner',
                duration: 0.6
            }
        }
    }
    
    return (
        <>
            <Navbar />
            <BackToTopButton />

            <div className="main-box">
                <div className="main-head">
                    <span>V</span>
                    <span>Aap ke Hisab Ka Software</span>
                </div>
                <div className="main-heading">
                    <h1>Accounting Software for Pakistani Small Businesses</h1>
                </div>
                <div className="main-desc">
                    <h3>100+. Features and reports created for Pakistani businesses.
                        Free premium support and training </h3>
                </div>
                <div className="main-img">
                    <img src={MAIN} alt="" />
                </div>
                <div className="main-btn">
                    <button >Get Started</button>
                </div>
            </div>

            <div className="A11-wrapper">
                <div className="A11-heading">
                    <h3>EXPLORE LEDGERMAX</h3>
                    <h1>WHAT IS INCLUDED</h1>
                </div>

                <motion.div className="All-box"
                    variants={firstVariants}
                    initial="phala"
                    whileInView="badmain"
                >
                    <div className="A11-l">
                        <h2>Financial Accounting</h2>
                        <h5>
                            Control and manage your business financial
                            with flexible and powerful way. Manage
                            multiple branches, central cost center
                            management and more
                        </h5>
                    </div>
                    <div className="A11-b">
                        <div>
                            <span>01</span>
                        </div>
                        <span></span>
                    </div>
                    <div className="A11-r">
                        <div className="A11-r-img">
                            <img src={A1} alt="" />
                        </div>
                    </div>
                </motion.div>



                <motion.div className="All-box"
                    variants={firstVariants}
                    initial="phala"
                    whileInView="badmain"
                >
                    <div className="A11-l">
                        <div className="A11-l-img1 ">
                            <img src={A2} alt="" />
                        </div>
                    </div>
                    <div className="A11-b">
                        <div>
                            <span>02</span>
                        </div>
                        <span></span>
                    </div>
                    <div className="A11-r A11-r1">
                        <h2>Sales and Purchase</h2>
                        <h5>
                            Create professional invoices, sales receipt and
                            quotation. Convert quotation to invoices, store
                            and preview invoices, customer aging invoices,
                            manage receivables and more
                        </h5>
                    </div>
                </motion.div>

                <motion.div className="All-box"
                    variants={firstVariants}
                    initial="phala"
                    whileInView="badmain"
                >
                    <div className="A11-l">
                        <h2>Inventory Accounting</h2>
                        <h5>
                            Effortless inventory tracking,
                            always know what’s on stock and what’s on order.
                        </h5>
                    </div>
                    <div className="A11-b">
                        <div>
                            <span>03</span>
                        </div>
                        <span></span>
                    </div>
                    <div className="A11-r">
                        <div className="A11-r-img">
                            <img src={A3} alt="" />
                        </div>
                    </div>
                </motion.div>

                <motion.div className="All-box"
                    variants={firstVariants}
                    initial="phala"
                    whileInView="badmain"
                >
                    <div className="A11-l">
                        <div className="A11-l-img1 ">
                            <img src={A4} alt="" />
                        </div>
                    </div>
                    <div className="A11-b">
                        <div>
                            <span>04</span>
                        </div>
                        <span></span>
                    </div>
                    <div className="A11-r A11-r1">
                        <h2>Manufacturing</h2>
                        <h5>
                            Control your production through
                            bill of material to manufacturing work order
                        </h5>
                    </div>
                </motion.div>

                <motion.div className="All-box"
                    variants={firstVariants}
                    initial="phala"
                    whileInView="badmain"
                >
                    <div className="A11-l">
                        <h2>Payroll & HR</h2>
                        <h5>
                            Manage your payroll with all
                            your HR, pay and benefits.
                        </h5>
                    </div>
                    <div className="A11-b">
                        <div>
                            <span>05</span>
                        </div>
                        <span></span>
                    </div>
                    <div className="A11-r">
                        <div className="A11-r-img">
                            <img src={A5} alt="" />
                        </div>
                    </div>
                </motion.div>

                <motion.div className="All-box"
                    variants={firstVariants}
                    initial="phala"
                    whileInView="badmain"
                >
                    <div className="A11-l">
                        <div className="A11-l-img1 ">
                            <img src={A6} alt="" />
                        </div>
                    </div>
                    <div className="A11-b">
                        <div>
                            <span>06</span>
                        </div>
                        <span></span>
                    </div>
                    <div className="A11-r A11-r1">
                        <h2>Taxation</h2>
                        <h5>
                            Localized taxation features for Pakistani
                            businesses

                        </h5>
                    </div>
                </motion.div>
            </div>

            <Customer />

            <div className="Businesses">
                <div className="buis-header">
                    <h1>Trusted by more than 500 Businesses all over Pakistan</h1>
                </div>
                <div className="buis-main">
                    <h1>Schedule a demo with today and see how it works</h1>
                    <button className='buis-btn'>SEE FULL PREVIEW</button>
                </div>
            </div>

            <div className="coming">
                <div className="coming-box">

                    <div className="coming-box-title">
                        <h1>COMING SOON</h1>
                        <h2>LedgerMax Mobile App</h2>
                    </div>

                    <div className="coming-box-dec">
                        <ul>
                            <li><span><img src={Check} alt="" /></span> Work your accounts from anywhere</li>
                            <li><span><img src={Check} alt="" /></span> Send and receive invoices</li>
                            <li><span><img src={Check} alt="" /></span> Track and log expenses</li>
                            <li><span><img src={Check} alt="" /></span> View 100s of reports on the go</li>
                        </ul>
                    </div>

                    <div className="coming-box-img">
                        <img src={Google} alt="" />
                        <img src={App} alt="" />
                    </div>

                </div>
            </div>


            <Feature />
            <Footer />
        </>
    )
}

export default Main