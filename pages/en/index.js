import React,{useRef,useEffect,useState} from 'react'
import Head from 'next/head'
import Slider from 'react-slick';
import Link from 'next/link'
import { motion } from 'framer-motion';
import parser from 'html-react-parser'


const Index = ({data}) => {
    const refSlider = useRef(null)
    const [nextkasus, setNextkasus] = useState(0)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover:false,
        beforeChange: (oldIndex,newIndex) => {
            setNextkasus(newIndex)
        }
    };

    function to(key) {
        refSlider.current.slickGoTo(key)
    }

    useEffect(() => {
        console.log(nextkasus);
    }, [nextkasus])


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
                            <img src={`https://api.sato.id/images/${item.imageName}`} width="100%" height="100%" alt="bg sato"/>
                            <div className="sideSlider">
                                <img className="logo" src="/logo-sato.svg" alt="logo sato"/>
                                <div className="text">
                                    {parser(item.description_en)}
                                </div>
                            </div>
                            <Link href="/en/project/">
                                <a className="linkToGo linkan">
                                    <span class="linkan__arrow">
                                        <span></span>
                                        <span></span>
                                    </span>
                                    <span class="linkan__line"></span>
                                    <span class="linkan__text">Come Inside</span>
                                </a>
                            </Link>
                            <ul className="dots-slider">
                                {data.slider.map((item2,i2)=>{
                                    // if (i == i2) {
                                    //     return(
                                    //         <li key={i2} className="active" onClick={() => to(i2)}></li>
                                    //     )
                                    // } else {
                                        // console.log(setNextkasus);
                                        return(
                                            <li key={i2} className={`${nextkasus == i2 ? 'active' : ''}`} onClick={() => to(i2)}></li>
                                        )
                                    // }
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
    const pageRequest = `https://api.sato.id/api/slider`
    const res = await fetch(pageRequest)
    const json = await res.json()


    return { data: json }
}


export default Index
