import React,{useRef,useEffect} from 'react'
import Head from 'next/head'
import Slider from 'react-slick';
import Link from 'next/link'
import { motion } from 'framer-motion';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows:false
};
const Index = () => {
    const refSlider = useRef(null)

    function to(key) {
        refSlider.current.slickGoTo(key)
    }

    useEffect(() => {
        console.log(refSlider);
    }, [])


    return (
        <React.Fragment>
             <Head>
                <title>SATO</title>
            </Head>
            <motion.div initial='initial' animate='animate' exit="exit">
            <Slider {...settings} ref={refSlider}>
                <div className="fullImgSlider">
                    <img src="/sato-bg.jpg" width="100%" height="100%" alt="bg sato"/>
                    <img className="logo" src="/logo-sato.svg" alt="logo sato"/>
                    <h1 className="text">BUILDING <br/>WITHIN YOUR <br/>FRAME</h1>
                    <Link href="/en/project/">
                        <a><img className="linkToGo" src="/arrow.png"/></a>
                    </Link>
                    <ul className="dots-slider">
                        <li className="active" onClick={() => to(0)}></li>
                        <li onClick={() => to(1)}></li>
                        <li onClick={() => to(2)}></li>
                    </ul>
                </div>
                <div className="fullImgSlider">
                    <img src="https://source.unsplash.com/random/1476x1361" width="100%" height="100%" alt="bg sato"/>
                    <img className="logo" src="/logo-sato.svg" alt="logo sato"/>
                    <h1 className="text">BUILDING <br/>WITHIN YOUR <br/>FRAME</h1>
                    <Link href="/en/project/">
                        <a><img className="linkToGo" src="/arrow.png"/></a>
                    </Link>
                    <ul className="dots-slider">
                        <li onClick={() => to(0)}></li>
                        <li className="active" onClick={() => to(1)}></li>
                        <li onClick={() => to(2)}></li>
                    </ul>
                </div>
                <div className="fullImgSlider">
                    <img src="https://source.unsplash.com/random/1476x1362" width="100%" height="100%" alt="bg sato"/>
                    <img className="logo" src="/logo-sato.svg" alt="logo sato"/>
                    <h1 className="text">BUILDING <br/>WITHIN YOUR <br/>FRAME</h1>
                    <Link href="/en/project/">
                        <a><img className="linkToGo" src="/arrow.png"/></a>
                    </Link>
                    <ul className="dots-slider">
                        <li onClick={() => to(0)}></li>
                        <li onClick={() => to(1)}></li>
                        <li className="active" onClick={() => to(2)}></li>
                    </ul>
                </div>
            </Slider>
            </motion.div>
        </React.Fragment>
    )
}

export default Index
