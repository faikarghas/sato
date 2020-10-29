import React,{useEffect,useState,useContext} from 'react'
import {Context} from '../../hocs/store'
import Link from 'next/link'
import {Modal,Button} from 'react-bootstrap'
import Loading from '../loading'
import Router from 'next/router'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        show={props.show}
        onHide={() => props.onHide(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
            <div className="modal-wa">
                <div className="modal-wa-header">
                    <img src="/wa-sato2.png"  alt="logo wa"/>
                    <h4>ENTER YOUR WHATSAPP NUMBER</h4>
                </div>
                <form onSubmit={props.onSubmit}>
                    <input onChange={props.onChange} type="number" name="phone"/>
                    <Button type="submit" disabled={props.loading} >
                        {props.loading ? <Loading/> : 'CHAT NOW'}
                    </Button>
                </form>
            </div>
        </Modal.Body>
      </Modal>
    );
}

function MyVerticallyCenteredModal2(props) {
    const [inputValues, setInputValues] = useState({ search: '' });
    const [lang, setLang] = useState()

    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const searchEnter=(e)=>{
        if(e.key === 'Enter'){
            Router.push(`/${lang}/search/[search]`,`/${lang}/search/${inputValues.search}`)
        }
    }

    const searchButton=()=>{
        Router.push(`/${lang}/search/[search]`,`/${lang}/search/${inputValues.search}`)
    }

    useEffect(() => {
        setLang(window.location.href.split('/')[3])
    }, [])


    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
            <div className="modal-wa">
                <div className="modal-wa-header">
                    <h4>SEARCH ANY KEYWORD</h4>
                </div>
                <input type="text" name="search" onChange={handleOnChange} onKeyPress={searchEnter}/>
                <Button onClick={searchButton}>
                    SUBMIT
                </Button>
            </div>
        </Modal.Body>
      </Modal>
    );
}


const Sidebar = ({activeMenu,langEn,langId,withSlug,slug,category}) => {
    const [lang, setLang] = useState()
    const [state, dispatch] = useContext(Context);
    const [modalShow, setModalShow] = useState(false)
    const [modalShow2, setModalShow2] = useState(false)
    const [inputValues, setInputValues] = useState({ phone: '' });
    const [loading, setLoading] = useState(false);

    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    function onSubmit(e) {
        e.preventDefault()
        setLoading(true)
        let data = {
            phone: inputValues.phone
        }
        fetch('https://api.sato.id/api/insertWhatsapp',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((dataRes) => {
            window.open("https://api.whatsapp.com/send/?phone=6281315192239&text&app_absent=0")
            setLoading(false)
        })

    }

    function ShowModal(params) {
        setModalShow(true)
    }

    function ShowModal2(params) {
        setModalShow2(true)
    }

    useEffect(() => {
        setLang(window.location.href.split('/')[3])
    }, [])


    return (
        <React.Fragment>
            <aside className={`menu_sidebar`}>
                <div className="menu_sidebar-content">
                    <div className="menu_sidebar-content--top">
                        <Link href="/"><a><img className="logo" src="/logo-sato.svg" /></a></Link>
                        <ul className="link">
                            <li><Link href={`/${lang}/${lang === 'en'?'project':'project'}`}><a className={activeMenu.act && activeMenu.menu === 'project' ? 'active' : ''}>{lang === 'en'?'PROJECT':'PROJEK'}</a></Link></li>
                            <li><Link href={`/${lang}/${lang === 'en'?'idea-people':'ide-tim'}`}><a className={activeMenu.act && activeMenu.menu === 'about' ? 'active' : ''}>{lang === 'en'?'IDEA + PEOPLE':'IDE + TIM'}</a></Link></li>
                            <li><Link href={`/${lang}/${lang === 'en'?'studies':'studi'}`}><a className={activeMenu.act && activeMenu.menu === 'studies' ? 'active' : ''}>{lang === 'en'?'STUDIES':'STUDI'}</a></Link></li>
                            <li><Link href={`/${lang}/${lang === 'en'?'intouch':'intouch'}`}><a className={activeMenu.act && activeMenu.menu === 'intouch' ? 'active' : ''}>{lang === 'en'?'INTOUCH':'INTOUCH'}</a></Link></li>
                            <li><Link href={`/${lang}/${lang === 'en'?'career':'karir'}`}><a className={activeMenu.act && activeMenu.menu === 'career' ? 'active' : ''}>{lang === 'en'?'CAREER':'KARIR'}</a></Link></li>
                            <li className="mb-5"><Link href={`/${lang}/${lang === 'en'?'contact-faq':'kontak-faq'}`}><a className={activeMenu.act && activeMenu.menu === 'contact' ? 'active' : ''}>{lang === 'en'?'CONTACT + FAQ':'KONTAK + FAQ'}</a></Link></li>
                            <li><a className="search-button" onClick={ShowModal2}><img src="/search.png"/></a></li>
                        </ul>
                    </div>
                    <div className="menu_sidebar-content--bottom">
                        <ul className="information">
                            <li className="mb-4"> <a onClick={ShowModal} className="color_wa logo-wrapper" style={{cursor:'pointer'}}>{lang === 'en'?'CHAT WITH US':'CHAT DENGAN KAMI'}</a></li>
                            <br/>
                            <li className="logo-wrapper"> <p className="color_white">{lang === 'en'?'FOR ANY ENQUIRIES':'UNTUK PERTANYAAN'}<br/>{lang === 'en'?'PLEASE CONTACT':'MOHON HUBUNGI'}</p>
                            </li>
                            <br/>
                            <li><p className="color_lightGrey">sato.id.marketing@gmail.com</p></li>
                            <li><p className="color_lightGrey">T 021-2126 0833</p></li>
                            <br/>
                            <li><p className="color_lightGrey m-0">Jl PERUMAHAN INTERCON<br/>KEBUN JERUK J13/NO 9<br/>SRENGSENG<br/>JAKARTA BARAT, INDONESIA</p></li>

                            <ul className="logo_info">
                                <div className="sosmed">
                                    <li className="mb-4"><a><img src="/wa-sato.png" alt="logo wa"/></a></li>
                                    <br/>
                                    <li className="mb-2"><a><img src="/facebook.png" alt="logo sosmed"/></a></li>
                                    <li className="mb-2"><a><img src="/instagram.png" alt="logo sosmed"/></a></li>
                                    <li className="mb-2"><a><img src="/twitter.png" alt="logo sosmed"/></a></li>
                                </div>
                                {withSlug?
                                    <div className="lang">
                                        <li><Link href={`/${lang === 'en' ? 'id' : 'en'}/project/[category]/[project]`} as={`/id/project/${category}/${slug}`}><a className={lang === 'id' ? 'active' : ''}>ID.</a></Link></li>
                                        <li><Link href={`/${lang === 'id' ? 'en' : 'id'}/project/[category]/[project]`} as={`/en/project/${category}/${slug}`}><a className={lang === 'en' ? 'active' : ''}>EN.</a></Link></li>
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
                        <Link href="/"><a><img className="logo" src="/logo-sato.svg" /></a></Link>
                        <ul className="link">
                            <li><Link href={`/${lang}/${lang === 'en'?'project':'project'}`}><a className={activeMenu.act && activeMenu.menu === 'project' ? 'active' : ''}>PROJECT</a></Link></li>
                            <li><Link href={`/${lang}/${lang === 'en'?'idea-people':'ide-tim'}`}><a className={activeMenu.act && activeMenu.menu === 'about' ? 'active' : ''}>IDEA + PEOPLE</a></Link></li>
                            <li><Link href={`/${lang}/${lang === 'en'?'studies':'studi'}`}><a className={activeMenu.act && activeMenu.menu === 'studies' ? 'active' : ''}>STUDIES</a></Link></li>
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
                        </ul>
                    </div>
                </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                onChange={handleOnChange}
                onSubmit={onSubmit}
                loading={loading}
            />
            <MyVerticallyCenteredModal2
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />

            </aside>
            <a className="wa-float" onClick={ShowModal}><img src="/wa-sato2.png" alt="wa-logo"/></a>
        </React.Fragment>
    )
}

export default  Sidebar
