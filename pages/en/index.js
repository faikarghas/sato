import React,{useRef,useEffect} from 'react'
import Head from 'next/head'
import Slider from 'react-slick';
import Link from 'next/link'
import { motion } from 'framer-motion';
import parser from 'html-react-parser'

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows:false
};
const Index = ({data}) => {
    const refSlider = useRef(null)

    function to(key) {
        refSlider.current.slickGoTo(key)
    }

    useEffect(() => {
        console.log(data.data);
    }, [])


    return (
        <React.Fragment>
             <Head>
                <title>SATO</title>
            </Head>
            <motion.div initial='initial' animate='animate' exit='exit'>
            <Slider {...settings} ref={refSlider}>
                {data.slider.map((item,i)=>{
                    return (
                        <div key={i} className="fullImgSlider">
                            <img src={`http://api.sato.id/images/${item.imageName}`} width="100%" height="100%" alt="bg sato"/>
                            <img className="logo" src="/logo-sato.svg" alt="logo sato"/>
                            <div className="text">
                                {parser(item.description_en)}
                            </div>
                            <Link href="/en/project/">
                                <a><img className="linkToGo" src="/arrow.png"/></a>
                            </Link>
                            <ul className="dots-slider">
                                {data.slider.map((item2,i2)=>{
                                    if (i == i2) {
                                        return(
                                            <li key={i2} className="active" onClick={() => to(i2)}></li>
                                        )
                                    } else {
                                        return(
                                            <li key={i2} onClick={() => to(i2)}></li>
                                        )
                                    }
                                })}
                            </ul>
                        </div>
                    )
                })}
            </Slider>
            </motion.div>
        </React.Fragment>
    )
}

Index.getInitialProps = async (ctx) => {
    const host = ctx.req ? ctx.req.headers['host'] : 'localhost:3014'
    const pageRequest = `http://api.sato.id/api/slider`
    const res = await fetch(pageRequest)
    const json = await res.json()


    return { data: json }
}


export default Index
