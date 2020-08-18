import React,{useState,useEffect,useContext} from 'react'
import { motion } from "framer-motion";
import Link from 'next/link'
import Slider from 'react-slick';


import SideBar from '../../components/sidebar/index'
import TabProject from '../../components/tabProject/index'
import Menu from '../../components/menuMobile/index'

const settings = {}

const Projects = () => {
    const [lang, setLang] = useState()

    useEffect(() => {
        setLang(window.location.href.split('/')[3])
    }, [])

    return (
        <div className="page_layout" >
            <SideBar activeMenu={{act:'active',menu:'project'}} langEn='project' langId='project'/>
            <Menu activeMenu={{act:'active',menu:'all'}} langEn='project' langId='project' thisproject="thisproject"/>
            <motion.div className="page_layout-main"  initial="initial" animate="animate" exit={{ opacity: 0 }}>
                <div className="page_project">
                    <h2>WE DON’T CREATE SPACES. MOREOVER, SPACES ARE NOT MADE. WE CONSTRUCT FLOOR, WALLS, AND CEILINGS, THROUGH DISCUSSION WITH ARCHITECTS, SUB-CON, SUPPLIERS, AND CLIENTS TO THE HIGHEST STANDARD ACHIEVEABLE.</h2>
                    <TabProject className="hide-mobile" activeMenu={{act:'active',menu:'all'}}/>
                    <div className="page_project_list">
                        <div>
                            <Link href={`/${lang}/project/[project]`} as={`/${lang}/project/pantai-mutiara`}>
                                <a>
                                    <img src="https://source.unsplash.com/random/476x700" height="700px"/>
                                    <div className="img-overlay-skew">
                                        <h4>PANTAI MUTIARA RESIDENTIAL</h4>
                                    </div>
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    <img src="https://source.unsplash.com/random/400x301" height="300px"/>
                                    <div className="img-overlay-skew">
                                        <h4>PANTAI MUTIARA RESIDENTIAL</h4>
                                    </div>
                                </a>
                            </Link>
                            <Link href="/"><a><img src="https://source.unsplash.com/random/400x302" height="400px"/>
                                <div className="img-overlay-skew">
                                    <h4>PANTAI MUTIARA RESIDENTIAL</h4>
                                </div>
                            </a></Link>
                            <Link href="/"><a><img src="https://source.unsplash.com/random/400x303" height="400px"/>
                                <div className="img-overlay-skew">
                                    <h4>PANTAI MUTIARA RESIDENTIAL</h4>
                                </div>
                            </a></Link>
                            <Link href="/"><a><img src="https://source.unsplash.com/random/400x319" height="200px"/>
                                <div className="img-overlay-skew">
                                    <h4>PANTAI MUTIARA RESIDENTIAL</h4>
                                </div>
                            </a></Link>
                        </div>
                        <div>
                            <Link href="/"><a><img src="https://source.unsplash.com/random/400x307" height="600px"/>
                                <div className="img-overlay-skew">
                                    <h4>PANTAI MUTIARA RESIDENTIAL</h4>
                                </div>
                            </a></Link>
                            <Link href="/"><a><img src="https://source.unsplash.com/random/400x308" height="300px"/>
                                <div className="img-overlay-skew">
                                    <h4>PANTAI MUTIARA RESIDENTIAL</h4>
                                </div>
                            </a></Link>
                            <Link href="/"><a><img src="https://source.unsplash.com/random/400x308" height="400px"/>
                                <div className="img-overlay-skew">
                                    <h4>PANTAI MUTIARA RESIDENTIAL</h4>
                                </div>
                            </a></Link>
                            <Link href="/"><a><img src="https://source.unsplash.com/random/400x310" height="700px"/>
                                <div className="img-overlay-skew">
                                    <h4>PANTAI MUTIARA RESIDENTIAL</h4>
                                </div>
                            </a></Link>
                        </div>
                    </div>
                </div>
                <Slider {...settings} ></Slider>
            </motion.div>
        </div>
    )
}

export default Projects
