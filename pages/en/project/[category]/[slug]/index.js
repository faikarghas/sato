import React,{useState,useEffect} from 'react'
import { motion } from "framer-motion";
import Link from 'next/link'

import SideBar from '../../../../../components/sidebar/index'
import InfoDetailM from '../../../../../components/infoProjectM/index'
import InfoDetail from '../../../../../components/infoProject/index'
import Menu from '../../../../../components/menuMobile/index'

const Project = ({data}) => {
    const [show,setShow] = useState(false)
    const [lang, setLang] = useState()

    function ShowInfo(params) {
        setShow(!show)
    }

    useEffect(() => {
        setLang(window.location.href.split('/')[3])
    }, [])

    console.log(data.listImg);

    return (
        <div className="page_layout">
            <SideBar activeMenu={{act:'active',menu:'project'}} langEn='project' langId='project' slug="pantai-mutiara" withSlug={true}/>
            <Menu langEn='project' langId='project' slug="pantai-mutiara" withSlug={true}/>
            <motion.div className="page_layout-main"  initial='initial' animate='animate' exit="exit">
                <div className="page_project">
                    <Link href={`/${lang}/project`} ><a className="back-to">Back to previous page</a></Link>
                    <div className="page_project-title">
                        <h3>{data.project[0].name}</h3>
                        <ul className="hidebt" onClick={ShowInfo}>
                            <li><p className="hidebt-text">{show? 'hide detail': 'show detail'}</p></li>
                            <li><img src="/hidebt.png"/></li>
                        </ul>
                    </div>
                    <InfoDetailM data={data} show={show?'show':''}/>
                    <InfoDetail data={data} show={show?'show':''}/>
                    <div className="page_project-imgList">
                        {
                            data.listImg.map((item,i)=>{
                                return(
                                    <img src={`http://localhost:3009/images/${item.name}`} width="100%"/>
                                )
                            })
                        }
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

Project.getInitialProps = async (ctx) => {
    const host = ctx.req ? ctx.req.headers['host'] : 'dev.sato.id'
    const slug = ctx.query.slug
    const pageRequest = `http://dev.sato.id/api/projectDetail/${slug}`

    const res = await fetch(pageRequest)
    const json = await res.json()

    return {data: json}
}

export default Project
