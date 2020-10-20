import React from 'react'
import { AnimatePresence,motion } from "framer-motion";
import {Row,Col,Form,Button} from 'react-bootstrap'
import Slider from 'react-slick';


import SideBar from '../../components/sidebar/index'
import Main from '../../components/layout/mainPageLayout'
import ContactForm from '../../components/form/index'
import Menu from '../../components/menuMobile/index'

import {urlsato, urlapisato} from '../../lib/url'


const settings ={}

const Contact = ({data}) => {

    console.log(data.faq);
    return (
        <div className="page_layout">
            <SideBar activeMenu={{act:'active',menu:'contact'}} langEn='contact-faq' langId='kontak-faq'/>
            <Menu langEn='contact-faq' langId='kontak-faq'/>
            <motion.div className="page_layout-main d-flex p-0" initial='initial' animate='animate' exit="exit">
                <div className="about-first page_about">
                    <div className='content_scroll'>
                        <div className="title-contact-wrapper">
                            <h2>HUBUNGI <span className="color_red">KAMI</span></h2>
                            <p>AJUKAN PERTANYAAN ATAU KIRIM PESAN. SECEPATNYA, TIM KAMI AKAN SEGERA MENGHUBUNGI ANDA!</p>
                        </div>
                        <ContactForm bgButton={'bg-redHover'} url={`${urlapisato}/api/insertContact`}/>
                        <div className="vid-contact-wrapper">
                            <p>PLAN TO VISIT OUR OFFICE</p>
                            <div className="vid-contact-wrapper--iframe">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.726491505595!2d106.7544672!3d-6.206659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c663416a2114920!2sSASO%20-%20architecture%20studio!5e0!3m2!1sen!2sid!4v1602067757116!5m2!1sen!2sid" width="100%" height="200" frameBorder="0" style={{border:'0'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-second page_about">
                    <div className='content_scroll'>
                        <div className="title-contact-wrapper">
                            <h2>FAQ</h2>
                        </div>
                        <div className="faq-contact-wrapper">
                            {data.faq.map((item,i)=>{
                                return(
                                    <ul key={i}>
                                        <li className="mb-5"><p><span className="pr-3 color_red">Q:</span>{item.question_id}</p></li>
                                        <li><p><span className="pr-3 color_red">A:</span>{item.answer_id}</p></li>
                                    </ul>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Slider {...settings} ></Slider>
            </motion.div>
        </div>
    )
}

Contact.getInitialProps = async (ctx) => {
    const pageRequest = `https://api.sato.id/api/faq`
    const res = await fetch(pageRequest)
    const json = await res.json()

    return { data: json}
}


export default Contact
