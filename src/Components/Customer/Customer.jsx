import React from 'react';
import './Customer.css';
import { Reviews } from '../../Data/Review';
import { motion } from 'framer-motion';


const Customer = () => {
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
            <div className="customer">
                <div className="customer-wrapper">
                    <div className="customer-heading">
                        <h3>CUSTOMER LOVE</h3>
                        <h1>500 Customers in Pakistan</h1>
                    </div>
                    <motion.div className="review-boxs"
                             variants={firstVariants}
                             initial="phala"
                             whileInView="badmain"
                    >
                        {
                            Reviews.map((item, i) => {
                                return (
                                    <><div className="review">
                                        <div className="review-icon"><h1>"</h1></div>
                                        <div className="review-decr">
                                            <h4>
                                                {item.decs}
                                            </h4>
                                        </div>
                                        <div className="review-box">
                                            <div className="review-img">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="review-title">
                                                <h2>{item.title}</h2>
                                                <h3>{item.status}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })

                        }

                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Customer