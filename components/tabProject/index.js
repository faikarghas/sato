import React from 'react'
import Link from 'next/link'
import useTranslation from '../../hooks/useTranslation'

const Index = ({activeMenu}) => {
    const { locale, t } = useTranslation()

    return (
        <div className="tab_menu">
            <ul>
                <li><Link href="/[lang]/project" as={`/${locale}/project`}><a className={activeMenu.act && activeMenu.menu === 'all' ? 'active' : ''}>All Project</a></Link></li>
                <li><Link href="/[lang]/offices" as={`/${locale}/offices`}><a className={activeMenu.act && activeMenu.menu === 'offices' ? 'active' : ''}>Offices</a></Link></li>
                <li><Link href="/[lang]/retails" as={`/${locale}/retails`}><a className={activeMenu.act && activeMenu.menu === 'retails' ? 'active' : ''}>Retails</a></Link></li>
                <li><Link href="/[lang]/show-units" as={`/${locale}/show-units`}><a className={activeMenu.act && activeMenu.menu === 'units' ? 'active' : ''}>Show Units</a></Link></li>
                <li><Link href="/[lang]/resedentials" as={`/${locale}/resedentials`}><a className={activeMenu.act && activeMenu.menu === 'resedentials' ? 'active' : ''}>Resedentials</a></Link></li>
            </ul>
        </div>
    )
}

export default Index
