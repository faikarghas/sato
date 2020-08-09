import React from 'react'
import {Row,Col} from 'react-bootstrap'

const Index = ({show}) => {
    return (
        <div className={`page_project-detail d-none d-md-block ${show}`}>
            <Row noGutters={true}>
                <Col xs={12} md={6}>
                    <div className="detail-wrapper">
                        <Row noGutters={true}>
                            <Col xs={6}><p>Project</p></Col>
                            <Col xs={6}><p className="color_lightGrey">Resedential</p></Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="detail-wrapper">
                        <Row noGutters={true}>
                            <Col xs={6}><p>Year</p></Col>
                            <Col xs={6}><p className="color_lightGrey">MR. PARK YEONG JEO</p></Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="detail-wrapper">
                        <Row noGutters={true}>
                            <Col xs={6}><p>CLIENT</p></Col>
                            <Col xs={6}><p className="color_lightGrey">BEREAU SRH</p></Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="detail-wrapper">
                        <Row noGutters={true}>
                            <Col xs={6}><p>DURATION</p></Col>
                            <Col xs={6}><p className="color_lightGrey">1200 M2</p></Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="detail-wrapper">
                        <Row noGutters={true}>
                            <Col xs={6}><p>ARCHITECT</p></Col>
                            <Col xs={6}><p className="color_lightGrey">2019</p></Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="detail-wrapper">
                        <Row noGutters={true}>
                            <Col xs={6}><p>LOCATION</p></Col>
                            <Col xs={6}><p className="color_lightGrey">6 MONTHS</p></Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="detail-wrapper">
                        <Row noGutters={true}>
                            <Col xs={6}><p>AREA</p></Col>
                            <Col xs={6}><p className="color_lightGrey">PANTAI MUTIARA, NORTH OF JAKARTA</p></Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="detail-wrapper">
                        <Row noGutters={true}>
                            <Col xs={6}><p>DESCRIPTION OF WORKS</p></Col>
                            <Col xs={6}><p className="color_lightGrey">DEMOLITION OF EXISTING STRUCTURE
                                EXAVACTION FOR BASEMENT LEVEL
                                INTERIOR DESIGN & FINISHING</p></Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Index
