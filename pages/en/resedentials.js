import React from 'react'
import { AnimatePresence,motion } from "framer-motion";


import SideBar from '../../components/sidebar/index'
import TabProject from '../../components/tabProject/index'
import Main from '../../components/layout/mainPageLayout'
import Menu from '../../components/menuMobile/index'

const Resedentials = () => {
    return (
        <div className="page_layout">
            <SideBar activeMenu={{act:'active',menu:'project'}} langEn='resedentials' langId='resedentials'/>
            <Menu langEn='resedentials' langId='resedentials'/>
            <motion.div className="page_layout-main"  initial='initial' animate='animate' exit="exit">
                <div className="page_project">
                    <h2>WE DON’T CREATE SPACES. MOREOVER, SPACES ARE NOT MADE. WE CONSTRUCT FLOOR, WALLS, AND CEILINGS, THROUGH DISCUSSION WITH ARCHITECTS, SUB-CON, SUPPLIERS, AND CLIENTS TO THE HIGHEST STANDARD ACHIEVEABLE.</h2>
                    <TabProject activeMenu={{act:'active',menu:'resedentials'}}/>
                </div>
            </motion.div>
        </div>
    )
}

export default Resedentials
