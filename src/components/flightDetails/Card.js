import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Row,Col} from "react-bootstrap"

import React, { useState } from "react";

// import Modal from "react-overlays/Modal";
// import DetailManage from "../View_Detail/DetailManage";
// import Acord from '../testing/acord';

const Card=({Data})=>{

    const [show, setShow] = useState(false);
    const [books,setBooks]=useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleBook= () => setBooks(true)


    return (<>
        <div style={{display: "flex",marginBottom:"15px",justifyContent: "center"}}>
            <div style={{width: "950px",backgroundColor:"white" ,backdropFilter:"15px", borderRadius:"10px"}}>
                <Row style={{paddingBottom:"10px", backgroundColor:"white", borderRadius:"10px" }}>
                    
                        <Col md style={{marginTop:"15px"}}>
                            <img src={Data.image} alt="Oops Network Issue" style={{border:"1px solid black", borderRadius:"5px"}}/>
                        </Col>
                        <Col md style={{marginTop:"15px"}}>
                            <h6 >{Data.name}</h6>
                            <h5>{Data.id}</h5>
                        </Col>
                        <Col md style={{marginTop:"15px"}}>
                            <h6> {Data.departuretime} </h6>
                            <h5 style={{marginTop:"10px"}}> {Data.origin} </h5>
                        </Col>
                        <Col md style={{marginTop:"15px"}}>
                            <h6> {Data.duration} </h6>
                            {/* <hr/>
                            <h5>no. of stop</h5> */}
                        </Col>
                        <Col md style={{marginTop:"15px"}}>
                            <h6> {Data.arrivaltime} </h6>
                            <h5> {Data.destination} </h5>
                        </Col>
                        <Col md style={{marginTop:"15px"}}>
                            <h6> {Data.price} </h6>
                            
                        </Col>
                        <Col md style={{marginTop:"15px"}}>
                            <Button variant="dark button-blue" onClick={handleBook}>Book</Button>
                            
                            <Button variant="dark" onClick={handleShow} style={{marginTop:"10px"}}>
                                View Details
                            </Button>
                            <div>
                            

                            <Modal show={show} onHide={handleClose} backdrop="" keyboard={false} >
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {/* <DetailManage/> */}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}> Close </Button>
                                    <Button variant="primary" onClick={handleBook} >Book</Button>
                                </Modal.Footer>
                            </Modal>
                            </div>
                            
                        </Col>
                        
                </Row>
            </div>
            
            
            
        </div>

       
        {/* <h2>remark link use karo</h2> */}
        {/* {books && <Acord/>} */}
        </>
        
        
    )
}
export default Card