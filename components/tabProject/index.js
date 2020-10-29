import React,{useEffect,useState} from 'react'
import Link from 'next/link'

const Index = ({activeMenu,className,thisproject,data,dataCatIn,slug}) => {
    const [lang, setLang] = useState()
    const [page, setPage] = useState()


    useEffect(() => {
        setLang(window.location.href.split('/')[3])
        let thisPage = window.location.href.split('/')[5]
        setPage(thisPage)
    }, [page])

    function renderThis(params) {
        if (lang === 'en') {
            let thisData = data.map((res,i)=>{
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
            return thisData
        } else {
            let thisData = data.map((res,i)=>{
                let fileNameWithoutSpace = res.name.replace(/\s/g, '-').toLowerCase();
                if (fileNameWithoutSpace === "residentials") {
                    fileNameWithoutSpace = "hunian"
                } else if (fileNameWithoutSpace === "show-units"){
                    fileNameWithoutSpace = "unit-contoh"
                } else if (fileNameWithoutSpace === "retails"){
                    fileNameWithoutSpace = "retail"
                } else if (fileNameWithoutSpace === "offices"){
                    fileNameWithoutSpace = "kantor"
                }

                console.log(slug);

                if (slug === res.name.replace(/\s/g, '-').toLowerCase()) {
                    return (
                        <li key={i}><Link href={`/${lang}/project/[category]`} as={`/${lang}/project/${fileNameWithoutSpace}`}><a className='active'>{fileNameWithoutSpace}</a></Link></li>
                    )
                } else {
                    return (
                        <li key={i}><Link href={`/${lang}/project/[category]`} as={`/${lang}/project/${fileNameWithoutSpace}`}><a className=''>{fileNameWithoutSpace}</a></Link></li>
                    )
                }
            })

            return thisData
        }
    }

    useEffect(() => {
        console.log(dataCatIn);
    }, [])

    // if (dataCatIn && data && lang === 'en') {
    //     console.log(1);
    //     itemsToRender = data.map((res,i)=>{
    //         let fileNameWithoutSpace = res.name.replace(/\s/g, '-').toLowerCase();
    //         if (slug === fileNameWithoutSpace) {
    //             return (
    //                 <li key={i}><Link href={`/${lang}/project/[category]`} as={`/${lang}/project/${fileNameWithoutSpace}`}><a className='active'>{res.name}</a></Link></li>
    //             )
    //         } else {
    //             return (
    //                 <li key={i}><Link href={`/${lang}/project/[category]`} as={`/${lang}/project/${fileNameWithoutSpace}`}><a className=''>{res.name}</a></Link></li>
    //             )
    //         }
    //     })
    // } else if (dataCatIn) {
    //     console.log(2);
    //     itemsToRender = dataCatIn.map((res,i)=>{
    //         let fileNameWithoutSpace = res.name.replace(/\s/g, '-').toLowerCase();

    //         if (fileNameWithoutSpace === "hunian") {
    //             fileNameWithoutSpace = "residentials"
    //         } else if (fileNameWithoutSpace === "unit-contoh"){
    //             fileNameWithoutSpace = "show-units"
    //         } else if (fileNameWithoutSpace === "retail"){
    //             fileNameWithoutSpace = "retails"
    //         } else if (fileNameWithoutSpace === "kantor"){
    //             fileNameWithoutSpace = "offices"
    //         }

    //         if (slug === fileNameWithoutSpace) {
    //             return (
    //                 <li key={i}><Link href={`/${lang}/project/[category]`} as={`/${lang}/project/${fileNameWithoutSpace}`}><a className='active'>{res.name}</a></Link></li>
    //             )
    //         } else {
    //             return (
    //                 <li key={i}><Link href={`/${lang}/project/[category]`} as={`/${lang}/project/${fileNameWithoutSpace}`}><a className=''>{res.name}</a></Link></li>
    //             )
    //         }
    //     })
    // }

    return (
        <div className={`tab_menu ${className}`}>
            <ul>
                <li><Link href={`/${lang}/project`} as={`/${lang}/project`}><a className={activeMenu && activeMenu.act && activeMenu.menu === 'all' ? 'active' : ''}>{lang === 'en' ? 'All Projects' : 'Semua Projek' }</a></Link></li>
                {/* {data.map((res,i)=>{
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
                })} */}
                {/* {itemsToRender} */}
                {renderThis()}
            </ul>
        </div>
    )
}

export default Index
