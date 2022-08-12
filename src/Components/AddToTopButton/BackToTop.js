import BackToTop from '../../img/backToTop.svg';
import BackToDowntext from '../../img/scrollText.svg';
import BackToDownIcon from '../../img/scrollDown.svg';
import { motion } from 'framer-motion';
import './BackToTop.css';

import { useState } from 'react';
import { useEffect } from 'react';


function BackToTopButton() {

    const [backToTop, setBackToTop] = useState(false);
    const [backToDown, setBackToDown] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1100) {
                setBackToTop(true)
                setBackToDown(false)
            }

            else {
                setBackToTop(false)
                setBackToDown(true)
            }
        })

    }, [])

    const scrollDown = () => {
        window.scrollTo({
            behavior: "smooth",
            top: '1110'
        })
    }

    const scrollTop = () => {
        window.scrollTo({
            behavior: "smooth",
            top: '0'
        })
    }

    return <div className="gototop">

        {
            backToDown && (
                <>
                    <img src={BackToDowntext} onClick={scrollDown} alt='' />
                    <motion.img
                        initial={{ y: 0 }}
                        whileInView={{ y: 10 }}
                        transition={{ yoyo: 10000, duration: 0.4 }}
                        className="downicon"
                        src={BackToDownIcon} onClick={scrollDown} alt='' />
                </>
            )
        }


        {
            backToTop && (
                <img src={BackToTop} onClick={scrollTop} alt='' />
            )
        }
    </div>






}

export default BackToTopButton