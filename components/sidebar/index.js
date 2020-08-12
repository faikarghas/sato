import React,{useEffect,useState,useContext} from 'react'
import {Context} from '../../hocs/store'
import Link from 'next/link'


const Sidebar = ({activeMenu,langEn,langId,withSlug,slug}) => {
    const [lang, setLang] = useState()
    const [state, dispatch] = useContext(Context);


    useEffect(() => {
        setLang(window.location.href.split('/')[3])
    }, [])

    return (
        <React.Fragment>
            <aside className={`menu_sidebar`}>
                <div className="menu_sidebar-content">
                    <div className="menu_sidebar-content--top">
                        <Link href="/"><a><img className="logo" src="/static/logo-sato.svg" /></a></Link>
                        <ul className="link">
                            <li><Link href={`/${lang}/${lang === 'en'?'project':'project'}`}><a className={activeMenu.act && activeMenu.menu === 'project' ? 'active' : ''}>PROJECT</a></Link></li>
                            <li><Link href={`/${lang}/${lang === 'en'?'about-sato':'tentang-sato'}`}><a className={activeMenu.act && activeMenu.menu === 'about' ? 'active' : ''}>IDEA + PEOPLE</a></Link></li>
                            <li><Link href={`/${lang}/${lang === 'en'?'studies':'pembelajaran'}`}><a className={activeMenu.act && activeMenu.menu === 'studies' ? 'active' : ''}>STUDIES</a></Link></li>
                            <li><Link href={`/${lang}/${lang === 'en'?'intouch':'intouch'}`}><a className={activeMenu.act && activeMenu.menu === 'intouch' ? 'active' : ''}>INTOUCH</a></Link></li>
                            <li><Link href={`/${lang}/${lang === 'en'?'career':'karir'}`}><a className={activeMenu.act && activeMenu.menu === 'career' ? 'active' : ''}>CAREER</a></Link></li>
                            <li><Link href={`/${lang}/${lang === 'en'?'contact-faq':'kontak-faq'}`}><a className={activeMenu.act && activeMenu.menu === 'contact' ? 'active' : ''}>CONTACT + FAQ</a></Link></li>
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
                                        <li><Link href={`/${lang === 'en' ? 'id' : 'en'}/project/[project]`} as={`/id/project/${slug}`}><a className={lang === 'id' ? 'active' : ''}>ID.</a></Link></li>
                                        <li><Link href={`/${lang === 'id' ? 'en' : 'id'}/project/[project]`} as={`/en/project/${slug}`}><a className={lang === 'en' ? 'active' : ''}>EN.</a></Link></li>
                                    </div>
                                    :
                                    <div className="lang">
                                        <li><Link href={`/${lang === 'en' ? 'id' : 'id'}/${langId}`}><a className={lang === 'id' ? 'active' : ''}>ID.</a></Link></li>
                                        <li><Link href={`/${lang === 'id' ? 'en' : 'en'}/${langEn}`}><a className={lang === 'en' ? 'active' : ''}>EN.</a></Link></li>
                                    </div>
                                }
                            </ul>
                        </ul>
                    </div>
                </div>
            </aside>
            <aside className={`menu_sidebar_M ${state.menu}`}>
                <div className="menu_sidebar_M-content">
                    <div className="menu_sidebar_M-content--top">
                        <Link href="/"><a><img className="logo" src="/static/logo-sato.svg" /></a></Link>
                        <ul className="link">
                            <li><Link href={`/${lang}/${lang === 'en'?'project':'project'}`}><a className={activeMenu.act && activeMenu.menu === 'project' ? 'active' : ''}>PROJECT</a></Link></li>
                            <li><Link href={`/${lang}/${lang === 'en'?'about-sato':'tentang-sato'}`}><a className={activeMenu.act && activeMenu.menu === 'about' ? 'active' : ''}>IDEA + PEOPLE</a></Link></li>
                            <li><Link href={`/${lang}/${lang === 'en'?'studies':'pembelajaran'}`}><a className={activeMenu.act && activeMenu.menu === 'studies' ? 'active' : ''}>STUDIES</a></Link></li>
                            <li><Link href={`/${lang}/${lang === 'en'?'intouch':'intouch'}`}><a className={activeMenu.act && activeMenu.menu === 'intouch' ? 'active' : ''}>INTOUCH</a></Link></li>
                            <li><Link href={`/${lang}/${lang === 'en'?'career':'karir'}`}><a className={activeMenu.act && activeMenu.menu === 'career' ? 'active' : ''}>CAREER</a></Link></li>
                            <li><Link href={`/${lang}/${lang === 'en'?'contact-faq':'kontak-faq'}`}><a className={activeMenu.act && activeMenu.menu === 'contact' ? 'active' : ''}>CONTACT + FAQ</a></Link></li>
                        </ul>
                    </div>
                    <div className="menu_sidebar_M-content--bottom">
                        <ul className="information">
                            <li className="logo-wrapper"> <p className="color_white">FOR ANY ENQUIRIES,<br/>PLEASE CONTACT</p>
                            </li>
                            <br/>
                            <li><p className="color_lightGrey">SATO.ARCHITECTURE@GMAIL.COM</p></li>
                            <li><p className="color_lightGrey">T +62 882 1226 4250</p></li>
                            <br/>
                            <li><p className="color_lightGrey m-0">GRAHA SUNTER PRATAMA<br/>Jl. SELAT MADURA N/20-14,<br/>SUNTER AGUNG, TANJUNG PRIOK,<br/>14350, JAKARTA UTARA, INDONESIA</p></li>

                            <ul className="logo_info">
                                {/* <div className="sosmed">
                                    <li className="mb-4"><a><img src="/static/wa-sato.png" alt="logo wa"/></a></li>
                                    <br/>
                                    <li className="mb-2"><a><img src="/static/facebook.png" alt="logo sosmed"/></a></li>
                                    <li className="mb-2"><a><img src="/static/instagram.png" alt="logo sosmed"/></a></li>
                                    <li className="mb-2"><a><img src="/static/twitter.png" alt="logo sosmed"/></a></li>
                                </div> */}
                                {/* {withSlug?
                                    <div className="lang">
                                        <li><Link href={`/${lang === 'en' ? 'id' : 'en'}/project/[project]`} as={`/id/project/${slug}`}><a className={lang === 'id' ? 'active' : ''}>ID.</a></Link></li>
                                        <li><Link href={`/${lang === 'id' ? 'en' : 'id'}/project/[project]`} as={`/en/project/${slug}`}><a className={lang === 'en' ? 'active' : ''}>EN.</a></Link></li>
                                    </div>
                                    :
                                    <div className="lang">
                                        <li><Link href={`/${lang === 'en' ? 'id' : 'id'}/${langId}`}><a className={lang === 'id' ? 'active' : ''}>ID.</a></Link></li>
                                        <li><Link href={`/${lang === 'id' ? 'en' : 'en'}/${langEn}`}><a className={lang === 'en' ? 'active' : ''}>EN.</a></Link></li>
                                    </div>
                                } */}
                            </ul>
                        </ul>
                    </div>
                </div>
            </aside>
        </React.Fragment>
    )
}

export default  Sidebar
