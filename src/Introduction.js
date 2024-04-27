import React from 'react';
import "./Introduction.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaAngleDown } from "react-icons/fa6";

const Introduction = ({ menuIsActive }) => {
    return (
        <>
            <section className={`intro ${menuIsActive ? 'menu-active' : ''}`}>

                <div className="profile-pic">
                    <img src="/images/me.jpg" alt="" className='image1' />
                </div>

                <div className="intro-txt">
                    <h1>Front-End Developer</h1>
                    <p>Hi, I'm Saumya Deliwala. A passionate Front-end React Developer based in Ahmedabad, India. 📍</p>
                    <ul>
                        <li><a href="https://github.com/saumyadeliwala"><FaGithub /></a></li>
                        <li><a href="https://www.linkedin.com/in/saumya-deliwala/"><FaLinkedin /></a></li>
                    </ul>
                </div>

            </section>
        </>
    );
};

export default Introduction;
