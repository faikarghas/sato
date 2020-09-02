import React,{useState,useEffect,useContext} from 'react'
import { motion } from "framer-motion";
import Link from 'next/link'
import Slider from 'react-slick';


import SideBar from '../../../components/sidebar/index'
import TabProject from '../../../components/tabProject/index'
import Menu from '../../../components/menuMobile/index'

import {urlsato,urlapisato} from '../../../lib/url'

const settings = {}

const Projects = ({data,data2}) => {
    const [lang, setLang] = useState()

    useEffect(() => {
        setLang(window.location.href.split('/')[3])
        console.log(data2.projectTitle);
    }, [])

    return (
        <div className="page_layout" >
            <SideBar activeMenu={{act:'active',menu:'project'}} langEn='project' langId='project'/>
            <Menu data={data} activeMenu={{act:'active',menu:'all'}} langEn='project' langId='project' thisproject="thisproject"/>
            <motion.div className="page_layout-main"  initial="initial" animate="animate" exit="exit">
                <div className="page_project">
                    <h2>{data2.projectTitle[0].description_en}</h2>
                    <TabProject className="hide-mobile" activeMenu={{act:'active',menu:'all'}} data={data}/>
                    <div className="page_project_list">
                    <div>
                        {
                            data2.project.slice(0,Math.floor(data.length/2)).map((res,item)=>{
                                return(
                                        <Link href={`/${lang}/project/[category]/[slug]`} as={`/${lang}/project/${res.category}/${res.slug}`}>
                                            <a>
                                                <img src={`${urlapisato}/images/${res.thumbnail}`} />
                                                <div className="img-overlay-skew">
                                                    <h4>{res.name}</h4>
                                                </div>
                                            </a>
                                        </Link>
                                )
                            })

                        }
                        </div>
                        <div>
                        {
                            data2.project.slice(Math.floor(data.length/2),data.length).map((res,item)=>{
                                return(
                                        <Link href={`/${lang}/project/[category]/[slug]`} as={`/${lang}/project/${res.category}/${res.slug}`}>
                                            <a>
                                                <img src={`${urlapisato}/images/${res.thumbnail}`} />
                                                <div className="img-overlay-skew">
                                                    <h4>{res.name}</h4>
                                                </div>
                                            </a>
                                        </Link>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
                <Slider {...settings} ></Slider>
            </motion.div>
        </div>
    )
}

Projects.getInitialProps = async (ctx) => {
    const pageRequest = `http://localhost:3013/api/category`
    const res = await fetch(pageRequest)
    const json = await res.json()

    const pageRequest2 = `http://localhost:3013/api/project`
    const res2 = await fetch(pageRequest2)
    const json2 = await res2.json()


    return { data: json.category, data2 : json2 }
}


export default Projects
