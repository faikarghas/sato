import React,{useState,useEffect,useContext} from 'react'
import { motion } from "framer-motion";
import Link from 'next/link'
import Slider from 'react-slick';
import Router from 'next/router'


import SideBar from '../../../../components/sidebar/index'
import TabProject from '../../../../components/tabProject/index'
import Menu from '../../../../components/menuMobile/index'

const settings = {}

const Offices = ({data,slug,data2,data3}) => {
    const [lang, setLang] = useState()

    useEffect(() => {
        setLang(window.location.href.split('/')[3])
    }, [])

    return (
        <div className="page_layout">
            <SideBar activeMenu={{act:'active',menu:'project'}} langEn='project' langId='project'/>
            <Menu data={data} slug={slug} activeMenu={{act:'active',menu: data}} langEn='offices' langId='offices' thisproject="thisproject"/>
            <motion.div className="page_layout-main"  initial='initial' animate='animate' exit="exit">
                <div className="page_project">
                    <h2>{data3.projectTitle[0].description_en}</h2>
                    <TabProject className="hide-mobile" activeMenu={{act:'active',menu: data}} data={data} slug={slug}/>
                    <div className="page_project_list">
                        <div>
                        {
                            data2.dataCategory.slice(0,Math.floor(data.length/2)).map((res,item)=>{
                                return(
                                    <Link href={`/${lang}/project/[category]/[slug]`} as={`/${lang}/project/${res.category}/${res.slug}`}>
                                        <a>
                                            <img src={`http://api.sato.id/images/${res.thumbnail}`} />
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
                            data2.dataCategory.slice(Math.floor(data.length/2),data.length).map((res,item)=>{
                                return(
                                    <Link href={`/${lang}/project/[category]/[slug]`} as={`/${lang}/project/${res.category}/${res.slug}`}>
                                        <a>
                                            <img src={`http://api.sato.id/images/${res.thumbnail}`} />
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


Offices.getInitialProps = async (ctx) => {
    const pageRequest = `http://dev.sato.id/api/category`
    const category = ctx.query.category

    const res = await fetch(pageRequest)
    const json = await res.json()

    const pageRequest2 = `http://dev.sato.id/api/getCategory/${category}`
    const res2 = await fetch(pageRequest2)
    const json2 = await res2.json()


    const pageRequest3 = `http://dev.sato.id/api/projectTitle`
    const res3 = await fetch(pageRequest3)
    const json3 = await res3.json()

    let categoryArray = json.category.map((data)=>{

        let fileNameWithoutSpace = data.name.replace(/\s/g, '-').toLowerCase();

        return fileNameWithoutSpace
    })


    let rdct = categoryArray.includes(category)

    console.log(category);

    if (!rdct) {
        if(process.browser){
            Router.push('/')
            console.log('client');
        } else {
            ctx.res.redirect('/')
            console.log('server');
        }
    }

    return { data: json.category,slug:category, data2:json2,data3:json3 }
}


export default Offices
