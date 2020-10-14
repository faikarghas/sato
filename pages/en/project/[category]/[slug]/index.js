import React,{useState,useEffect} from 'react'
import { motion } from "framer-motion";
import Link from 'next/link'
import {Modal,Button} from 'react-bootstrap'

import SideBar from '../../../../../components/sidebar/index'
import InfoDetailM from '../../../../../components/infoProjectM/index'
import InfoDetail from '../../../../../components/infoProject/index'
import Menu from '../../../../../components/menuMobile/index'

import {absoluteUrl} from '../../../../../lib/absoluteUrl'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
            <img src={`https://api.sato.id/images/${props.imgModal}`} width="100%"/>
            <div className="hide-modal" onClick={props.onHide}><img src="/close-button.png" width="32px"/></div>
        </Modal.Body>
      </Modal>
    );
}

const Project = ({data}) => {
    const [show,setShow] = useState(false)
    const [lang, setLang] = useState()
    const [modalShow, setModalShow] = useState(false)
    const [imgModal, setImgModal] = useState('')


    function ShowInfo(params) {
        setShow(!show)
    }

    function ShowModal(params) {
        setModalShow(true)
        setImgModal(params)
    }

    useEffect(() => {
        setLang(window.location.href.split('/')[3])
    }, [])


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
                            <li><img src="/hidebt.png" className={`${show ? 'rotateImg': ''}`}/></li>
                        </ul>
                    </div>
                    <InfoDetailM data={data} show={show?'show':''}/>
                    <InfoDetail data={data} show={show?'show':''}/>
                    <div className="page_project-imgList">
                        {
                            data.listImg.map((item,i)=>{
                                return(
                                    <img onClick={() => ShowModal(item.name)} src={`https://api.sato.id/images/${item.name}`} width="100%" style={{cursor:'pointer'}}/>
                                )
                            })
                        }
                    </div>
                </div>
            </motion.div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                imgModal={imgModal}
            />
        </div>
    )
}

Project.getInitialProps = async (ctx) => {
    const { origin } = absoluteUrl(ctx.req, "localhost:3013");
    const slug = ctx.query.slug

    const pageRequest = `${origin}/api/projectDetail/${slug}`

    const res = await fetch(pageRequest)
    const json = await res.json()

    return {data: json}
}

export default Project
