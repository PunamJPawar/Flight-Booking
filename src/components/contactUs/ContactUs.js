import {Container,Row,Col} from "react-bootstrap"

const ContactUs=()=>{

    const handlerSubmitClick=()=>{
        alert("Thank you for contacting us. ")
    }
  
    return(
        <>
        <Container className="bg-body-tertiary rounded">
            <Row className="mb-5 mt-3">
                <Col Lg='8'>
                <h1>
                {/* className="display-4 mb-4"  */}
               Connect With Us
                </h1>
                </Col>
            </Row>

            <Row className="sec_sp">
                <Col lg='5' className="mb-5">
                    <h3 className="color_sec">Get in touch</h3>
                    <address>
                        <strong>Email: FlyWithUs@gmail.com</strong>
                        <br/>
                        <br/>
                        <p>
                            <strong>Phone Number : 8899212345</strong>
                        </p>
                    </address>
                    <p>
                        Contact us on our dedicated customer care numbers, available 24/7 for 
                        your assistance. 
                        Chat with us on +91 98765 34444 for a smarter flying experience!                        
                    </p>
                    <p>
                        We know that traveling comes with many logistics, and we want to make your Southwest travel experience a seamless one. Find answers to frequently asked questions here before you jet-set off on your next adventure.
                    </p>
                </Col>
                <Col lg='7' className="d-flex align-items-center">
                    <form className="contact_form w-100 border border-dark p-3 rounded">
                        <Row>
                            <Col lg='6' className="form-group">
                                <input className="form-control" id="name"
                                 placeholder="Enter Name"
                                 type="text"/>
                            </Col>
                            <Col lg='6' className="form-group">
                                <input className="form-control rounded-0" id="email"
                                 placeholder="Enter Email"
                                 type="email"/>
                            </Col>                            
                        </Row>
                        <br/>
                        <textarea className="form-control rounded-0" id="message" placeholder="type here"
                        rows='5'>                            
                        </textarea>
                        <br />
                        <Row>
                           <button className="btn alert-btn btn-dark button-blue" onClick={handlerSubmitClick} style={{width:"100px", marginLeft:"12px"}} type="submit">Send</button>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default ContactUs