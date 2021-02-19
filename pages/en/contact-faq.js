import React from 'react'
import { AnimatePresence,motion } from "framer-motion";
import {Row,Col,Form,Button} from 'react-bootstrap'
import Slider from 'react-slick';
import Head from 'next/head'


import SideBar from '../../components/sidebar/index'
import Main from '../../components/layout/mainPageLayout'
import ContactForm from '../../components/form/index'
import Menu from '../../components/menuMobile/index'
import GaWrapper from '../../components/GA/index'

import {urlsato, urlapisato} from '../../lib/url'


const settings ={}

const Contact = ({data}) => {

    console.log(data.faq);
    return (
        <GaWrapper>
        <Head>
            <title>SATO | Contact FAQ</title>
            <meta name="description" content="Kindly fill your relevant email for us to follow up, feel free to drop your questions & messages."/>
            <meta name="keywords" content="contract. address, contact us"/>
        </Head>
        <div className="page_layout">
            <SideBar activeMenu={{act:'active',menu:'contact'}} langEn='contact-faq' langId='kontak-faq'/>
            <Menu langEn='contact-faq' langId='kontak-faq'/>
            <motion.div className="page_layout-main d-flex p-0" initial='initial' animate='animate' exit="exit">
                <div className="about-first page_about">
                    <div className='content_scroll'>
                        <div className="title-contact-wrapper">
                            <h2>CONTACT <span className="color_red">US</span></h2>
                            <p>DROP YOUR QUESTIONS & MESSAGES. KINDLY FILL YOUR RELEVANT EMAIL FOR US TO FOLLOW UP. LOOKING FORWARD!</p>
                        </div>
                        <ContactForm bgButton={'bg-redHover'} url={`${urlapisato}/api/insertContact`} />
                        <div className="vid-contact-wrapper">
                            <p>PLAN TO VISIT OUR OFFICE</p>
                            <div className="vid-contact-wrapper--iframe">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.6079853972034!2d106.75386272917659!3d-6.206616666475118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f73bca7e2351%3A0x64c3621683855c2c!2sJl.%20Perumahan%20Corn%20Kebun%20Jeruk%20Blok%20J-13%20No.9%2C%20RT.9%2FRW.5%2C%20Srengseng%2C%20Kec.%20Kembangan%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011630!5e0!3m2!1sen!2sid!4v1603182969035!5m2!1sen!2sid" width="100%" height="200" frameBorder="0" style={{border:'0'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
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
                                        <li className="mb-5"><p><span className="pr-3 color_red">Q:</span>{item.question_en}</p></li>
                                        <li><p><span className="pr-3 color_red">A:</span>{item.answer_en}</p></li>
                                    </ul>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Slider {...settings} ></Slider>
            </motion.div>
        </div>
        </GaWrapper>
    )
}

Contact.getInitialProps = async (ctx) => {
    const pageRequest = `https://api.sato.id/api/faq`
    const res = await fetch(pageRequest)
    const json = await res.json()

    return { data: json}
}


export default Contact
