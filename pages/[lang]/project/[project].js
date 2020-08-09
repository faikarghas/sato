import React,{useState} from 'react'
import { motion } from "framer-motion";
import Link from 'next/link'

import useTranslation from '../../../hooks/useTranslation'
import withLocale from '../../../hocs/withLocale'

import SideBar from '../../../components/sidebar/index'
import InfoDetailM from '../../../components/infoProjectM/index'
import InfoDetail from '../../../components/infoProject/index'

const Project = () => {
    const [show,setShow] = useState(false)
    const { locale, t } = useTranslation()

    function ShowInfo(params) {
        setShow(!show)
    }


    return (
        <div className="page_layout">
            <SideBar activeMenu={{act:'active',menu:'project'}} langEn='project_detail_en' langId='project_detail_id' withSlug={true}/>
            <motion.div className="page_layout-main"  initial='initial' animate='animate' exit="exit">
                <div className="page_project">
                    <Link href="/[lang]/project" as={`/${locale}/project`}><a className="back-to">Back to previous page</a></Link>
                    <div className="page_project-title">
                        <h3>PANTAI MUTIARA RESIDENCE</h3>
                        <ul className="hidebt" onClick={ShowInfo}>
                            <li><p className="hidebt-text">{show? 'hide detail': 'show detail'}</p></li>
                            <li><img src="/static/hidebt.png"/></li>
                        </ul>
                    </div>
                    <InfoDetailM show={show?'show':''}/>
                    <InfoDetail show={show?'show':''}/>
                    <div className="page_project-imgList">
                        <img src="https://source.unsplash.com/random/400x301" width="100%"/>
                        <img src="https://source.unsplash.com/random/400x302" width="100%"/>
                        <img src="https://source.unsplash.com/random/400x303" width="100%"/>
                        <img src="https://source.unsplash.com/random/400x304" width="100%"/>
                        <img src="https://source.unsplash.com/random/400x305" width="100%"/>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default withLocale(Project)
