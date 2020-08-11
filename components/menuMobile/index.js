import React,{useState,useContext,useEffect} from 'react'
import {Context} from '../../hocs/store'

const Menu = () => {
    const [state, dispatch] = useContext(Context);
    const [menu, setMenu] = useState(false)

    function _openMenuHandler(params) {
        dispatch({type:'SHOW_MENU',payload:'open'})
        setMenu(true)
    }

    function _closeMenuHandler(params) {
        dispatch({type:'CLOSE_MENU',payload:''})
        setMenu(false)
    }

    useEffect(() => {
        dispatch({type:'CLOSE_MENU',payload:''})
    }, [])

    return (
        <div className="menuMobile">
            <img src="/logo-sato.svg" alt="logo sato" />
            <p onClick={menu ? _closeMenuHandler : _openMenuHandler }>Menu</p>
        </div>
    )
}

export default Menu
