import React,{useEffect} from 'react'
import {initGA, logPageView} from '../../lib/analytics'

const GaWrapper = (props) => {
    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
          }
          logPageView()
    }, [])
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>

    )
}

export default GaWrapper