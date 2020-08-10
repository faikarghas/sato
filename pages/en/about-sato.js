import React from 'react'
import { AnimatePresence,motion } from "framer-motion";
import {Row,Col} from 'react-bootstrap'

import SideBar from '../../components/sidebar/index'
import Main from '../../components/layout/mainPageLayout'

const About = () => {

    return (
        <div className="page_layout">
            <SideBar activeMenu={{act:'active',menu:'about'}} langEn='about-sato' langId='tentang-sato'/>
            <motion.div className="page_layout-main d-flex p-0"  initial='initial' animate='animate' exit="exit">
                <div className="about-first page_about">
                    <div className='content_scroll'>
                        <div className="title-about-wrapper">
                            <h2>WHAT <span className="color_red">THEY</span> SAID ABOUT US</h2>
                        </div>
                        <div className="content-about-wrapper">
                            <h4>TESTIMONIALS FROM OUR CLIENTS</h4>
                            <Row noGutters={true}>
                                <Col xs={12} md={6} className="padding-rl">
                                    <div className="client-photo">
                                        <img src="https://source.unsplash.com/random/400x301"/>
                                    </div>
                                    <div className="client-name">
                                        <p>ALAM BAYONG</p>
                                        <p>CEO OF YOUNG&CO</p>
                                    </div>
                                    <div className="client-qt">
                                        <p>PRECISE & CORPORATIVE</p>
                                    </div>
                                    <div className="client-desc">
                                        <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT, SED DIAM NONUMMY NIBH EUISMOD TINCIDUNT UT LAOREET DOLORE MAGNA ALIQUAM ERAT VOLUTPAT. UT WISI ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCI TATION ULLAMCORPER SUSCIPIT LOBORTIS NISL UT ALIQUIP EX EA COMMODO CONSEQUAT.</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} className="padding-rl">
                                    <div className="client-photo">
                                        <img src="https://source.unsplash.com/random/400x301"/>
                                    </div>
                                    <div className="client-name">
                                        <p>ALAM BAYONG</p>
                                        <p>CEO OF YOUNG&CO</p>
                                    </div>
                                    <div className="client-qt">
                                        <p>PRECISE & CORPORATIVE</p>
                                    </div>
                                    <div className="client-desc">
                                        <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT, SED DIAM NONUMMY NIBH EUISMOD TINCIDUNT UT LAOREET DOLORE MAGNA ALIQUAM ERAT VOLUTPAT. UT WISI ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCI TATION ULLAMCORPER SUSCIPIT LOBORTIS NISL UT ALIQUIP EX EA COMMODO CONSEQUAT.</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} className="padding-rl">
                                    <div className="client-photo">
                                        <img src="https://source.unsplash.com/random/400x301"/>
                                    </div>
                                    <div className="client-name">
                                        <p>ALAM BAYONG</p>
                                        <p>CEO OF YOUNG&CO</p>
                                    </div>
                                    <div className="client-qt">
                                        <p>PRECISE & CORPORATIVE</p>
                                    </div>
                                    <div className="client-desc">
                                        <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT, SED DIAM NONUMMY NIBH EUISMOD TINCIDUNT UT LAOREET DOLORE MAGNA ALIQUAM ERAT VOLUTPAT. UT WISI ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCI TATION ULLAMCORPER SUSCIPIT LOBORTIS NISL UT ALIQUIP EX EA COMMODO CONSEQUAT.</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={6} className="padding-rl">
                                    <div className="client-photo">
                                        <img src="https://source.unsplash.com/random/400x301"/>
                                    </div>
                                    <div className="client-name">
                                        <p>ALAM BAYONG</p>
                                        <p>CEO OF YOUNG&CO</p>
                                    </div>
                                    <div className="client-qt">
                                        <p>PRECISE & CORPORATIVE</p>
                                    </div>
                                    <div className="client-desc">
                                        <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT, SED DIAM NONUMMY NIBH EUISMOD TINCIDUNT UT LAOREET DOLORE MAGNA ALIQUAM ERAT VOLUTPAT. UT WISI ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCI TATION ULLAMCORPER SUSCIPIT LOBORTIS NISL UT ALIQUIP EX EA COMMODO CONSEQUAT.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <h2>NOW IT’S TIME TO US TELL A BIT ABOUT OUR SELF</h2>
                        <h3 className="mb-5"><span className="color_red">WE ALWAYS PUT YOU INTO THE FRAME.</span> EVERYTHING WE DO IS ALL ABOUT OUR CLIENT. OUR GOAL IS TO BUILD AN EXCEPTIONAL  ARCHITECTURAL, INTERIOR AND CONSTRUCTION PROJECT. AS A FIRM, WE ARE COMMITTED TO AND STRIVE FOR CREATE A UNIQUE AND INNOVATIVE DESIGN SOLUTIONS THAT RESPOND TO EACH CLIENT'S AESTHETIC AND BUDGETARY NEEDS.</h3>
                        <p className="color_darkblue">RECOQNITIONS</p>
                        <p className="color_white">
                        LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT, SED DIAM NONUMMY NIBH EUISMOD TINCIDUNT UT LAOREET DOLORE MAGNA ALIQUAM ERAT VOLUTPAT. UT WISI ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCI TATION ULLAMCORPER SUSCIPIT LOBORTIS NISL UT ALIQUIP EX EA COMMODO CONSEQUAT.

                        LOREM IPSUM DOLOR SIT AMET, CONS ECTETUER ADIPISCING ELIT, SED DIAM NONUMMY NIBH EUISMOD TINCIDUNT UT LAOREET DOLORE MAGNA ALIQUAM ERAT VOLUTPAT. UT WISI ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCI TATION ULLAMCORPER SUSCIPIT LOBORTIS NISL UT ALIQUIP EX EA COMMODO CONSEQUAT.
                        </p>
                    </div>
                </div>
                <div className="about-second page_about">
                    <div className="content_scroll">
                        <div className="title-about-wrapper">
                            <h2>OUR<br/><span className="color_red">A</span> TEAM</h2>
                        </div>
                        <div className="content-about-wrapper">
                            <h4>GET TO KNOW OUR A TEAM</h4>
                            <img className="mb-4" src="https://source.unsplash.com/random/400x301" width="100%"/>
                            <ol className="mb-5">
                                <li>
                                    <span style={{width:'100px'}}>
                                        <p className="color_white">1. DANIEL</p>
                                    </span>
                                    <p className="color_lightGrey">PROJECT LEADER</p>
                                </li>
                                <li>
                                    <span style={{width:'100px'}}>
                                        <p className="color_white">2. FREJA</p>
                                    </span>
                                    <p className="color_lightGrey">LEAD MECHANIC ENGINEER</p>
                                </li>
                            </ol>
                            <p className="color_white">
                            LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT, SED DIAM NONUMMY NIBH EUISMOD TINCIDUNT UT LAOREET DOLORE MAGNA ALIQUAM ERAT VOLUTPAT. UT WISI ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCI TATION ULLAMCORPER SUSCIPIT LOBORTIS NISL UT ALIQUIP EX EA COMMODO CONSEQUAT.
                            </p>
                            <p className="color_white">
                            LOREM IPSUM DOLOR SIT AMET, CONS ECTETUER ADIPISCING ELIT, SED DIAM NONUMMY NIBH EUISMOD TINCIDUNT UT LAOREET DOLORE MAGNA ALIQUAM ERAT VOLUTPAT. UT WISI ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCI TATION ULLAMCORPER SUSCIPIT LOBORTIS NISL UT ALIQUIP EX EA COMMODO CONSEQUAT.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default About
