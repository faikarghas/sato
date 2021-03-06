import React,{useState,useEffect,useContext} from 'react'
import { motion } from "framer-motion";
import Link from 'next/link'
import Slider from 'react-slick';
import Router from 'next/router'
import Head from 'next/head'


import SideBar from '../../../../components/sidebar/index'
import TabProject from '../../../../components/tabProject/index'
import Menu from '../../../../components/menuMobile/index'
import GaWrapper from '../../../../components/GA/index'

import {absoluteUrl} from '../../../../lib/absoluteUrl'


const settings = {}

const Offices = ({data,slug,data2,data3,dataCatIn}) => {
    const [lang, setLang] = useState()
    const [dvdVal1, setDvdval1] = useState(2)



    useEffect(() => {
        setLang(window.location.href.split('/')[3])

        console.log('fire');

        if (data2.dataCategory.length === 1) {
            setDvdval1(1)
        } else {
            setDvdval1(2)
        }

    }, [data2])

    return (
        <GaWrapper>
        <Head>
            <title>SATO | Project</title>
            <meta name="description" content="We do not create space, yet floor, wall, and ceiling are. With us, they'll be fabricated through discussion and clear coordination at the highest standard achievable."/>
            <meta name="keywords" content="office interior contractor, office renovation, restaurant renovation, store renovation, mall renovation, modern office design, office furniture, store furniture, restaurant furniture, house renovation"/>
        </Head>
        <div className="page_layout">
            <SideBar activeMenu={{act:'active',menu:'project'}} langEn='project' langId='project'/>
            <Menu data={data} slug={slug} activeMenu={{act:'active',menu: data}} langEn='offices' langId='offices' thisproject="thisproject"/>
            <motion.div className="page_layout-main"  initial='initial' animate='animate' exit="exit">
                <div className="page_project">
                    <h2 className="forDesktop">{data3.projectTitle[0].description_en}</h2>
                    <TabProject className="hide-mobile" activeMenu={{act:'active',menu: data}} data={data} dataCatIn={dataCatIn} slug={slug}/>
                    <div className="page_project_list">
                        <div>
                        {
                            data2.dataCategory.slice(0,Math.floor(data2.dataCategory.length / dvdVal1)).map((res,i)=>{
                                return(
                                    <Link key={i} href={`/${lang}/project/[category]/[slug]`} as={`/${lang}/project/${res.category}/${res.slug}`}>
                                        <a>
                                            <img src={`https://api.sato.id/images/${res.thumbnail}`} />
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
                            data2.dataCategory.slice(Math.floor(data2.dataCategory.length/2),data2.dataCategory.length === 1 ? 0 : data2.dataCategory.length).map((res,i)=>{
                                return(
                                    <Link key={i} href={`/${lang}/project/[category]/[slug]`} as={`/${lang}/project/${res.category}/${res.slug}`}>
                                        <a>
                                            <img src={`https://api.sato.id/images/${res.thumbnail}`} />
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


Offices.getInitialProps = async (ctx) => {
    const { origin } = absoluteUrl(ctx.req, "localhost:3013");

    const category = ctx.query.category

    const pageRequest = `${origin}/api/category`
    const res = await fetch(pageRequest)
    const json = await res.json()

    const pageRequest2 = `${origin}/api/getCategory/${category}`
    const res2 = await fetch(pageRequest2)
    const json2 = await res2.json()


    const pageRequest3 = `${origin}/api/projectTitle`
    const res3 = await fetch(pageRequest3)
    const json3 = await res3.json()

    let categoryArray = json.category.map((data)=>{

        let fileNameWithoutSpace = data.name.replace(/\s/g, '-').toLowerCase();

        return fileNameWithoutSpace
    })


    let rdct = categoryArray.includes(category)

    if (!rdct) {
        if(process.browser){
            Router.push('/')
        } else {
            ctx.res.redirect('/')
        }
    }

    return { data: json.category,slug:category, data2:json2,data3:json3,dataCatIn :json.category_in }
}


export default Offices
