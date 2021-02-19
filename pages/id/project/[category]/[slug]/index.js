import React,{useState,useEffect,useRef} from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import {Modal,Button} from 'react-bootstrap'
import Slider from 'react-slick';
import Head from 'next/head'

import SideBar from '../../../../../components/sidebar/index'
import InfoDetailM from '../../../../../components/infoProjectM/index'
import InfoDetail from '../../../../../components/infoProject/index'
import Menu from '../../../../../components/menuMobile/index'
import GaWrapper from '../../../../../components/GA/index'

import {absoluteUrl} from '../../../../../lib/absoluteUrl'

function MyVerticallyCenteredModal(props) {
    const refSlider = useRef(null)
    const [nextkasus, setNextkasus] = useState(0)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        initialSlide: props.activeSlide,
        slidesToScroll: 1,
        fade: true,
        arrows:true,
        autoplay: false,
        autoplaySpeed: 4500,
        pauseOnHover:false,
        beforeChange: (oldIndex,newIndex) => {
            setNextkasus(newIndex)
        }
    };

    function to(key) {
        refSlider.current.slickGoTo(key)
    }


    return (
        <React.Fragment>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modalProject"
                size="xl"
            >
                <Modal.Body>
                    <Slider {...settings} ref={refSlider}>
                        {props.imgModal.map((item,i)=>{
                            return <img key={i} className="imgProject" src={`https://api.sato.id/images/${item.name}`} width="100%" />
                        })}
                    </Slider>
                </Modal.Body>
                <div className="hide-modal" onClick={props.onHide}><img src="/close-button.png" width="32px"/></div>
            </Modal>
        </React.Fragment>
    );
}

const Project = ({data,slug,category}) => {
    const [show,setShow] = useState(false)
    const [lang, setLang] = useState()
    const [modalShow, setModalShow] = useState(false)
    const [imgModal, setImgModal] = useState('')
    const [imgIndex, setImgIndex] = useState()

    function ShowInfo(params) {
        setShow(!show)
    }

    function ShowModal(params,i) {
        setModalShow(true)
        setImgModal(params)
        setImgIndex(i)
    }

    useEffect(() => {
        setLang(window.location.href.split('/')[3])
    }, [])


    return (
        <GaWrapper>
        <Head>
            <title>SATO | Proyek</title>
            <meta name="description" content="Kami tidak membangun ruang melainkan dinding, lantai, dan plafon lah yang kita bangun melalui proses diskusi dan koordinasi yang baik demi terciptanya ruang dengan standard yang terbaik."/>
            <meta name="keywords" content="desain interior kantor, desain minimalis, desain interior resto, desain eksterior, desain interior kantor minimalis, desain interior minimalis, design interior mewah, design interior rumah, renovasi toko, desain eksterior rumah"/>
        </Head>
        <div className="page_layout">
            <SideBar activeMenu={{act:'active',menu:'project'}} langEn='project' langId='project' slug={slug} category={category} withSlug={true}/>
            <Menu langEn='project' langId='project' slug={slug} category={category} withSlug={true}/>
            <motion.div className="page_layout-main"  initial='initial' animate='animate' exit="exit">
                <div className="page_project">
                    <Link href={`/${lang}/project`} ><a className="back-to">Kembali</a></Link>
                    <div className="page_project-title">
                        <h3>{data.project[0].name}</h3>
                        <ul className="hidebt" onClick={ShowInfo}>
                            <li><p className="hidebt-text">{show? 'sembunyikan detail': 'lihat detail'}</p></li>
                            <li><img src="/hidebt.png" className={`${show ? 'rotateImg': ''}`}/></li>
                        </ul>
                    </div>
                    <InfoDetailM data={data} show={show?'show':''}/>
                    <InfoDetail data={data} show={show?'show':''}/>
                    <div className="page_project-imgList">
                        {
                            data.listImg.map((item,i)=>{
                                return(
                                    <img onClick={() => ShowModal(item.name,i)} src={`https://api.sato.id/images/${item.name}`} width="100%" style={{cursor:'pointer'}}/>
                                )
                            })
                        }
                    </div>
                </div>
            </motion.div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                imgModal={data.listImg}
                activeSlide={imgIndex}
            />
        </div>
        </GaWrapper>
    )
}

Project.getInitialProps = async (ctx) => {
    const { origin } = absoluteUrl(ctx.req, "localhost:3013");
    const slug = ctx.query.slug

    const pageRequest = `${origin}/api/projectDetail/${slug}`

    const res = await fetch(pageRequest)
    const json = await res.json()
    const category = json.project[0].category

    return {data: json,slug: slug,category: category}
}

export default Project
