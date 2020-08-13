import React,{useEffect,useState} from 'react'
import Link from 'next/link'

const Index = ({activeMenu,className,thisproject}) => {
    const [lang, setLang] = useState()

    useEffect(() => {
        setLang(window.location.href.split('/')[3])
        console.log(activeMenu);
    }, [])

    return (
        <div className={`tab_menu ${thisproject} ${className}`}>
            <ul>
                <li><Link href={`/${lang}/project`} as={`/${lang}/project`}><a className={activeMenu && activeMenu.act && activeMenu.menu === 'all' ? 'active' : ''}>All Project</a></Link></li>
                <li><Link href={`/${lang}/offices`} as={`/${lang}/offices`}><a className={activeMenu && activeMenu.act && activeMenu.menu === 'offices' ? 'active' : ''}>Offices</a></Link></li>
                <li><Link href={`/${lang}/retails`} as={`/${lang}/retails`}><a className={activeMenu && activeMenu.act && activeMenu.menu === 'retails' ? 'active' : ''}>Retails</a></Link></li>
                <li><Link href={`/${lang}/show-units`} as={`/${lang}/show-units`}><a className={activeMenu && activeMenu.act && activeMenu.menu === 'units' ? 'active' : ''}>Show Units</a></Link></li>
                <li><Link href={`/${lang}/resedentials`} as={`/${lang}/resedentials`}><a className={activeMenu && activeMenu.act && activeMenu.menu === 'resedentials' ? 'active' : ''}>Resedentials</a></Link></li>
            </ul>
        </div>
    )
}

export default Index
