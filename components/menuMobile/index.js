import React,{useState,useContext,useEffect} from 'react'
import {Context} from '../../hocs/store'
import Link from 'next/link'
import HamburgerMenu from 'react-hamburger-menu'
import TabProject from '../../components/tabProject/index'
import { logEvent } from '../../lib/analytics'


const Menu = ({withSlug,langEn,langId,slug,activeMenu,thisproject,data}) => {
    const [state, dispatch] = useContext(Context);
    const [lang, setLang] = useState()
    const [menu, setMenu] = useState(false)
    const [curpage, setCurpage] = useState(false)

    function _openMenuHandler(params) {
        dispatch({type:'SHOW_MENU',payload:'openn'})
        setMenu(true)
    }

    function _closeMenuHandler(params) {
        dispatch({type:'CLOSE_MENU',payload:'closee'})
        setMenu(false)
    }

    function evGAFB(params) {
        logEvent("BUTTON","Click","FB")
    }

    function evGAIG(params) {
        logEvent("BUTTON","Click","IG")
    }

    useEffect(() => {
        dispatch({type:'CLOSE_MENU',payload:'closee'})
        setLang(window.location.href.split('/')[3])
        setCurpage(window.location.href.split('/')[5])
    }, [])


    function tabMobile(params) {
        if (thisproject) {
            return (<TabProject className="hide-desktop" activeMenu={{act:'active',menu: curpage === undefined ? 'all' : data}} data={data} slug={slug}/>)
        }
    }

    return (
        <React.Fragment>
        <div className="menuMobile">
            <div className="menuMobile_wrapper">
                <div className="menuMobile-1">
                    <Link href={`/${lang}`}>
                    <a><img src="/logo-sato.svg" alt="logo sato" /></a>
                    </Link>
                    {withSlug?
                        <ul className="lang">
                            <li><Link href={`/${lang === 'id' ? 'en' : 'id'}/project/[project]`} as={`/en/project/${slug}`}><a className={lang === 'en' ? 'active' : ''}>EN.</a></Link></li>
                            <li><Link href={`/${lang === 'en' ? 'id' : 'en'}/project/[project]`} as={`/id/project/${slug}`}><a className={lang === 'id' ? 'active' : ''}>ID.</a></Link></li>
                        </ul>
                        :
                        <ul className="lang">
                            <li><Link href={`/${lang === 'id' ? 'en' : 'en'}/${langEn}`}><a className={lang === 'en' ? 'active' : ''}>EN.</a></Link></li>
                            <li><Link href={`/${lang === 'en' ? 'id' : 'id'}/${langId}`}><a className={lang === 'id' ? 'active' : ''}>ID.</a></Link></li>
                        </ul>
                    }
                </div>
                <div className="menuMobile-2">
                    <HamburgerMenu
                        isOpen={menu}
                        menuClicked={menu ? _closeMenuHandler : _openMenuHandler}
                        width={24}
                        height={15}
                        strokeWidth={1}
                        rotate={0}
                        color='white'
                        borderRadius={0}
                        animationDuration={0.5}
                    />
                    <div className="sosmed">
                        <ul>
                            <li className="mb-2"><a onClick={evGAFB} href="https://www.facebook.com/SATO-Contractor-103547724942458/" target="_blank" rel="noopener"><img src="/facebook.png" alt="logo sosmed"/></a></li>
                            <li className="mb-2"><a onClick={evGAIG} href="https://instagram.com/sato_contractor?igshid=1uwp0o8pe007c" target="_blank" rel="noopener"><img src="/instagram.png" alt="logo sosmed"/></a></li>
                            {/* <li className="mb-2"><a><img src="/twitter.png" alt="logo sosmed"/></a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {tabMobile()}
        {/* <TabProject className="hide-desktop" activeMenu={{act:'active',menu: curpage === undefined ? 'all' : data}} data={data} slug={slug}/> */}
        <div className="br-bottom"></div>
        </React.Fragment>
    )
}

export default Menu
