import React,{useState} from 'react'
import { AnimatePresence,motion } from "framer-motion";
import {Row,Col} from 'react-bootstrap'
import Slider from 'react-slick';
import Head from 'next/head'

import InfoDetail from '../../components/infoProject/index'
import SideBar from '../../components/sidebar/index'
import Main from '../../components/layout/mainPageLayout'
import TitleCareer from '../../components/career/title'
import Menu from '../../components/menuMobile/index'
import GaWrapper from '../../components/GA/index'

const settings ={}

const Karir = ({data}) => {
    const [show,setShow] = useState(false)

    function ShowInfo(params) {
        setShow(!show)
    }

    return (
        <GaWrapper>
        <Head>
            <title>SATO | Karir</title>
            <meta name="description" content="Pekerjaan kelas dunia dengan tim yang berdedikasi, bersahabat, dan berbakat. Bergabunglah bersama kami."/>
            <meta name="keywords" content="karir, lowongan kerja, karir kontraktor, lowongan pekerjaan konstruksi"/>
        </Head>
        <div className="page_layout">
            <SideBar activeMenu={{act:'active',menu:'career'}} langEn='career' langId='karir'/>
            <Menu langEn='career' langId='karir'/>
            <motion.div className="page_layout-main"  initial='initial' animate='animate' exit="exit">
                <div className="career page_career">
                    <Row>
                        <Col xs={12} md={7}>
                            <h2>BERGABUNG  BERSAMA <span>SATO</span>, PEKERJAAN KELAS DUNIA DENGAN TIM YANG BERBAKAT DAN BERSAHABAT.</h2>
                        </Col>
                    </Row>
                    <Row className="page_career-cw">
                        <Col xs={12} md={5}>
                            <div className="page_career-img">
                                <img src="/career.jpg" width="100%" />
                            </div>
                            <div className="page_career-contact">
                                <p>KIRIM CV & PORTOFOLIO MU KE</p>
                                <h4>career.sato.id@gmail.com</h4>
                                <p>HANYA MENERIMA PDF DAN WORD <br/> MAKS. UKURAN 2 MB.</p>
                            </div>
                        </Col>
                        <Col xs={12} md={7}>
                            <div className="page_career-info">
                                <h4>LAMARAN UNTUK</h4>
                                {data.map((item,i)=>{
                                    return(
                                        <TitleCareer key={i} title={item.name} desc={item.description_id}/>
                                    )
                                })}
                            </div>
                        </Col>
                    </Row>
                </div>
                <Slider {...settings} ></Slider>
            </motion.div>
        </div>
        </GaWrapper>
    )
}

Karir.getInitialProps = async (ctx) => {
    const pageRequest = `https://api.sato.id/api/career`
    const res = await fetch(pageRequest)
    const json = await res.json()

    return { data: json.career}
}

export default Karir

