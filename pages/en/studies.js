import React,{useState,useRef} from 'react'
import { AnimatePresence,motion } from "framer-motion";
import {Row,Col} from 'react-bootstrap'
import Slider from 'react-slick';

import {dataSlides} from '../../lib/data'

import SideBar from '../../components/sidebar/index'
import Main from '../../components/layout/mainPageLayout'
import Menu from '../../components/menuMobile/index'


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
};



const Studies = ({data}) => {
    const [kasus, setKasus] = useState("/studies1.jpg")
    const refSlider = useRef(null)

    function _nextArrow(params) {
        refSlider.current.slickNext()
    }

    function _prevArrow(params) {
        refSlider.current.slickPrev()
    }


    return (
        <div className="page_layout">
            <SideBar activeMenu={{act:'active',menu:'studies'}} langEn='studies' langId='pembelajaran'/>
            <Menu langEn='studies' langId='pembelajaran'/>
            <motion.div className="page_layout-main"  initial='initial' animate='animate' exit="exit">
                <div className="studies page_studies">
                    <Row>
                        <Col xs={12} md={8}>
                            <h2>CASE STUDIES</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                        </Col>
                        <Col xs={12} md={4}>
                            <img className="" src="/studies3.jpg" alt="studies-img" width="100%" height="190px" />
                        </Col>
                    </Row>
                    <Slider {...settings} ref={refSlider}>
                        {data.studies.map((item,i)=>{
                            return(
                                <Row className="studies_sliderWrapper">
                                    <Col xs={12} md={8}>
                                        <div className="studies_img mt-5">
                                            <img src={`https://api.sato.id/images/${item.imageName}`} width="100%" />
                                            <ul className="btn-arrow">
                                                <li onClick={_nextArrow}><img className="arrow_next" src="/arrow.png" width="100%" /></li>
                                                <li onClick={_prevArrow}><img className="arrow_next" src="/arrow.png" width="100%" /></li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <div className="studies_desc mt-5">
                                            <h3>{`CASE STUDY: ${item.title_en}`}</h3>
                                            <div className="studies_desc--p">
                                            <p>{item.description_en}</p>
                                            </div>
                                            <div>
                                                <p className="next_action" onClick={_nextArrow}>Next Case</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            )
                        })}
                    </Slider>
                </div>
            </motion.div>
        </div>
    )
}

Studies.getInitialProps = async (ctx) => {
    const host = ctx.req ? ctx.req.headers['host'] : 'localhost:3013'
    const pageRequest = `https://api.sato.id/api/studies`
    const res = await fetch(pageRequest)
    const json = await res.json()


    console.log(json);

    return { data: json}
}

export default Studies




