import React from 'react'
import "./Project.css"
import { IoOpenOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";


const Project = ({ menuIsActive }) => {
    return (
        <section className={`project ${menuIsActive ? 'menu-active' : ''}`}>
            <div className="project-title">
                <h2>Some Project That I've Built <div></div> </h2>

                <div className='project-content'>

                    <div className="project-content-1">

                        <div className='content-1'>

                            <h1>Cryptocurrency Price Tracker</h1>
                            <p>Stay updated with real-time cryptocurrency prices through my intuitive tracker,
                                providing instant insights into market fluctuations, trends, all in one
                                convenient platform.
                            </p>
                            <p2>Reactjs CSS API
                                <p3>
                                    <a href=""><IoOpenOutline /></a>
                                    <a href=""><FiGithub /></a>
                                </p3>
                            </p2>

                        </div>

                        <img src="/crypto.png" />
                    </div>

                    <div className="project-content-2">

                        <div className='content-2'>

                            <h1>Excel Data Viewer & Upload </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p2>Reactjs CSS ROUTER
                                <p3>
                                    <a href=""><IoOpenOutline /></a>
                                    <a href=""><FiGithub /></a>
                                </p3>
                            </p2>

                        </div>

                        <img src="/file.png" />
                    </div>


                    <div className="project-content-3">

                        <div className='content-3'>

                            <h1>Shoes Selling E-commerce  </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p2>HTML5 CSS3
                                <p3>
                                    <a href=""><IoOpenOutline /></a>
                                    <a href=""><FiGithub /></a>
                                </p3>
                            </p2>

                        </div>

                        <img src="/luxe.png" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Project
