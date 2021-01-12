import React,{useState,useRef,useEffect} from 'react'
import Link from 'next/link'
import { AnimatePresence,motion } from "framer-motion";


import SideBar from '../../../components/sidebar/index'
import Menu from '../../../components/menuMobile/index'
import GaWrapper from '../../../components/GA/index'



const Search = ({dataSearch,search}) => {
    const [lang, setLang] = useState()

    useEffect(() => {
        setLang(window.location.href.split('/')[3])
    }, [])

    return (
        <GaWrapper>
        <div className="page_layout">
            <SideBar activeMenu={{act:'active',menu:'search'}} langEn='search' langId='pembelajaran'/>
            <Menu langEn='search' langId='pembelajaran'/>
            <motion.div className="page_layout-main"  initial='initial' animate='animate' exit="exit">
                <div className="studies page_studies">
                    <h2>Search: <span style={{color:'white'}}>{search}</span></h2>
                    <ul className="list__search">
                    {dataSearch.map((item,i)=>(
                        <li>
                            <Link href={`/${lang}/project/${item.category}/${item.slug}`}><a>{item.name}</a></Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </motion.div>
        </div>
        </GaWrapper>
    )
}

Search.getInitialProps = async (ctx) => {
    const {search} = ctx.query
    const res = await fetch(`https://api.sato.id/api/search/${search}`)
    const dataSearch = await res.json()

    console.log(dataSearch);
    return {dataSearch,search}
}

export default Search




