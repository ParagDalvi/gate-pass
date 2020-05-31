import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';


export default class AddNewButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModelOpen: false,
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModelOpen: !this.state.isModelOpen,
        })
    }

    render() {
        return (
            <>
                <Button variant="outline-dark" onClick={this.toggleModal}>
                    <span className="fa fa-plus"></span> New
                </Button>

                <Modal show={this.state.isModelOpen} onHide={this.toggleModal} size="lg">
                    <form>
                        <Modal.Header closeButton>
                            <Modal.Title>New Gate Pass</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Gate Pass Number <strong>178</strong></p>
                            <h5>Personal Details</h5>
                            <div className="row mt-2">
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name" className='form-control' placeholder='Name'></input>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="contact">Contact</label>
                                        <input type="tel" name="contact" id="contact" className='form-control' placeholder='Contact number'></input>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6 col-12'>
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <textarea className='form-control' rows='3' id='address' name='address'></textarea>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <h5>Products Details</h5>
                            <div className="row mt-2">
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="id">Product ID</label>
                                        <input class="form-control" name="id" id="id" type="text" placeholder="ID"></input>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="description">Product Description</label>
                                        <input type="text" name="description" id="description" className='form-control' placeholder='Product Description'></input>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="qty">Quantity</label>
                                        <input type="number" min="1" name="qty" id="qty" className='form-control' placeholder='Quantity'></input>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="type">Type</label>
                                        <select className="form-control" name="type" id="type">
                                            <option selected>Returnable</option>
                                            <option>Non-Returnable</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="date">Issue Date</label>
                                        <input class="form-control" type="text" placeholder="Readonly input here…" value="Today" readonly></input>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="returnDate">Expected Date of Return</label>
                                        <input type="date" name="returnDate" id="returnDate" className='form-control' placeholder='Return Date'></input>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <h5>Authorization</h5>
                            <div className="row mt-2">
                                <div className="col-md-3 col-6">
                                    <div className="form-group">
                                        <label htmlFor="requestedBy">Requested By</label>
                                        <input type="text" name="requestedBy" id="requestedBy" className='form-control' placeholder='Requested By'></input>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="form-group">
                                        <label htmlFor="cordinatedBy">Cordinated By</label>
                                        <input type="text" name="cordinatedBy" id="cordinatedBy" className='form-control' placeholder='Cordinated By'></input>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="form-group">
                                        <label htmlFor="carriedBy">Carried By</label>
                                        <input type="text" name="carriedBy" id="carriedBy" className='form-control' placeholder='Carried By'></input>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="form-group">
                                        <label htmlFor="verifiedBy">Verified By</label>
                                        <input type="text" name="verifiedBy" id="verifiedBy" className='form-control' placeholder='Verified By'></input>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.toggleModal}>Close</Button>
                            <Button variant="primary">New Gate Pass</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </>
        );
    }
}