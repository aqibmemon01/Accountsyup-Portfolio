import React from 'react';
import './Feature.css';
import Feature1 from '../../img/feature1.jpg';
import Feature2 from '../../img/feature2.jpg';
import Feature3 from '../../img/feature3.jpg';

const Feature = () => {
  return (
    <>
      <div className="Featured-wrapper">
                <div className="Featured-heading">
                    <h3>LEDGERMAX BLOG</h3>
                    <h1>Our Featured Blog Posts</h1>
                </div>
                <div className="feature-boxes">
                    <div className="feature-box">

                        <div className="feature-img">
                            <img src={Feature1} alt="" />
                        </div>
                        <div className="feature-details">
                            <h2>JULY 31, 2022</h2>
                            <h1>
                                Top 5 Tips for Managing Your Small
                                Business Inventory
                            </h1>
                            <h6>
                                Are you managing your small business
                                inventory well? Do you have your desired
                                products available in stock at the
                                right time or do you miss sales
                                opportunities due to lack of stock? Or
                                on the contrary are you losing money owing
                                to excessive inventory? If your answer to
                                any of these questions is YES, then
                                sadly, you’re not managing your small
                                business inventory accordingly. But don’t
                                worry! Here in this article we will discuss
                                some amazing tips to up your small business
                                inventory game. Let’s start with discussing
                                what is meant by inventory management.
                            </h6>
                            <span>Read more</span>
                        </div>
                    </div>

                    <div className="feature-box">

                        <div className="feature-img">
                            <img src={Feature2} alt="" />
                        </div>
                        <div className="feature-details">
                            <h2>JUNE 30, 2022</h2>
                            <h1>
                                Pakistan Accounting Glossary
                                for Small Businesses
                            </h1>
                            <h6>
                                Like any other industry, business accounting
                                too has an exclusive vocabulary and being a
                                business person it is essential to get yourself
                                familiar with the basic terminologies and
                                abbreviations used in this field. So, here we
                                have compiled an accounting glossary for you which
                                will help you understand the most commonly used
                                terms in the accounting world specifically pertaining
                                to small businesses in Pakistan.
                            </h6>

                            <span>Read more</span>
                        </div>
                    </div>
                    <div className="feature-box">

                        <div className="feature-img">
                            <img src={Feature3} alt="" />
                        </div>
                        <div className="feature-details">
                            <h2>APRIL 27, 2022</h2>
                            <h1>
                                How to get Loan for your Small
                                Business in Pakistan?
                            </h1>
                            <h6>
                                Pakistan is currently witnessing a great
                                momentum in entrepreneurship. The recent
                                boost in the startups and their blooming
                                journeys are evident that small businesses
                                are progressing well in the country. Considering
                                the fact that small businesses are the backbone
                                of any economy; several microfinance banks are
                                offering loans to small businesses in Pakistan.
                                Small business owners can apply for loans from a
                                variety of sources including banks and microfinance
                                institutions.
                            </h6>
                            <span>Read more</span>
                        </div>
                    </div>


                </div>
            </div>
    </>
  )
}

export default Feature