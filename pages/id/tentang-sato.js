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
                        <p>{item.title_id}</p>
                    </div>
                    <div className="client-desc">
                        <p>{item.description_id}</p>
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
                    <span style={{width:'140px'}}>
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
                            <h2>APA <span className="color_red">YANG KITA</span> DENGAR TENTANG KAMI</h2>
                        </div>
                        <div className="content-about-wrapper">
                            <h4>KESAN DARI KLIEN KAMI</h4>
                            <Row noGutters={true}>
                                {listTestimonials}
                            </Row>
                        </div>
                        <h3>KAMI BERUSAHA UNTUK MENCIPTAKAN SESUATU YANG UNIK DAN SOLUSI INOVATIF, UNTUK MERESPON KEBUTUHAN DAN ANGGARAN KLIEN YANG BERAGAM</h3>
                    </div>
                    <img className="scrollIndicator" src="/arrow.png" />
                </div>
                <div className="about-second page_about">
                    <div className="content_scroll">
                        <div className="title-about-wrapper">
                            <h2>TIM<br/><span className="color_red">INTI</span> KAMI</h2>
                        </div>
                        <div className="content-about-wrapper">
                            <h4>KENALI TIM KAMI</h4>
                            <img className="mb-4" src="/crew_sato.jpg" width="100%"/>
                            {/* <ol className="mb-5">
                                {listOurTeam}
                            </ol> */}
                            <p className="color_white">
                            SATO didirikan oleh tim yang sangat berdidikasi penuh pada tahun 2017 lalu. Kami menyediakan partner dan tim untuk bisnis, retail commercial, dan beberapa konstruksi interior untuk tempat tinggal. Berlokasi di Jakarta, akan tetapi kami juga bekerja di banyak kota lain. Cerita kami masih akan terus berlanjut. Project kami termasuk tempat tinggal, kantor, show units, dan masih banyak lagi seiring bertambahnya klien. 
                            </p>
                            <br/>
                            <br/>
                            <h3><span>MITRA</span> STUDIO <br/> ARSITEK SASO</h3>
                            <a href="https://www.sasoarchitects.com" target="_blank"><img className="logoSaso" src="/saso-logo.png" alt="saso" /></a>
                            {parse(data3[0].content_id)}
                            <br/>
                            <br/>
                            <p><span>PLEASE VISIT US FOR MORE INFORMATION</span></p>
                            <a href="https://www.sasoarchitects.com" target="_blank">www.sasoarchitects.com</a>
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
    const pageRequest1 = `https://api.sato.id/api/testimonials`
    const res1 = await fetch(pageRequest1)
    const json1 = await res1.json()

    const pageRequest2 = `https://api.sato.id/api/our_team`
    const res2 = await fetch(pageRequest2)
    const json2 = await res2.json()

    const pageRequest3 = `https://api.sato.id/api/partnership`
    const res3 = await fetch(pageRequest3)
    const json3 = await res3.json()

    console.log(json3);

    return { data: json1.testimonials, data2: json2.our_team, data3: json3.partnership}
}

export default About
