import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'

const Index = ({show,data}) => {
    const [lang, setLang] = useState()

    useEffect(() => {
        setLang(window.location.href.split('/')[3])
    }, [])

    return (
        <div className={`page_project-detail d-xs-block d-md-none d-lg-none ${show}`}>
            <Row noGutters={true}>
                <Col xs={12} md={6}>
                    <Row noGutters={true}>
                        <Col xs={12} md={12}>
                            <div className="detail-wrapper">
                                <Row noGutters={true}>
                                    <Col xs={6}><p>{lang === 'en'?'Project':'Projek'}</p></Col>
                                    <Col xs={6}><p className="color_lightGrey">{data.project[0].project}</p></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="detail-wrapper">
                                <Row noGutters={true}>
                                    <Col xs={6}><p>{lang === 'en'?'CLIENT':'KLIEN'}</p></Col>
                                    <Col xs={6}><p className="color_lightGrey">{data.project[0].client}</p></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="detail-wrapper">
                                <Row noGutters={true}>
                                    <Col xs={6}><p>{lang === 'en'?'ARCHITECT':'ARSITEK'}</p></Col>
                                    <Col xs={6}><p className="color_lightGrey">{data.project[0].architect}</p></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="detail-wrapper">
                                <Row noGutters={true}>
                                    <Col xs={6}><p>{lang === 'en'?'AREA':'AREA'}</p></Col>
                                    <Col xs={6}><p className="color_lightGrey">{data.project[0].area}</p></Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={6}>
                    <Row noGutters={true}>
                        <Col xs={12} md={12}>
                            <div className="detail-wrapper">
                                <Row noGutters={true}>
                                    <Col xs={6}><p>{lang === 'en'?'YEAR':'YEAR'}</p></Col>
                                    <Col xs={6}><p className="color_lightGrey">{data.project[0].year}</p></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="detail-wrapper">
                                <Row noGutters={true}>
                                    <Col xs={6}><p>{lang === 'en'?'DURATION':'DURASI'}</p></Col>
                                    <Col xs={6}><p className="color_lightGrey">{data.project[0].duration}</p></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="detail-wrapper">
                                <Row noGutters={true}>
                                    <Col xs={6}><p>{lang === 'en'?'LOCATION':'LOKASI'}</p></Col>
                                    <Col xs={6}><p className="color_lightGrey">{data.project[0].location}</p></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="detail-wrapper">
                                <Row noGutters={true}>
                                    <Col xs={6}><p>{lang === 'en'?'DESCRIPTION OF WORKS':'DESKRIPSI PEKERJAAN'}</p></Col>
                                    <Col xs={6}><p className="color_lightGrey">{data.project[0].description_id}</p></Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Index
