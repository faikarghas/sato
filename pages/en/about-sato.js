import React from 'react'
import { AnimatePresence,motion } from "framer-motion";
import {Row,Col} from 'react-bootstrap'
import Slider from 'react-slick';
import parse from 'html-react-parser';

import SideBar from '../../components/sidebar/index'
import Main from '../../components/layout/mainPageLayout'
import Menu from '../../components/menuMobile/index'

import {urlapisato} from '../../lib/url'

const settings = {

};

const About = ({data,data2,data3}) => {

    let listTestimonials

    if (data) {
        listTestimonials = data.map((item,i)=>{
            return (
                <Col xs={12} md={6} className="padding-rl" key={i}>
                    <div className="client-photo">
                        <img src={`${urlapisato}/images/${item.imageName}`}/>
                    </div>
                    <div className="client-name">
                        <p>{item.name}</p>
                        <p>{item.jobTitle}</p>
                    </div>
                    <div className="client-qt">
                        <p>{item.title_en}</p>
                    </div>
                    <div className="client-desc">
                        <p>{item.description_en}</p>
                    </div>
                </Col>
            )
        })
    }

    let listOurTeam

    if (data2) {
        listOurTeam = data2.map((item,i)=>{
            return (
                <li>
                    <span style={{width:'100px'}}>
                        <p className="color_white">{item.name}</p>
                    </span>
                    <p className="color_lightGrey">{item.jobTitle}</p>
                </li>
            )
        })
    }

    console.log(data3);

    return (
        <div className="page_layout">
            <SideBar activeMenu={{act:'active',menu:'about'}} langEn='about-sato' langId='tentang-sato'/>
            <Menu langEn='about-sato' langId='tentang-sato'/>
            <motion.div className="page_layout-main d-flex p-0"  initial='initial' animate='animate' exit="exit">
                <div className="about-first page_about">
                    <div className='content_scroll'>
                        <div className="title-about-wrapper">
                            <h2>WHAT <span className="color_red">THEY</span> SAID ABOUT US</h2>
                        </div>
                        <div className="content-about-wrapper">
                            <h4>TESTIMONIALS FROM OUR CLIENTS</h4>
                            <Row noGutters={true}>
                                {listTestimonials}
                            </Row>
                        </div>
                        {/* <h2>NOW IT’S TIME TO US TELL A BIT ABOUT OUR SELF</h2> */}
                        {/* <h3 className="mb-5"><span className="color_red">WE ALWAYS PUT YOU INTO THE FRAME.</span> EVERYTHING WE DO IS ALL ABOUT OUR CLIENT. OUR GOAL IS TO BUILD AN EXCEPTIONAL  ARCHITECTURAL, INTERIOR AND CONSTRUCTION PROJECT. AS A FIRM, WE ARE COMMITTED TO AND STRIVE FOR CREATE A UNIQUE AND INNOVATIVE DESIGN SOLUTIONS THAT RESPOND TO EACH CLIENT'S AESTHETIC AND BUDGETARY NEEDS.</h3> */}
                        <h3>WE STRIVE TO CREATE UNIQUE AND INNOVATIVE SOLUTIONS, AS OUR RESPOND TO CLIENT'S DISTINCTIVE NEEDS AND BUDGETS</h3>
                        {/* <p className="color_darkblue">RECOQNITIONS :</p>
                        <Row className="award-img">
                            <Col xs={4}><img src="/award.png" width="100%" alt="award"/></Col>
                            <Col xs={4}><img src="/award2.png" width="100%" alt="award"/></Col>
                            <Col xs={4}><img src="/award3.png" width="100%" alt="award"/></Col>
                        </Row>
                        <p className="color_white">
                        LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT, SED DIAM NONUMMY NIBH EUISMOD TINCIDUNT UT LAOREET DOLORE MAGNA ALIQUAM ERAT VOLUTPAT. UT WISI ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCI TATION ULLAMCORPER SUSCIPIT LOBORTIS NISL UT ALIQUIP EX EA COMMODO CONSEQUAT.

                        LOREM IPSUM DOLOR SIT AMET, CONS ECTETUER ADIPISCING ELIT, SED DIAM NONUMMY NIBH EUISMOD TINCIDUNT UT LAOREET DOLORE MAGNA ALIQUAM ERAT VOLUTPAT. UT WISI ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCI TATION ULLAMCORPER SUSCIPIT LOBORTIS NISL UT ALIQUIP EX EA COMMODO CONSEQUAT.
                        </p> */}
                    </div>
                    <img className="scrollIndicator" src="/arrow.png" />
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
                                {listOurTeam}
                            </ol>
                            <p className="color_white">
                            LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT, SED DIAM NONUMMY NIBH EUISMOD TINCIDUNT UT LAOREET DOLORE MAGNA ALIQUAM ERAT VOLUTPAT. UT WISI ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCI TATION ULLAMCORPER SUSCIPIT LOBORTIS NISL UT ALIQUIP EX EA COMMODO CONSEQUAT.
                            </p>
                            <p className="color_white">
                            LOREM IPSUM DOLOR SIT AMET, CONS ECTETUER ADIPISCING ELIT, SED DIAM NONUMMY NIBH EUISMOD TINCIDUNT UT LAOREET DOLORE MAGNA ALIQUAM ERAT VOLUTPAT. UT WISI ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCI TATION ULLAMCORPER SUSCIPIT LOBORTIS NISL UT ALIQUIP EX EA COMMODO CONSEQUAT.
                            </p>
                            <br/>
                            <br/>
                            <h3>IN <span>PARTNERSHIP</span> <br/>WITH SASO ARCHITECTURE</h3>
                            <a href="http://www.sasoarchitects.com" target="_blank"><img className="logoSaso" src="/saso-logo.png" alt="saso" /></a>
                            {parse(data3[0].content)}
                            <br/>
                            <br/>
                            <p><span>PLEASE VISIT US FOR MORE INFORMATION</span></p>
                            <a href="http://www.sasoarchitects.com" target="_blank">www.sasoarchitects.com</a>
                        </div>
                    </div>
                    <img className="scrollIndicator" src="/arrow.png" />
                </div>
                <Slider {...settings} ></Slider>
            </motion.div>
        </div>
    )
}

About.getInitialProps = async (ctx) => {
    const pageRequest1 = `http://api.sato.id/api/testimonials`
    const res1 = await fetch(pageRequest1)
    const json1 = await res1.json()

    const pageRequest2 = `http://api.sato.id/api/our_team`
    const res2 = await fetch(pageRequest2)
    const json2 = await res2.json()

    const pageRequest3 = `http://api.sato.id/api/partnership`
    const res3 = await fetch(pageRequest3)
    const json3 = await res3.json()

    console.log(json3);

    return { data: json1.testimonials, data2: json2.our_team, data3: json3.partnership}
}

export default About
