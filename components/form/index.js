import React from 'react'
import {Form,Col,Row,Button} from 'react-bootstrap'

const Contact = ({bgButton}) => {
    return (
        <div className="form-contact-wrapper">
            <Form>
                <Form.Row>
                    <Form.Group as={Col} md='12' className="mb-4">
                        <Form.Control type="text" id="name" placeholder="Your Name" name="name" required/>
                    </Form.Group>
                    <Form.Group as={Col} md='12' className="mb-4">
                        <Form.Control type="email" id="email" placeholder="Email" name="email"  required/>
                    </Form.Group>
                    <Form.Group as={Col} md='12' className="mb-4">
                        <Form.Control type="number" id="phoneNumber" placeholder="Phone Number" name="phoneNumber" required/>
                    </Form.Group>
                    <Form.Group as={Col} md='12' className="mb-4">
                        <Form.Control as="textarea" id="message" placeholder="Your Message" name="message"  required/>
                    </Form.Group>
                </Form.Row>
                <Button type="submit" className={bgButton}>SENT</Button>
            </Form>
        </div>
    )
}

export default Contact
