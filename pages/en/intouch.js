import React,{useRef,useState,useEffect} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import { AnimatePresence,motion } from "framer-motion";
import Slider from 'react-slick';
import Link from 'next/link'


import SideBar from '../../components/sidebar/index'
import Main from '../../components/layout/mainPageLayout'
import ContactForm from '../../components/form/index'

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows:false
};


const Intouch = () => {
    const refSlider = useRef(null)
    const [lang, setLang] = useState()

    useEffect(() => {
        setLang(window.location.href.split('/')[3])
    }, [])

    const [] = useState([
        {id:0},
        {id:1},
    ])

    function to(key) {
        refSlider.current.slickGoTo(key)
    }

    return (
        <div className="page_layout">
            <SideBar activeMenu={{act:'active',menu:'intouch'}} langEn='intouch' langId='intouch'/>
            <motion.div className="page_layout-main2"  initial='initial' animate='animate' exit="exit">
                <div className="intouch page_intouch">
                    <section className="section_slider">
                        <Slider {...settings} ref={refSlider}>
                            <Row>
                                <Col xs={12}>
                                    <div className="page_intouch-titleProject">
                                        <h2><span>LATEST PROJECT:</span></h2>
                                        <h2>COMPACT DESIGN <br/> FOR SMALL SPACE</h2>
                                    </div>
                                    <div className="page_intouch-imgProject">
                                        <img src="https://source.unsplash.com/random/1076x360" width="100%" height="360px"/>

                                        <ul className="actionSlides">
                                            <li className="active" onClick={()=>to(0)}></li>
                                            <li onClick={()=>to(1)}></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <div className="page_intouch-titleProject">
                                        <h2><span>LATEST PROJECT:</span></h2>
                                        <h2>TURN YOUR HOME <br/> INTO A RESORT</h2>
                                    </div>
                                    <div className="page_intouch-imgProject">
                                        <img src="https://source.unsplash.com/random/1076x361" width="100%" height="360px"/>

                                        <ul className="actionSlides">
                                            <li onClick={()=>to(0)}></li>
                                            <li className="active" onClick={()=>to(1)}></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Slider>
                    </section>
                    <section className="section_info">
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="page_intouch-desc">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="page_intouch-acc">
                                    <h4>Projects Accomplisment</h4>
                                    <ul>
                                        <li>
                                            <span className="box">12</span>
                                            RESEDENTIALS
                                        </li>
                                        <li>
                                            <span className="box">9</span>
                                            offices
                                        </li>
                                        <li>
                                            <span className="box">8</span>
                                            retails
                                        </li>
                                        <li>
                                            <span className="box">5</span>
                                            show units
                                        </li>
                                        <li>
                                            <span className="box">9</span>
                                            offices
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <section className="section_form bg_red">
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="page_intouch-form">
                                    <h3>AS SOON AS YOUR CONTACT IS IN OUR EXPERT TEAM, THIS WILL BE THE ONLY FORM YOU HAVE TO FILL IN !</h3>
                                    <ContactForm bgButton={'bg-blueHover'}/>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="page_intouch-img">
                                    <img src="/static/contact-img.png" width="100%" height="360px"/>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <section className="section_others">
                        <h2>OTHERS PROJECTS</h2>
                        <Row>
                            <Col xs={12} md={4}>
                                <div className="section_others-boxImg">
                                    <Link href="/">
                                        <a>
                                            <img src="https://source.unsplash.com/random/266x260" width="100%"/>
                                            <div className="img-overlay-skew">
                                                <h4>PANTAI MUTIARA RESIDENTIAL</h4>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="section_others-boxImg">
                                    <Link href="/">
                                        <a>
                                            <img src="https://source.unsplash.com/random/266x260" width="100%"/>
                                            <div className="img-overlay-skew">
                                                <h4>PANTAI MUTIARA RESIDENTIAL</h4>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="section_others-boxImg">
                                    <Link href="/">
                                        <a>
                                            <img src="https://source.unsplash.com/random/266x260" width="100%"/>
                                            <div className="img-overlay-skew">
                                                <h4>PANTAI MUTIARA RESIDENTIAL</h4>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="section_others-boxImg">
                                    <Link href="/">
                                        <a>
                                            <img src="https://source.unsplash.com/random/266x260" width="100%"/>
                                            <div className="img-overlay-skew">
                                                <h4>PANTAI MUTIARA RESIDENTIAL</h4>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="section_others-boxImg moreAbout">
                                    <Link href={`/${lang}/${lang ? 'about-sato':'tentang-sato'}`}>
                                        <a>MORE<br/>ABOUT<br/>SATO</a>
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="section_others-boxImg">
                                    <Link href="/">
                                        <a>
                                            <img src="https://source.unsplash.com/random/266x260" width="100%"/>
                                            <div className="img-overlay-skew">
                                                <h4>PANTAI MUTIARA RESIDENTIAL</h4>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="section_others-boxImg">
                                    <Link href="/">
                                        <a>
                                            <img src="https://source.unsplash.com/random/266x260" width="100%"/>
                                            <div className="img-overlay-skew">
                                                <h4>PANTAI MUTIARA RESIDENTIAL</h4>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="section_others-boxImg">
                                    <Link href="/">
                                        <a>
                                            <img src="https://source.unsplash.com/random/266x260" width="100%"/>
                                            <div className="img-overlay-skew">
                                                <h4>PANTAI MUTIARA RESIDENTIAL</h4>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="section_others-boxImg">
                                    <Link href="/">
                                        <a>
                                            <img src="https://source.unsplash.com/random/266x260" width="100%"/>
                                            <div className="img-overlay-skew">
                                                <h4>PANTAI MUTIARA RESIDENTIAL</h4>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </section>
                </div>
            </motion.div>
        </div>
    )
}

export default Intouch
