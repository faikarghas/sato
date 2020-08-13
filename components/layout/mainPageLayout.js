import React from 'react'
import Link from 'next/link'
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