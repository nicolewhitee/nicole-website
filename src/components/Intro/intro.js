import React, { useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './intro.css';
import bg from '../../assets/image.png';
gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
    useEffect(() => {
        const handleLoad = () => {
            let revealText = document.querySelectorAll(".revealText");

            gsap.registerPlugin(ScrollTrigger);
            revealText.forEach((element) => {
                const lines = element.querySelectorAll("div");

                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                    toggleActions: "play none none none",
                    }
                });
                tl.set(revealText, { autoAlpha: 1 });
                tl.from(lines, 1, {
                    y: 80,
                    stagger: 0.05,
                    opacity: 0,
                    duration: 1,
                    ease: Power3.out
                });
            });
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => {
                window.removeEventListener('load', handleLoad);
            };
        }
    }, []);

    return (
        <section id="intro">
            <div className="introContent">
                <div className="revealText">
                    <div className="introName" aria-level="1" role="heading">Jeff White</div>
                    <div className="titleText" aria-level="2" role="heading">AI Factory and AI Edge Product Lead</div>
                    <div className="titleText" aria-level="2" role="heading">at Dell Technologies</div>
                    <div className="introPara">Experienced technology executive with proven record of accomplishment</div>
                </div>
                <button className="yellowBtn" onClick={() => {
                    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                }}>Learn More</button>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;