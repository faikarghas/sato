import React from 'react'
import {Row,Col} from 'react-bootstrap'

const Index = ({show,data}) => {
    return (
        <div className={`page_project-detail d-xs-block d-md-none d-lg-none ${show}`}>
            <Row noGutters={true}>
                <Col xs={12} md={6}>
                    <Row noGutters={true}>
                        <Col xs={12} md={12}>
                            <div className="detail-wrapper">
                                <Row noGutters={true}>
                                    <Col xs={6}><p>Project</p></Col>
                                    <Col xs={6}><p className="color_lightGrey">{data.project[0].project}</p></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="detail-wrapper">
                                <Row noGutters={true}>
                                    <Col xs={6}><p>Client</p></Col>
                                    <Col xs={6}><p className="color_lightGrey">{data.project[0].client}</p></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="detail-wrapper">
                                <Row noGutters={true}>
                                    <Col xs={6}><p>ARCHITECT</p></Col>
                                    <Col xs={6}><p className="color_lightGrey">{data.project[0].architect}</p></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="detail-wrapper">
                                <Row noGutters={true}>
                                    <Col xs={6}><p>AREA</p></Col>
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
                                    <Col xs={6}><p>YEAR</p></Col>
                                    <Col xs={6}><p className="color_lightGrey">{data.project[0].year}</p></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="detail-wrapper">
                                <Row noGutters={true}>
                                    <Col xs={6}><p>DURATION</p></Col>
                                    <Col xs={6}><p className="color_lightGrey">{data.project[0].duration}</p></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="detail-wrapper">
                                <Row noGutters={true}>
                                    <Col xs={6}><p>LOCATION</p></Col>
                                    <Col xs={6}><p className="color_lightGrey">{data.project[0].location}</p></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} md={12}>
                            <div className="detail-wrapper">
                                <Row noGutters={true}>
                                    <Col xs={6}><p>DESCRIPTION OF WORKS</p></Col>
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
