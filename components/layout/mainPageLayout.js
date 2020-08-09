import React from 'react'
import { AnimatePresence,motion } from "framer-motion";

const MainPageLayout = (props) => {
    return (
        // <AnimatePresence exitBeforeEnter>
            <div className="page_layout-main">
                {props.children}
            </div>
        // </AnimatePresence>

    )
}

export default MainPageLayout
