import React,{useRef,useState,useEffect} from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import { AnimatePresence,motion } from "framer-motion";
import Slider from 'react-slick';
import Link from 'next/link'
import parse from 'html-react-parser';

import SideBar from '../../components/sidebar/index'
import Main from '../../components/layout/mainPageLayout'
import ContactForm from '../../components/form/index'
import Menu from '../../components/menuMobile/index'

import {urlsato, urlapisato} from '../../lib/url'


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows:false
};


const Intouch = ({data1,data2,data3,data4,data5}) => {
    const refSlider = useRef(null)
    const [lang, setLang] = useState()
    const [] = useState([
        {id:0},
        {id:1},
    ])

    function to(key) {
        refSlider.current.slickGoTo(key)
    }

    function scrollToTargetAdjusted(){
        var element = document.getElementById('form');
        var headerOffset = window.innerWidth > 1024 ? 0 : 150;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition - headerOffset;

        if (window.innerWidth > 1024 ) {
            document.getElementById("scroll").scrollTo({
                top: offsetPosition,
                behavior: "smooth"
           });
        } else {
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
           });
        }
    }

    useEffect(() => {
        console.log(data2.project);
        setLang(window.location.href.split('/')[3])
    }, [])

    return (
        <div className="page_layout">
            <SideBar activeMenu={{act:'active',menu:'intouch'}} langEn='intouch' langId='intouch'/>
            <Menu langEn='intouch' langId='intouch'/>
            <motion.div className="page_layout-main2"  initial='initial' animate='animate' exit="exit">
                <div className="intouch page_intouch" id="scroll">
                    <section className="section_slider">
                        <Slider {...settings} ref={refSlider}>
                            {data5.intouch.map((item,i)=>{
                                return (
                                    <Row key={i}>
                                        <Col xs={12}>
                                            <div className="page_intouch-titleProject">
                                                <h2><span>LATEST PROJECT:</span></h2>
                                                <h2>{item.name}</h2>
                                            </div>
                                            <div className="page_intouch-imgProject">
                                                <img className="forDesktop" src={`${urlapisato}/images/intouch/desktop/${item.images}`} width="100%" height="360px"/>
                                                <img className="forMobile" src={`${urlapisato}/images/intouch/mobile/${item.imageMobile}`} width="100%" height="360px"/>

                                                <ul className="actionSlides">
                                                    {data5.intouch.map((item2,i2)=>{
                                                        if (i == i2) {
                                                            return(
                                                                <li className="active" onClick={()=>to(i2)} key={i2}></li>
                                                            )
                                                        } else {
                                                            return(
                                                                <li onClick={()=>to(i2)} key={i2}></li>
                                                            )
                                                        }

                                                    })}
                                                </ul>

                                            </div>
                                        </Col>
                                    </Row>
                                )
                            })}
                        </Slider>
                    </section>
                    <section className="section_info">
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="page_intouch-desc">
                                    {parse(data1.intouch[0].content)}
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="page_intouch-acc">
                                    <h4>Projects Accomplisment</h4>
                                    <ul>
                                        {data3.projectAccom.map((item,i)=>{
                                            return(
                                                <li key={i}>
                                                    <Link href={`/${lang}/resedentials`}><a><span className="box">{item.total}</span></a></Link>
                                                    <Link href={`/${lang}/resedentials`}><a>{item.category}</a></Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <section className="section_form bg_red" id="form">
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="page_intouch-form">
                                    <h3>FILL OUT THE FORM BELOW AND FEEL FREE TO CONTACT US!</h3>
                                    <ContactForm bgButton={'bg-blueHover'} url={`${urlapisato}/api/insertContactPromo`}/>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="page_intouch-img">
                                    <img src="/contact-img.png" width="100%" height="360px"/>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <section className="section_others">
                        <h2>OTHER PROJECTS</h2>
                        <Row>
                            {data4.map((item,i)=>{
                                if (i === 4) {
                                    return (
                                        <Col xs={12} md={4} key={i}>
                                            <div className="section_others-boxImg moreAbout">
                                                <Link href={`/${lang}/${lang === 'en'? 'idea-people':'ide-tim'}`}>
                                                    <a>MORE<br/>ABOUT<br/>SATO</a>
                                                </Link>
                                            </div>
                                        </Col>
                                    )
                                } else {
                                    return(
                                        <Col xs={12} md={4} key={i}>
                                            <div className="section_others-boxImg">
                                                <Link href={`/${lang}/project/[category]/[slug]`} as={`/${lang}/project/${item.category}/${item.slug}`}>
                                                    <a>
                                                        <img src={`${urlapisato}/images/${item.thumbnail}`} width="100%" height="100%"/>
                                                        <div className="img-overlay-skew">
                                                            <h4>{item.name}</h4>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </div>
                                        </Col>
                                    )
                                }
                            })}
                        </Row>
                    </section>
                </div>
                <div className="freequote">
                    <a  onClick={scrollToTargetAdjusted}>
                        GET A FREE QUOTE
                    </a>
                </div>
            </motion.div>
        </div>
    )
}

Intouch.getInitialProps = async (ctx) => {
    const pageRequest = `https://api.sato.id/api/intouch`
    const res = await fetch(pageRequest)
    const json = await res.json()

    const pageRequest2 = `https://api.sato.id/api/latestProject`
    const res2 = await fetch(pageRequest2)
    const json2 = await res2.json()

    const pageRequest3 = `https://api.sato.id/api/projectAccom`
    const res3 = await fetch(pageRequest3)
    const json3 = await res3.json()

    const pageRequest4 = `https://api.sato.id/api/getOtherProjects`
    const res4 = await fetch(pageRequest4)
    const json4 = await res4.json()

    const pageRequest5 = `https://api.sato.id/api/project`
    const res5 = await fetch(pageRequest5)
    const json5 = await res5.json()

    const pageRequest6 = `https://api.sato.id/api/intouchSlider`
    const res6 = await fetch(pageRequest6)
    const json6 = await res6.json()

    let l = json4.other_projects[0].listproject.split(',').map(Number)

    let p = json5.project.filter((item,i)=>{
        return l.includes(item.idProject)
    })

    Array.prototype.insert = function ( index, item ) {
        this.splice( index, 0, item );
    };

    p.insert(4, {"name": "about sato"});


    return { data1: json,data2: json2,data3: json3,data4: p,data5: json6}
}

export default Intouch
