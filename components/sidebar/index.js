import React,{useEffect} from 'react'
import Link from 'next/link'

import {Link as Links} from '../../routes'
import useTranslation from '../../hooks/useTranslation'



const Sidebar = ({activeMenu,langEn,langId,withSlug}) => {
    const { locale, t } = useTranslation()

    return (
        <aside className="menu_sidebar">
            <div className="menu_sidebar-content">
                <div className="menu_sidebar-content--top">
                    <Link href="/"><a><img className="logo" src="/static/logo-sato.svg" /></a></Link>
                    <ul className="link">
                        <li><Link href={`/[lang]/project`} as={`/${locale}/project`}><a className={activeMenu.act && activeMenu.menu === 'project' ? 'active' : ''}>PROJECT</a></Link></li>
                        <li><Link href={`/[lang]/about-sato`} as={`/${locale}/about-sato`}><a className={activeMenu.act && activeMenu.menu === 'about' ? 'active' : ''}>IDEA + PEOPLE</a></Link></li>
                        <li><Link href={`/[lang]/studies`} as={`/${locale}/studies`}><a className={activeMenu.act && activeMenu.menu === 'studies' ? 'active' : ''}>STUDIES</a></Link></li>
                        <li><Link href={`/[lang]/intouch`} as={`/${locale}/intouch`}><a className={activeMenu.act && activeMenu.menu === 'intouch' ? 'active' : ''}>INTOUCH</a></Link></li>
                        <li><Link href={`/[lang]/career`} as={`/${locale}/career`}><a className={activeMenu.act && activeMenu.menu === 'career' ? 'active' : ''}>CAREER</a></Link></li>
                        <li><Link href={`/[lang]/contact-faq`} as={`/${locale}/contact-faq`}><a className={activeMenu.act && activeMenu.menu === 'contact' ? 'active' : ''}>CONTACT + FAQ</a></Link></li>
                    </ul>
                </div>
                <div className="menu_sidebar-content--bottom">
                    <ul className="information">
                        <li className="mb-4"> <a className="color_wa logo-wrapper ">CHAT WITH US</a> </li>
                        <br/>
                        <li className="logo-wrapper"> <p className="color_white">FOR ANY ENQUIRIES,<br/>PLEASE CONTACT</p>
                        </li>
                        <br/>
                        <li><p className="color_lightGrey">SATO.ARCHITECTURE@GMAIL.COM</p></li>
                        <li><p className="color_lightGrey">T +62 882 1226 4250</p></li>
                        <br/>
                        <li><p className="color_lightGrey m-0">GRAHA SUNTER PRATAMA<br/>Jl. SELAT MADURA N/20-14,<br/>SUNTER AGUNG, TANJUNG PRIOK,<br/>14350, JAKARTA UTARA, INDONESIA</p></li>

                        <ul className="logo_info">
                            <div className="sosmed">
                                <li className="mb-4"><a><img src="/static/wa-sato.png" alt="logo wa"/></a></li>
                                <br/>
                                <li className="mb-2"><a><img src="/static/facebook.png" alt="logo sosmed"/></a></li>
                                <li className="mb-2"><a><img src="/static/instagram.png" alt="logo sosmed"/></a></li>
                                <li className="mb-2"><a><img src="/static/twitter.png" alt="logo sosmed"/></a></li>
                            </div>
                            {withSlug? 
                                <div className="lang">
                                    <li><Links route={langId} params={{project: 'pantai-mutiara'}}><a className={locale === 'id' ? 'active' : ''}>ID.</a></Links></li>
                                    <li><Links route={langEn} params={{project: 'pantai-mutiara'}}><a className={locale === 'en' ? 'active' : ''}>EN.</a></Links></li>
                                </div>
                                :
                                <div className="lang">
                                    <li><Links route={langId}><a className={locale === 'id' ? 'active' : ''}>ID.</a></Links></li>
                                    <li><Links route={langEn}><a className={locale === 'en' ? 'active' : ''}>EN.</a></Links></li>
                                </div>
                            }
                        </ul>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default  Sidebar
