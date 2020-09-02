import React,{useEffect,useState} from 'react'
import Link from 'next/link'

const Index = ({activeMenu,className,thisproject,data,slug}) => {
    const [lang, setLang] = useState()
    const [page, setPage] = useState()


    useEffect(() => {
        setLang(window.location.href.split('/')[3])
        let thisPage = window.location.href.split('/')[5]
        setPage(thisPage)
    }, [page])

    let itemsToRender;

    if (data) {
        itemsToRender = data.map((res,i)=>{
            let fileNameWithoutSpace = res.name.replace(/\s/g, '-').toLowerCase();
            if (slug === fileNameWithoutSpace) {
                return (
                    <li key={i}><Link href={`/${lang}/project/[category]`} as={`/${lang}/project/${fileNameWithoutSpace}`}><a className='active'>{res.name}</a></Link></li>
                )
            } else {
                return (
                    <li key={i}><Link href={`/${lang}/project/[category]`} as={`/${lang}/project/${fileNameWithoutSpace}`}><a className=''>{res.name}</a></Link></li>
                )
            }
        })
    }

    return (
        <div className={`tab_menu ${className}`}>
            <ul>
                <li><Link href={`/${lang}/project`} as={`/${lang}/project`}><a className={activeMenu && activeMenu.act && activeMenu.menu === 'all' ? 'active' : ''}>All Projects</a></Link></li>
                {itemsToRender}
            </ul>
        </div>
    )
}

export default Index
