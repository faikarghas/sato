import React,{useState} from 'react'
import {Form,Col,Row,Button} from 'react-bootstrap'
import Loading from '../loading'

const Contact = ({bgButton,url}) => {
    const [inputValues, setInputValues] = useState({
        name: '', email: '',phoneNumber:'',message:''
    });
    const [loading, setLoading] = useState(false);


    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)

        let data = {
            name: inputValues.name,
            phoneNumber: inputValues.phoneNumber,
            email: inputValues.email,
            message: inputValues.message,
        }

        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((dataRes) => {
            setLoading(false)
            // alert('berhasil')
        })

    }

    return (
        <div className="form-contact-wrapper">
            <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md='12' className="mb-4">
                        <Form.Control onChange={handleOnChange} type="text" id="name" placeholder="Your Name" name="name" required/>
                    </Form.Group>
                    <Form.Group as={Col} md='12' className="mb-4">
                        <Form.Control onChange={handleOnChange} type="email" id="email" placeholder="Email" name="email"  required/>
                    </Form.Group>
                    <Form.Group as={Col} md='12' className="mb-4">
                        <Form.Control onChange={handleOnChange} type="number" id="phoneNumber" placeholder="Phone Number" name="phoneNumber" required/>
                    </Form.Group>
                    <Form.Group as={Col} md='12' className="mb-4">
                        <Form.Control onChange={handleOnChange} as="textarea" id="message" placeholder="Your Message" name="message"  required/>
                    </Form.Group>
                </Form.Row>
                <Button className={bgButton} type="submit" disabled={loading} >
                    {loading ? <Loading/> : 'SENT'}
                </Button>
            </Form>
        </div>
    )
}

export default Contact
