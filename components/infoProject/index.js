import React from 'react'
import {Row,Col} from 'react-bootstrap'

const Index = ({show,data}) => {
    return (
        <div className={`page_project-detail d-none d-md-block ${show}`}>
            <Row noGutters={true}>
                <Col xs={12} md={6}>
                    <div className="detail-wrapper">
                        <Row noGutters={true}>
                            <Col xs={6}><p>Project</p></Col>
                            <Col xs={6}><p className="color_lightGrey">{data.project[0].category}</p></Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="detail-wrapper">
                        <Row noGutters={true}>
                            <Col xs={6}><p>Year</p></Col>
                            <Col xs={6}><p className="color_lightGrey">{data.project[0].year}</p></Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="detail-wrapper">
                        <Row noGutters={true}>
                            <Col xs={6}><p>CLIENT</p></Col>
                            <Col xs={6}><p className="color_lightGrey">{data.project[0].client}</p></Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="detail-wrapper">
                        <Row noGutters={true}>
                            <Col xs={6}><p>DURATION</p></Col>
                            <Col xs={6}><p className="color_lightGrey">{data.project[0].duration}</p></Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="detail-wrapper">
                        <Row noGutters={true}>
                            <Col xs={6}><p>ARCHITECT</p></Col>
                            <Col xs={6}><p className="color_lightGrey">{data.project[0].architect}</p></Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="detail-wrapper">
                        <Row noGutters={true}>
                            <Col xs={6}><p>LOCATION</p></Col>
                            <Col xs={6}><p className="color_lightGrey">{data.project[0].location}</p></Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="detail-wrapper">
                        <Row noGutters={true}>
                            <Col xs={6}><p>AREA</p></Col>
                            <Col xs={6}><p className="color_lightGrey">{data.project[0].area}</p></Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="detail-wrapper">
                        <Row noGutters={true}>
                            <Col xs={6}><p>DESCRIPTION OF WORKS</p></Col>
                            <Col xs={6}><p className="color_lightGrey">{data.project[0].description_en}</p></Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Index
