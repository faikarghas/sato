import React,{useState,useRef,useEffect} from 'react'
import { AnimatePresence,motion } from "framer-motion";
import {Row,Col} from 'react-bootstrap'
import Slider from 'react-slick';
import parse from 'html-react-parser';

import {dataSlides} from '../../lib/data'

import SideBar from '../../components/sidebar/index'
import Main from '../../components/layout/mainPageLayout'
import Menu from '../../components/menuMobile/index'
import GaWrapper from '../../components/GA/index'


const Studies = ({data}) => {
    const [nextkasus, setNextkasus] = useState(1)
    const refSlider = useRef(null)

    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    beforeChange: (oldIndex,newIndex) => {

        if (newIndex === data.studies.length - 1) {
            setNextkasus(newIndex - 1)
        } else if(newIndex === 0){
            setNextkasus(newIndex + 1)
        } else {
            setNextkasus(newIndex + 1)
        }

        // if(oldIndex === 0 && newIndex === 2) {
        //     setNextkasus(0)
        // }
    }
};

    function _nextArrow(params) {
        refSlider.current.slickNext()
    }

    function _prevArrow(params) {
        refSlider.current.slickPrev()
    }

    useEffect(() => {
    }, [nextkasus])

    return (
        <GaWrapper>
        <div className="page_layout">
            <SideBar activeMenu={{act:'active',menu:'studies'}} langEn='studies' langId='studi'/>
            <Menu langEn='studies' langId='pembelajaran'/>
            <motion.div className="page_layout-main"  initial='initial' animate='animate' exit="exit">
                <div className="studies page_studies">
                    <Row className="no-gutters studies_head">
                        <Col xs={12} md={8}>
                            <h2>CASE STUDIES</h2>
                            <p>WE ARE HAPPY TO SHARE OUR EXPERIENCES AND KNOWLEDGE, NEW IDEAS, AND SOLUTIONS RELATED TO OUR EXPERTISE. </p>
                        </Col>
                    </Row>
                    <Slider {...settings} ref={refSlider}>
                        {data.studies.map((item,i)=>{
                            var currSlide = i
                            return(
                                <Row key={i} className="studies_sliderWrapper">
                                    <Col xs={12} md={8}>
                                        <div className="studies_img">
                                            <img src={`https://api.sato.id/images/${item.imageName}`} width="100%" />
                                            <ul className="btn-arrow">
                                                <li onClick={_prevArrow}><img className="arrow_next" src="/arrow.png" width="100%" /></li>
                                                <li onClick={_nextArrow}><img className="arrow_next" src="/arrow.png" width="100%" /></li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={4} className="forDesktop">
                                        {[data.studies[currSlide === data.studies.length - 1 ? 0 : nextkasus]].map((item,i)=>{
                                            return (
                                                <React.Fragment>
                                                    {/* <div data-next={nextkasus} className="img_next_wrapper" className={currSlide === data.studies.length - 1 ? "img_next_wrapper op":"img_next_wrapper"}> */}
                                                    <div data-next={nextkasus} className="img_next_wrapper" className="img_next_wrapper">
                                                        <img className="img_next_wrapper-img" src={`https://api.sato.id/images/${item.imageName}`} alt="studies-img" width="100%" height="190px" />
                                                    </div>
                                                    {/* <p className={currSlide === data.studies.length - 1 ? "img_next_wrapper-text op":"img_next_wrapper-text"}><span>NEXT :</span><br/>{item.title_en}</p> */}
                                                    <p className="img_next_wrapper-text"><span>NEXT :</span><br/>{item.title_en}</p>
                                                </React.Fragment>
                                            )
                                        })}
                                    </Col>
                                    <Col xs={12} md={8}>
                                        <div className="studies_desc mt-5">
                                            <h3>{`CASE STUDY: ${item.title_en}`}</h3>
                                            <div className="studies_desc--p">
                                            {parse(item.description_en)}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={4} className="forMobile">
                                        {[data.studies[nextkasus]].map((item,i)=>{
                                            return (
                                                <div className="img_next_wrapper" onClick={_nextArrow} key={i}>
                                                    <img className="img_next_wrapper-img" src={`https://api.sato.id/images/${item.imageName}`} alt="studies-img" width="100%" height="190px" />
                                                    <p className="img_next_wrapper-text"><span>NEXT :</span><br/>{item.title_en}</p>
                                                </div>
                                            )
                                        })}
                                    </Col>
                                </Row>
                            )
                        })}
                    </Slider>
                </div>
            </motion.div>
        </div>
        </GaWrapper>
    )
}

Studies.getInitialProps = async (ctx) => {
    const host = ctx.req ? ctx.req.headers['host'] : 'localhost:3013'
    const pageRequest = `https://api.sato.id/api/studies`
    const res = await fetch(pageRequest)
    const json = await res.json()


    return { data: json}
}

export default Studies




