import React,{useState,useEffect,useContext} from 'react'
import { motion } from "framer-motion";
import Link from 'next/link'
import Slider from 'react-slick';


import SideBar from '../../../components/sidebar/index'
import TabProject from '../../../components/tabProject/index'
import Menu from '../../../components/menuMobile/index'


import {urlsato,urlapisato} from '../../../lib/url'
import {absoluteUrl} from '../../../lib/absoluteUrl'

const settings = {}

const Projects = ({data,data2,urltest}) => {
    const [lang, setLang] = useState()

    useEffect(() => {
        setLang(window.location.href.split('/')[3])
        console.log(data2.project.slice(0,Math.floor(data2.project.length/2)));
        console.log(data2.project);
    }, [])


    return (
        <div className="page_layout" >
            <SideBar activeMenu={{act:'active',menu:'project'}} langEn='project' langId='project'/>
            <Menu data={data} activeMenu={{act:'active',menu:'all'}} langEn='project' langId='project' thisproject={true}/>
            <motion.div className="page_layout-main"  initial="initial" animate="animate" exit="exit">
                <div className="page_project">
                    <h2>{data2.projectTitle[0].description_en}</h2>
                    <TabProject className="hide-mobile" activeMenu={{act:'active',menu:'all'}} data={data}/>
                    <div className="page_project_list">
                    <div>
                        {
                            data2.project.slice(0,Math.floor(data2.project.length/2)).map((res,i)=>{
                                return(
                                        <Link key={i} href={`/${lang}/project/[category]/[slug]`} as={`/${lang}/project/${res.category}/${res.slug}`}>
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
                            data2.project.slice(Math.floor(data2.project.length/2),data2.project.length).map((res,i)=>{
                                return(
                                        <Link key={i} href={`/${lang}/project/[category]/[slug]`} as={`/${lang}/project/${res.category}/${res.slug}`}>
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
    const { origin } = absoluteUrl(ctx.req, "localhost:3013");

    const pageRequest = `${origin}/api/category`
    const res = await fetch(pageRequest)
    const json = await res.json()

    const pageRequest2 = `${origin}/api/project`
    const res2 = await fetch(pageRequest2)
    const json2 = await res2.json()


    return { data: json.category, data2 : json2,urltest:origin }
}


export default Projects
