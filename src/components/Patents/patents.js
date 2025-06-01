import React, { useState } from 'react';
import './patents.css';
import patentsArray from './patentsArray.js';

const patentPerRow = 2;

const Patents = () => {
    const [next, setNext] = useState(patentPerRow);

    const handleMorePatents = () => {
        setNext(next + patentPerRow);
    }

    return (
        <>
            <section id='patents'>
                <div className="headerTitle" aria-level="1" role="heading">Patents</div>
                <div className="h5 mb-4">67 patents applied, 22 patents granted to date</div>
                <div className="container">
                    <div className="row display-flex g-5">
                        {patentsArray.slice(0, next).map((patent, index) => {
                            return (
                                <div className="col-12" key={index}>
                                    <div className="patentCardLightBlue">
                                        <div className="h5">{patent.title}</div>
                                        <hr/>
                                        <div className="h6">{patent.patentId} &#9675; {patent.dateIssued}</div>
                                        <p className="patentDescr">{patent.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {next < patentsArray?.length && (
                        <button className="seeMoreBtn" onClick={handleMorePatents}>See More</button>
                    )}
                </div>
            </section>
        </>
    );
};

export default Patents;