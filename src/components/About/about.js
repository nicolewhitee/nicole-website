import React, { useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './about.css';
import ArtificialIntelligence from '../../assets/artificial-intelligence.png';
import DigitalTwinConsort from '../../assets/digital-twin-consort-logo.jpg';
import EdgeCompute from '../../assets/edge-computing.png';
import Telecommunications from '../../assets/telecommunication.png';
import SoftwareArchitecture from '../../assets/sw-arch.png';
import Dell from '../../assets/dell-logo.png';
import ElefanteGroup from '../../assets/elefante-logo.jpg';
import HP from '../../assets/hp-logo.png';

const About = () => {
    useEffect(() => {
        let revealText = document.querySelectorAll(".revealText");

        gsap.registerPlugin(ScrollTrigger);
        revealText.forEach((element) => {
            const lines = element.querySelectorAll(".text");

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    toggleActions: "play none none none",
                }
            });
            tl.set(revealText, { autoAlpha: 1 });
            tl.from(lines, 1, {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: Power3.in
            });
        });
    }, []);

    return (
        <section id='about'>
            <span className="headerTitle" aria-level="1" role="heading">About</span>
            <div className='container'>
                <div className="revealText">
                    <div class="m-2">
                        Results-driven software engineer with a strong foundation in 3D visualization
                        programming and software development principles. Completed my Master's degree
                        in Computer Science from the University of Central Florida with a focus in
                        visualization. Recently accepted into the competitive Engineering Leadership
                        Development Program at Lockheed Martin where I have completed technical development
                        curriculum and attended leadership development conferences, while taking on increasing
                        responsibility in my current role. Passionate about problem-solving, optimizing code
                        efficiency, and staying up to date with emerging technologies.
                    </div>
                </div>
            </div>

            <span className="headerTitle" aria-level="1" role="heading">Skills</span>
            <div className="container text-center">
                <div className="row display-flex gy-5 mx-0">
                    <div className="skill-col-expand">
                            <div className="skillCard">
                                <img src={ArtificialIntelligence} alt="Artificial Intelligence" className="skillBarImg" />
                                <div className="skillBarHeaderText">
                                    <div className="h2">Embedded Software</div>
                                </div>
                            </div>
                    </div>
                    <div className="skill-col-expand">
                            <div className="skillCard">
                                <img src={EdgeCompute} alt="Edge Compute" className="skillBarImg" />
                                <div className="skillBarHeaderText">
                                    <div className="h2">Modeling and Simulation</div>
                                </div>
                            </div>
                    </div>
                    <div className="skill-col-expand">
                            <div className="skillCard">
                                <img src={Telecommunications} alt="Telecommunications" className="skillBarImg" />
                                <div className="skillBarHeaderText">
                                    <div className="h2">UI/UX Development</div>
                                </div>
                            </div>
                    </div>
                    <div className="skill-col-expand">
                        <div className="skillCard">
                            <img src={SoftwareArchitecture} alt="Software Architecture" className="skillBarImg" />
                            <div className="skillBarHeaderText">
                                <div className="h2">Network Security</div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-col-expand">
                        <div className="skillCard">
                            <img src={SoftwareArchitecture} alt="Software Architecture" className="skillBarImg" />
                            <div className="skillBarHeaderText">
                                <div className="h2">Agile Development</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <span className="headerTitle" aria-level="1" role="heading">Experience</span>
            <div className="experienceBars">
                <div className="experienceBar mx-0">
                    <img src={Dell} alt="Dell Logo" className="experienceBarImg" />
                    <div>
                        <div className="h2">AI Factory and Edge Product Development Lead</div>
                        <div className="h3">Dell Technologies &#9675; Aug 2024 - Present</div>
                        <p>
                            Responsible for Dell AI Factory and Edge AI product strategy, technical direction,
                            product requirements and development. Support major business development initiatives.
                            Determine financial business case for AI Factory. Interface with key partners Nvidia,
                            AMD, Intel, Foundation Model developers and AI software ecosystem. Serve as Product
                            Owner for AI Factory in our agile development process.
                        </p>
                    </div>
                </div>
                <div className="experienceBar mx-0">
                    <img src={DigitalTwinConsort} alt="Digital Twin Consortium Logo" className="experienceBarImg" />
                    <div>
                        <div className="h2">Steering Committee Board Member</div>
                        <div className="h3">Digital Twin Consortium &#9675; Aug 2024 - Present</div>
                        <p>
                            Member of the Digital Twin Consortium Steering Committee Board representing Dell Technologies.
                        </p>
                    </div>
                </div>
                <div className="experienceBar mx-0">
                    <img src={Dell} alt="Dell Logo" className="experienceBarImg" />
                    <div>
                        <div className="h2">Chief Technology Officer - Edge Product & Operations</div>
                        <div className="h3">Dell Technologies &#9675; 2022 - Aug 2024</div>
                        <p>
                            Chief Technology Officer for Edge at Dell Technologies ISG CTO organization. Focus
                            on Edge platform design and application of Edge technology to current enterprise use
                            cases and emerging use cases of generative AI, simulation(XR/VR) and autonomous system
                            control. Structured Edge partner design program, Edge patent committee co-chair, member
                            of AI/ML Architecture Review Board. Technical focus areas in Distributed Systems Design
                            using Model Driven Agent-Based control, Edge Orchestration, Edge Infrastructure Control,
                            Scheduling Algorithm design, AI Discriminative/Generative ensemble and multimodal approaches
                            for AI/ML control, AI/ML workload support, MultiCloud Execution Environment, Edge Information-Data
                            Management, Edge Native Hardware evolution. Patents in distributed data management, Generative
                            and Discriminative AI/ML, MultiTier/MultiObjective scheduling orchestration algorithms,
                            cybersecurity and software defined edge. 14 Patents granted and 37 pending as of July 2024,
                            see below.
                        </p>
                    </div>
                </div>
                <div className="experienceBar mx-0">
                    <img src={Dell} alt="Dell Logo" className="experienceBarImg" />
                    <div>
                        <div className="h2">Industry Chief Technology Officer - Edge Technology and Autonomous Systems</div>
                        <div className="h3">Dell Technologies &#9675; 2018 - 2021</div>
                        <p>
                            Lead for edge technology development, composable systems technology strategy and
                            autonomous technical ecosystem development for the Global Office of CTO for Dell
                            Technologies. Areas of technology research include edge distributed systems management,
                            edge communications, platform as a service, autonomous systems, applied artificial
                            intelligence, distributed data management, hybrid multi-cloud architecture,
                            policy/control/orchestration. Lead an architecture and development team focused on
                            customer collaborative research. Chair the Dell Automotive Design Authority Council
                            providing technical leadership of Dell's automotive vertical. Vice-Chairman award
                            winner for 2020. Patents in the area of edge platform control, distributed data management,
                            cloud native application management, scheduling and autonomic control.
                        </p>
                    </div>
                </div>
                <div className="experienceBar mx-0">
                    <img src={ElefanteGroup} alt="Elefante Group Logo" className="experienceBarImg" />
                    <div>
                        <div class="h2">Chief Technology Officer</div>
                        <div class="h3">Elefante Group &#9675; 2017 - 2018</div>
                        <p>
                            Early stage venture focused on experimental stratospheric communications platform for Broadband
                            and 5G access. Directed technology strategy, spectrum acquisition, system planning and system
                            design in conjunction with tier 1 US defense contractor. Led technology discussions with prospective
                            investors, government regulators and partners.
                        </p>
                    </div>
                </div>
                <div className="experienceBar mx-0">
                    <img src={HP} alt="HP Logo" className="experienceBarImg" />
                    <div>
                        <div class="h2">Head of Communications Media & Entertainment Practice Americas</div>
                        <div class="h3">Hewlett Packard Enterprise &#9675; 2015 - 2017</div>
                        <p>
                            Lead HPE efforts in Communications segment in developing innovative solutions addressing transformation
                            to Cloud, SDN and IP based platforms and business models. Set strategy, Design Solutions and Develop
                            Business engagement. Significant engagements with clients in net new business areas.
                        </p>
                    </div>
                </div>
            </div>

            <span className="headerTitle text-center" aria-level="1" role="heading">Education</span>
            <div className="container text-center">
                <div className="awardsBar">
                    <div>
                        <div className="h2">Steering Committee Board Member</div>
                        <div className="h3">Digital Twin Consortium &#9675; Aug 2024 - Present</div>
                        <p>
                            Member of the Digital Twin Consortium Steering Committee Board representing
                            Dell Technologies
                        </p>
                    </div>
                </div>
                <div className="awardsBar">
                    <div>
                        <div className="h2">Chairman Board of Directors, Director</div>
                        <div className="h3">Tech Titans &#9675; Jan 2007 - 2014</div>
                        <p>
                            Chairman of Board of Directors (2012 - 2014) and Member of Board of Directors (2007 - 2014) of Technology
                            Association of Dallas Fort Worth focusing on Entrepreneurial Support, STEM, Legislative Advocacy, and
                            Technology Industry Development
                        </p>
                    </div>
                </div>
                <div className="awardsBar">
                    <div>
                        <div className="h2">Senior Member &#9675; IEEE</div>
                        <p>
                            Senior member (2024), recognized by Dallas section (2008), recognized for leadership in industry relations 
                            (2011), best presentation at Envision 2020 conference, keynote speaker at IEEE/ACM Symposium on Edge Computation
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;