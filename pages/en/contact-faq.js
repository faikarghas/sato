import React from 'react'
import { AnimatePresence,motion } from "framer-motion";
import {Row,Col,Form,Button} from 'react-bootstrap'
import Slider from 'react-slick';


import SideBar from '../../components/sidebar/index'
import Main from '../../components/layout/mainPageLayout'
import ContactForm from '../../components/form/index'
import Menu from '../../components/menuMobile/index'

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
                            <h2>CONTACT <span className="color_red">US</span></h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
                        </div>
                        <ContactForm bgButton={'bg-redHover'} url='https://api.sato.id/api/insertContact'/>
                        <div className="vid-contact-wrapper">
                            <p>PLAN TO VISIT OUR OFFICE</p>
                            <div className="vid-contact-wrapper--iframe">
                            <iframe src="httpss://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.09379435286!2d106.79978586977536!3d-6.22763339999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1495f1fddc9%3A0xfe3d872dbc2b760a!2sGoogle%20Indonesia!5e0!3m2!1sen!2sid!4v1596714735837!5m2!1sen!2sid" width="100%" height="200" frameBorder="0" style={{border:'0'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
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
    )
}

Contact.getInitialProps = async (ctx) => {
    const pageRequest = `https://api.sato.id/api/faq`
    const res = await fetch(pageRequest)
    const json = await res.json()

    return { data: json}
}


export default Contact
