import React from 'react';
import './projects.css';

const Projects = () => {
    return (
        <>
            <section id='projects'>
                <div className="headerTitle" aria-level="1" role="heading">Projects</div>
                <div className="container">
                    <div className="row display-flex g-5">
                        <div className="col-12">
                            <div className="patentCardLightBlue">
                                <div className="h5">Title</div>
                                <hr/>
                                <div className="h6">ID &#9675; Date Issued</div>
                                <p className="patentDescr">Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;