import React,{useEffect,useState,useContext} from 'react'
import {Context} from '../../hocs/store'
import Link from 'next/link'
import {Modal,Button} from 'react-bootstrap'
import Loading from '../loading'
import Router from 'next/router'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        show={props.show}
        onHide={() => props.onHide(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
            <div className="modal-wa">
                <div className="modal-wa-header">
                    <img src="/wa-sato2.png"  alt="logo wa"/>
                    <h4>ENTER YOUR WHATSAPP NUMBER</h4>
                </div>
                <form onSubmit={props.onSubmit}>
                    <input onChange={props.onChange} type="number" name="phone"/>
                    <Button type="submit" disabled={props.loading} >
                        {props.loading ? <Loading/> : 'CHAT NOW'}
                    </Button>
                </form>
            </div>
        </Modal.Body>
      </Modal>
    );
}

function MyVerticallyCenteredModal2(props) {
    const [inputValues, setInputValues] = useState({ search: '' });
    const [lang, setLang] = useState()

    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const searchEnter=(e)=>{
        if(e.key === 'Enter'){
            Router.push(`/${lang}/search/[search]`,`/${lang}/search/${inputValues.search}`)
        }
    }

    const searchButton=()=>{
        Router.push(`/${lang}/search/[search]`,`/${lang}/search/${inputValues.search}`)
    }

    useEffect(() => {
        setLang(window.location.href.split('/')[3])
    }, [])


    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
            <div className="modal-wa">
                <div className="modal-wa-header">
                    <h4>SEARCH ANY KEYWORD</h4>
                </div>
                <input type="text" name="search" onChange={handleOnChange} onKeyPress={searchEnter}/>
                <Button onClick={searchButton}>
                    SUBMIT
                </Button>
            </div>
        </Modal.Body>
      </Modal>
    );
}


const Sidebar = ({activeMenu,langEn,langId,withSlug,slug}) => {
    const [lang, setLang] = useState()
    const [state, dispatch] = useContext(Context);
    const [modalShow, setModalShow] = useState(false)
    const [modalShow2, setModalShow2] = useState(false)
    const [inputValues, setInputValues] = useState({ phone: '' });
    const [loading, setLoading] = useState(false);

    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    function onSubmit(e) {
        e.preventDefault()
        setLoading(true)
        let data = {
            phone: inputValues.phone
        }
        fetch('https://api.sato.id/api/insertWhatsapp',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((dataRes) => {
            setLoading(false)
        })

    }

    function ShowModal(params) {
        setModalShow(true)
    }

    function ShowModal2(params) {
        setModalShow2(true)
    }

    useEffect(() => {
        setLang(window.location.href.split('/')[3])
    }, [])


    return (
        <React.Fragment>
            <aside className={`menu_sidebar`} style={{borderRight:'none'}}>
                <div className="menu_sidebar-content">
                    <div className="menu_sidebar-content--top">
                        <Link href="/"><a><img className="logo" src="/logo-sato.svg" /></a></Link>
                    </div>
                </div>
            </aside>
        </React.Fragment>
    )
}

export default  Sidebar
