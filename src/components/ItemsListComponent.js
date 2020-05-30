import React, { Component } from 'react';
import { Accordion, Card } from 'react-bootstrap';

function ItemsList({ issues, loading }) {


    if (issues) {
        const items = issues.map((issue) => {
            return (
                <div key={issue.passNo}>
                    <SingleItem data={issue.data()} />
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="btn ml-auto">
                        <button>Add new</button>
                    </div>
                </div>
                {items}
            </div>
        );
    }

    return <p>loading</p>
}

export default ItemsList;



function SingleItem({ data }) {

    return (
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" className="pointer-card">
                    <p><small>Pass </small><strong>{data.passNo}, {data.name}</strong></p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <p>Gate pass number: <strong>{data.passNo}</strong></p>
                        <hr></hr>
                        <h5>Issued to</h5>
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <small className="font-italic">Name</small>
                                <p>{data.name}</p>
                            </div>
                            <div className="col-md-4 col-12">
                                <small className="font-italic">Contact</small>
                                <p>{data.contact}</p>
                            </div>
                            <div className="col-md-4 col-12">
                                <small className="font-italic">Address</small>
                                <p>{data.address}</p>
                            </div>
                        </div>
                        <hr></hr>
                        <h5>Products</h5>
                        <table className="table table-sm table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Issue Date</th>
                                    <th scope="col">Return Date</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.products.map((product) => {
                                    return (
                                        <tr>
                                            <th scope="row">{product.id}</th>
                                            <td>{product.description}</td>
                                            <td>{product.date}</td>
                                            <td>{product.returnDate}</td>
                                            <td>{product.qty}</td>
                                            {product.returnable ? <td>Returnable</td> : <td>Non-Returnable</td>}

                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <hr></hr>
                        <h5>Authorization</h5>
                        <div className="row">
                            <div className="col-md-3 col-12">
                                <small className="font-italic">Requested By</small>
                                <p>{data.requestedBy}</p>
                            </div>
                            <div className="col-md-3 col-12">
                                <small className="font-italic">Cordinated By</small>
                                <p>{data.cordinatedBy}</p>
                            </div>
                            <div className="col-md-3 col-12">
                                <small className="font-italic">Carried By</small>
                                <p>{data.carriedBy}</p>
                            </div>
                            <div className="col-md-3 col-12">
                                <small className="font-italic">Verified By</small>
                                <p>{data.verifiedBy}</p>
                            </div>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <br></br>
        </Accordion>
    );
}
