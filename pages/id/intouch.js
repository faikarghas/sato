import React,{useRef,useState,useEffect} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import { AnimatePresence,motion } from "framer-motion";
import Slider from 'react-slick';
import Link from 'next/link'


import SideBar from '../../components/sidebar/index'
import Main from '../../components/layout/mainPageLayout'
import ContactForm from '../../components/form/index'
import Menu from '../../components/menuMobile/index'

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
            <Menu langEn='intouch' langId='intouch'/>
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
                                            <Link href={`/${lang}/resedentials`}><a><span className="box">12</span></a></Link>
                                            <Link href={`/${lang}/resedentials`}><a>RESEDENTIALS</a></Link>
                                        </li>
                                        <li>
                                            <Link href={`/${lang}/offices`}><a><span className="box">9</span></a></Link>
                                            <Link href={`/${lang}/offices`}><a>offices</a></Link>
                                        </li>
                                        <li>
                                            <Link href={`/${lang}/retails`}><a><span className="box">8</span></a></Link>
                                            <Link href={`/${lang}/retails`}><a>retails</a></Link>
                                        </li>
                                        <li>
                                            <Link href={`/${lang}/show-units`}><a><span className="box">5</span></a></Link>
                                            <Link href={`/${lang}/show-units`}><a>show units</a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <section className="section_form bg_red" id="form">
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
                                            <img src="https://source.unsplash.com/random/266x261" width="100%"/>
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
                                            <img src="https://source.unsplash.com/random/266x262" width="100%"/>
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
                                            <img src="https://source.unsplash.com/random/266x263" width="100%"/>
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
                                            <img src="https://source.unsplash.com/random/266x264" width="100%"/>
                                            <div className="img-overlay-skew">
                                                <h4>PANTAI MUTIARA RESIDENTIAL</h4>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="section_others-boxImg moreAbout">
                                    <Link href={`/${lang}/${lang === 'en'? 'about-sato':'tentang-sato'}`}>
                                        <a>MORE<br/>ABOUT<br/>SATO</a>
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="section_others-boxImg">
                                    <Link href="/">
                                        <a>
                                            <img src="https://source.unsplash.com/random/266x265" width="100%"/>
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
                                            <img src="https://source.unsplash.com/random/266x266" width="100%"/>
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
                                            <img src="https://source.unsplash.com/random/266x267" width="100%"/>
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
                                            <img src="https://source.unsplash.com/random/266x268" width="100%"/>
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
                <div className="freequote">
                    <a  href="#form">GET A FREE QUOTE</a>
                </div>
            </motion.div>
        </div>
    )
}

export default Intouch
