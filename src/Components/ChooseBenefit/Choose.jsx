import React from 'react'
import Choose1 from '../../img/choose1.svg';
import Choose2 from '../../img/choose2.svg';
import Choose3 from '../../img/choose3.svg';
import Choose4 from '../../img/choose4.svg';
import Choose5 from '../../img/choose5.svg';
import Choose6 from '../../img/choose6.svg';
import Choose7 from '../../img/choose7.svg';
import Choose8 from '../../img/choose8.svg';
import Choose9 from '../../img/choose9.svg';
import './Choose.css';

const Choose = () => {
    return (
        <div className="choose">
            <div className="choose-header">
                <h1>WHY CHOOSE LEDGERMAX</h1>
                <h2>Our featured benefits.</h2>
            </div>
            <div className="choose-wrapper">
                <div className="choose-box">
                    <div><span><img src={Choose1} alt="" /></span><h1>5-Star Customer Support</h1></div>
                    <div><span><img src={Choose2} alt="" /></span><h1>Free setup and training</h1></div>
                    <div><span><img src={Choose3} alt="" /></span><h1>100% Online. View from anywhere</h1></div>
                </div>

                <div className="choose-box">
                    <div><span><img src={Choose4} alt="" /></span><h1>PKR 5,000 / month</h1></div>
                    <div><span><img src={Choose5} alt="" /></span><h1>Unlimited Users</h1></div>
                    <div><span><img src={Choose6} alt="" /></span><h1>100% Online. View from anywhere</h1></div>
                </div>

                <div className="choose-box">
                    <div><span><img src={Choose7} alt="" /></span><h1>100+ Features and reports</h1></div>
                    <div><span><img src={Choose8} alt="" /></span><h1>AWS Security</h1></div>
                    <div><span><img src={Choose9} alt="" /></span><h1>Mobile App*</h1></div>
                </div>
            </div>
        </div>
    )
}

export default Choose