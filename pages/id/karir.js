import React,{useState} from 'react'
import { AnimatePresence,motion } from "framer-motion";
import {Row,Col} from 'react-bootstrap'
import Slider from 'react-slick';

import InfoDetail from '../../components/infoProject/index'
import SideBar from '../../components/sidebar/index'
import Main from '../../components/layout/mainPageLayout'
import TitleCareer from '../../components/career/title'
import Menu from '../../components/menuMobile/index'

const settings ={}

const Career = ({data}) => {
    const [show,setShow] = useState(false)

    function ShowInfo(params) {
        setShow(!show)
    }

    return (
        <div className="page_layout">
            <SideBar activeMenu={{act:'active',menu:'career'}} langEn='career' langId='karir'/>
            <Menu langEn='career' langId='karir'/>
            <motion.div className="page_layout-main"  initial='initial' animate='animate' exit="exit">
                <div className="career page_career">
                    <Row>
                        <Col xs={12} md={7}>
                            <h2>JOIN <span>SATO</span>, YOU'LL MAKE WORLD-CLASS WORK WITH A FRIENDLY & TALENTED TEAM.</h2>
                        </Col>
                    </Row>
                    <Row className="page_career-cw">
                        <Col xs={12} md={5}>
                            <div className="page_career-img">
                                <img src="/career-p.jpg" width="100%" />
                            </div>
                            <div className="page_career-contact">
                                <p>PLEASE SENT YOUR CV TO</p>
                                <h4>CARRER@SATO.ID</h4>
                                <p>PDF & WORD FILES ARE ACCEPTABLE <br/> MAX. SIZE 2MB.</p>
                            </div>
                        </Col>
                        <Col xs={12} md={7}>
                            <div className="page_career-info">
                                <h4>APPLY FOR</h4>
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
    )
}

Career.getInitialProps = async (ctx) => {
    const pageRequest = `https://api.sato.id/api/career`
    const res = await fetch(pageRequest)
    const json = await res.json()

    return { data: json.career}
}

export default Career

