import React,{useState,useContext,useEffect} from 'react'
import {Context} from '../../hocs/store'
import Link from 'next/link'
import HamburgerMenu from 'react-hamburger-menu'
import TabProject from '../../components/tabProject/index'

const Menu = ({withSlug,langEn,langId,slug,activeMenu,thisproject}) => {
    const [state, dispatch] = useContext(Context);
    const [lang, setLang] = useState()
    const [menu, setMenu] = useState(false)

    function _openMenuHandler(params) {
        dispatch({type:'SHOW_MENU',payload:'openn'})
        setMenu(true)
    }

    function _closeMenuHandler(params) {
        dispatch({type:'CLOSE_MENU',payload:'closee'})
        setMenu(false)
    }

    useEffect(() => {
        dispatch({type:'CLOSE_MENU',payload:'closee'})
        setLang(window.location.href.split('/')[3])
    }, [])

    return (
        <React.Fragment>
        <div className="menuMobile">
            <div className="menuMobile_wrapper">
                <div className="menuMobile-1">
                    <img src="/logo-sato.svg" alt="logo sato" />
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
                            <li className="mb-2"><a><img src="/facebook.png" alt="logo sosmed"/></a></li>
                            <li className="mb-2"><a><img src="/instagram.png" alt="logo sosmed"/></a></li>
                            <li className="mb-2"><a><img src="/twitter.png" alt="logo sosmed"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <TabProject className="hide-desktop" activeMenu={activeMenu} thisproject={thisproject}/>
        <div className="br-bottom"></div>
        </React.Fragment>
    )
}

export default Menu
