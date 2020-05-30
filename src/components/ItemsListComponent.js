import React, { Component } from 'react';
import { Accordion, Card } from 'react-bootstrap';

function ItemsList() {
    return (
        <div className="container">
            <br></br>
            <br></br>
            <SingleItem />
            <SingleItem />
            <SingleItem />
        </div>
    );
}

export default ItemsList;



function SingleItem() {
    return (
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" className="pointer-card">
                    <p><small>Pass </small><strong>124, Parag Dalvi</strong></p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <p>Gate pass number: <strong>124</strong></p>
                        <hr></hr>
                        <h5>Issued to</h5>
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <small className="font-italic">Name</small>
                                <p>Parag Dalvi</p>
                            </div>
                            <div className="col-md-4 col-12">
                                <small className="font-italic">Contact</small>
                                <p>9916715009</p>
                            </div>
                            <div className="col-md-4 col-12">
                                <small className="font-italic">Address</small>
                                <p>CCB 13 new goods shed road</p>
                            </div>
                        </div>
                        <hr></hr>
                        <h5>Products</h5>
                        <Product />
                        <Product />
                        <Product />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <br></br>
        </Accordion>
    );
}

function Product() {
    return (
        <div>

            <div className="row">
                <div className="col-md-2 col-12">
                    <small className="font-italic">ID</small>
                    <p>21745128</p>
                </div>
                <div className="col-md-2 col-12">
                    <small className="font-italic">Expected return date</small>
                    <p>20/2/2022</p>
                </div>
                <div className="col-md-2 col-12">
                    <small className="font-italic">Requested by</small>
                    <p>Someone Else</p>
                </div>
                <div className="col-md-2 col-12">
                    <small className="font-italic">Cordinated by</small>
                    <p>Different Person</p>
                </div>
                <div className="col-md-2 col-12">
                    <small className="font-italic">Carried by</small>
                    <p>Some Other</p>
                </div>
                <div className="col-md-2 col-12">
                    <small className="font-italic">Verified by</small>
                    <p>He</p>
                </div>
            </div>
            <hr className="my-2"></hr>
        </div>
    );
}
