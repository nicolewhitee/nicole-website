import React from 'react';
import './certifications.css';

const Certifications = () => {
    return (
        <>
            <section id='certifications'>
                <div className="headerTitle" aria-level="1" role="heading">Certifications</div>
                <div className="container">
                    <div className="row d-flex g-5">
                        <div className="presentation-col-expand">
                            <div className="presentationCard d-flex flex-column">
                                <div className="h4">Title</div>
                                <div className="h6">Location &#9675; Date</div>
                                <hr />
                                <div className="h5 mb-auto">Title</div>
                                <a href="google.com" target="_blank" rel="noreferrer" aria-label="Presentation Link">
                                    <button className="presentationBtn">Link</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Certifications;