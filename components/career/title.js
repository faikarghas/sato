import React, {useState} from 'react'
import {Row,Col} from 'react-bootstrap'

const Title = () => {
    const [show,setShow] = useState(false)

    function ShowInfo(params) {
        setShow(!show)
    }

    return (
        <React.Fragment>
            <div className="page_career-title">
                <h3>MECHANICAL ENGINEERING (SR)</h3>
                <ul className="hidebt" onClick={ShowInfo}>
                    <li><p className="hidebt-text">{show? 'hide detail': 'show detail'}</p></li>
                    <li><img src="/hidebt.png"/></li>
                </ul>
            </div>

            <div className={`page_career-detail ${show ? 'show' : ''}`}>
                <Row>
                    <Col xs={12}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default Title
