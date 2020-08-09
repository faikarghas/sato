import React,{useState} from 'react'
import withLocale from '../../hocs/withLocale'
import { AnimatePresence,motion } from "framer-motion";
import {Row,Col} from 'react-bootstrap'
import InfoDetail from '../../components/infoProject/index'


import SideBar from '../../components/sidebar/index'
import Main from '../../components/layout/mainPageLayout'
import TitleCareer from '../../components/career/title'

const Career = () => {
    const [show,setShow] = useState(false)

    function ShowInfo(params) {
        setShow(!show)
    }

    return (
        <div className="page_layout">
            <SideBar activeMenu={{act:'active',menu:'career'}} langEn='career' langId='karir'/>
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
                                <img src="/static/career-p.jpg" width="100%" />
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
                                <TitleCareer />
                                <TitleCareer />
                                <TitleCareer />
                            </div>
                        </Col>
                    </Row>
                </div>
            </motion.div>
        </div>
    )
}

export default withLocale(Career)
