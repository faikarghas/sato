import React,{useState,useEffect,useContext} from 'react'
import { motion } from "framer-motion";
import Link from 'next/link'
import Slider from 'react-slick';
import Head from 'next/head'


import SideBar from '../../../components/sidebar/index'
import TabProject from '../../../components/tabProject/index'
import Menu from '../../../components/menuMobile/index'
import GaWrapper from '../../../components/GA/index'


import {urlsato,urlapisato} from '../../../lib/url'
import {absoluteUrl} from '../../../lib/absoluteUrl'

const settings = {}

const Projects = ({data,data2,dataCatIn,urltest}) => {
    const [lang, setLang] = useState()

    useEffect(() => {
        setLang(window.location.href.split('/')[3])
    }, [])


    return (
        <GaWrapper>
        <Head>
            <title>SATO | Project</title>
            <meta name="description" content="We do not create space, yet floor, wall, and ceiling are. With us, they'll be fabricated through discussion and clear coordination at the highest standard achievable."/>
            <meta name="keywords" content="office interior contractor, office renovation, restaurant renovation, store renovation, mall renovation, modern office design, office furniture, store furniture, restaurant furniture, house renovation"/>
        </Head>
        <div className="page_layout" >
            <SideBar activeMenu={{act:'active',menu:'project'}} langEn='project' langId='project'/>
            <Menu data={data} activeMenu={{act:'active',menu:'all'}} langEn='project' langId='project' thisproject={true}/>
            <motion.div className="page_layout-main"  initial="initial" animate="animate" exit="exit">
                <div className="page_project">
                    <h2>{data2.projectTitle[0].description_en}</h2>
                    <TabProject className="hide-mobile" activeMenu={{act:'active',menu:'all'}} data={data} dataCatIn={dataCatIn}/>
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
        </GaWrapper>
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


    return { data: json.category, data2 : json2,urltest:origin, dataCatIn: json.category_in }
}


export default Projects
