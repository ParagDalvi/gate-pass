import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import firebase from '../../firebase/firebase'

export default class AddNewButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            passNo: this.props.data.passNo,
            isModelOpen: false,
            name: this.props.data.name,
            contact: this.props.data.contact,
            address: this.props.data.address,
            requestedBy: this.props.data.requestedBy,
            cordinatedBy: this.props.data.cordinatedBy,
            carriedBy: this.props.data.carriedBy,
            verifiedBy: this.props.data.verifiedBy,
            nameError: this.props.data.nameError,
            contactError: this.props.data.contactError,
            addressError: this.props.data.addressError,
            requestedByError: this.props.data.requestedByError,
            cordinatedByError: this.props.data.cordinatedByError,
            carriedByError: this.props.data.carriedByError,
            verifiedByError: this.props.data.verifiedByError,
            products: this.props.data.products,
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateInput = this.validateInput.bind(this);
    }

    toggleModal() {
        this.setState({
            isModelOpen: !this.state.isModelOpen,
            passNo: this.props.data.passNo,
            name: this.props.data.name,
            contact: this.props.data.contact,
            address: this.props.data.address,
            requestedBy: this.props.data.requestedBy,
            cordinatedBy: this.props.data.cordinatedBy,
            carriedBy: this.props.data.carriedBy,
            verifiedBy: this.props.data.verifiedBy,
            nameError: this.props.data.nameError,
            contactError: this.props.data.contactError,
            addressError: this.props.data.addressError,
            requestedByError: this.props.data.requestedByError,
            cordinatedByError: this.props.data.cordinatedByError,
            carriedByError: this.props.data.carriedByError,
            verifiedByError: this.props.data.verifiedByError,
            products: this.props.data.products,
        })
    }

    handleChange(event) {
        console.log(event.target.value);

        if (event.target.name === 'contact') {
            const re = /^[0-9\b]+$/;
            if (event.target.value === '' || re.test(event.target.value)) {
                this.setState({ [event.target.name]: event.target.value, })
            }
        } else if (event.target.name.includes('id')) {
            const index = event.target.name.replace(/^\D+/g, "");
            let tempProducts = this.state.products;
            tempProducts[index] = {
                id: event.target.value,
                description: this.state.products[index].description,
                date: this.state.products[index].date,
                returnDate: this.state.products[index].returnDate,
                qty: this.state.products[index].qty,
                type: this.state.products[index].type,
                status: this.state.products[index].status,
                idError: this.state.products[index].idError,
                descriptionError: this.state.products[index].descriptionError,
            };
            this.setState({
                products: tempProducts,
            });
        } else if (event.target.name.includes('description')) {
            const index = event.target.name.replace(/^\D+/g, "");
            let tempProducts = this.state.products;
            tempProducts[index] = {
                id: this.state.products[index].id,
                description: event.target.value,
                date: this.state.products[index].date,
                returnDate: this.state.products[index].returnDate,
                qty: this.state.products[index].qty,
                type: this.state.products[index].type,
                status: this.state.products[index].status,
                idError: this.state.products[index].idError,
                descriptionError: this.state.products[index].descriptionError,
            };
            this.setState({
                products: tempProducts,
            });
        } else if (event.target.name.includes('returnDate')) {
            const index = event.target.name.replace(/^\D+/g, "");
            let tempProducts = this.state.products;
            tempProducts[index] = {
                id: this.state.products[index].id,
                description: this.state.products[index].description,
                date: this.state.products[index].date,
                returnDate: event.target.value,
                qty: this.state.products[index].qty,
                type: this.state.products[index].type,
                status: this.state.products[index].status,
                idError: this.state.products[index].idError,
                descriptionError: this.state.products[index].descriptionError,
            };
            this.setState({
                products: tempProducts,
            });
        } else if (event.target.name.includes('qty')) {
            const index = event.target.name.replace(/^\D+/g, "");
            let tempProducts = this.state.products;
            tempProducts[index] = {
                id: this.state.products[index].id,
                description: this.state.products[index].description,
                date: this.state.products[index].date,
                returnDate: this.state.products[index].returnDate,
                qty: event.target.value,
                type: this.state.products[index].type,
                status: this.state.products[index].status,
                idError: this.state.products[index].idError,
                descriptionError: this.state.products[index].descriptionError,
            };
            this.setState({
                products: tempProducts,
            });
        }
        else if (event.target.name.includes('type')) {
            const index = event.target.name.replace(/^\D+/g, "");
            let tempProducts = this.state.products;
            tempProducts[index] = {
                id: this.state.products[index].id,
                description: this.state.products[index].description,
                date: this.state.products[index].date,
                returnDate: this.state.products[index].returnDate,
                qty: this.state.products[index].qty,
                type: event.target.value,
                status: this.state.products[index].status,
                idError: this.state.products[index].idError,
                descriptionError: this.state.products[index].descriptionError,
            };
            this.setState({
                products: tempProducts,
            });
        } else if (event.target.name.includes('status')) {
            const index = event.target.name.replace(/^\D+/g, "");
            let tempProducts = this.state.products;
            tempProducts[index] = {
                id: this.state.products[index].id,
                description: this.state.products[index].description,
                date: this.state.products[index].date,
                returnDate: this.state.products[index].returnDate,
                qty: this.state.products[index].qty,
                type: this.state.products[index].type,
                status: event.target.value,
                idError: this.state.products[index].idError,
                descriptionError: this.state.products[index].descriptionError,
            };
            this.setState({
                products: tempProducts,
            });
        }
        else {
            this.setState({
                [event.target.name]: event.target.value,
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.validateInput()) {
            //update cloud document
            const db = firebase.firestore();

            const updatedProduct = this.state.products.map((product) => {
                console.log('details', product);

                return {
                    date: product.date,
                    description: product.description,
                    id: product.id,
                    qty: product.qty,
                    returnDate: product.returnDate,
                    type: product.type,
                    status: product.status,
                };
            });

            db.collection('issues').doc(this.state.passNo.toString()).update({
                address: this.state.address,
                carriedBy: this.state.carriedBy,
                contact: this.state.contact,
                cordinatedBy: this.state.cordinatedBy,
                name: this.state.name,
                passNo: this.state.passNo,
                requestedBy: this.state.requestedBy,
                verifiedBy: this.state.verifiedBy,
                products: updatedProduct,
            });

            this.toggleModal();
        }
    }

    validateInput() {
        const name = this.state.name;
        const contact = this.state.contact;
        const requestedBy = this.state.requestedBy;
        const cordinatedBy = this.state.cordinatedBy;
        const carriedBy = this.state.carriedBy;
        const verifiedBy = this.state.verifiedBy;


        var nameError = '';
        var contactError = '';
        var requestedByError = '';
        var cordinatedByError = '';
        var carriedByError = '';
        var verifiedByError = '';

        var success = true;

        if (name.length === 0) {
            nameError = 'Cannot be empty';
            success = false;
        } else if (name.length < 3) {
            nameError = 'Too short';
            success = false;
        }
        if (contact.length === 0) {
            contactError = 'Cannot be empty';
            success = false;
        } else if (contact.length < 9) {
            contactError = 'Too short';
            success = false;
        }
        if (requestedBy.length === 0) {
            requestedByError = 'Cannot be empty';
            success = false;
        } else if (requestedBy.length < 3) {
            requestedByError = 'Too short';
            success = false;
        }
        if (cordinatedBy.length === 0) {
            cordinatedByError = 'Cannot be empty';
            success = false;
        } else if (cordinatedBy.length < 3) {
            cordinatedByError = 'Too short';
            success = false;
        }
        if (carriedBy.length === 0) {
            carriedByError = 'Cannot be empty';
            success = false;
        } else if (carriedBy.length < 3) {
            carriedByError = 'Too short';
            success = false;
        }
        if (verifiedBy.length === 0) {
            verifiedByError = 'Cannot be empty';
            success = false;
        } else if (verifiedBy.length < 3) {
            verifiedByError = 'Too short';
            success = false;
        }

        let tempProducts = [];

        for (let index = 0; index < this.state.products.length; index++) {

            const product = this.state.products[index];
            console.log(product);
            var idError = '';
            var descriptionError = '';
            if (product.id.trim().length === 0) {
                idError = 'Cannot be empty';
                success = false;
            }
            if (product.description.trim().length === 0) {
                descriptionError = 'Cannot be empty';
                success = false;
            } else if (product.description.trim().length < 3) {

                descriptionError = 'Too short';
                success = false;
            }
            tempProducts.push({
                id: product.id,
                description: product.description,
                returnDate: product.returnDate,
                qty: product.qty,
                type: product.type,
                idError: idError,
                descriptionError: descriptionError,
            });
        }

        this.setState({
            nameError: nameError,
            contactError: contactError,
            requestedByError: requestedByError,
            cordinatedByError: cordinatedByError,
            carriedByError: carriedByError,
            verifiedByError: verifiedByError,
            products: tempProducts
        });

        return success;
    }


    render() {
        console.log('new item', this.props.data);

        return (
            <>
                <Button variant="outline-dark" onClick={this.toggleModal}>
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                </Button>

                <Modal show={this.state.isModelOpen} onHide={this.toggleModal} size="lg">
                    <form>
                        <Modal.Header closeButton>
                            <Modal.Title>New Gate Pass</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Gate Pass Number <strong>{this.state.passNo}</strong></p>
                            <h5>Personal Details</h5>
                            <div className="row mt-2">
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name"
                                            value={this.state.name} onChange={this.handleChange}
                                            className='form-control' placeholder='Name'></input>
                                        <small className="text-danger">{this.state.nameError}</small>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="contact">Contact</label>
                                        <input type="tel" name="contact" id="contact" onChange={this.handleChange}
                                            value={this.state.contact}
                                            className='form-control' value={this.state.contact} placeholder='Contact number'></input>
                                        <small className="text-danger">{this.state.contactError}</small>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6 col-12'>
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <textarea className='form-control' rows='3' id='address'
                                            value={this.state.address}
                                            onChange={this.handleChange} name='address'></textarea>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <h5 >Products Details</h5>
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Return Date</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Returened</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {this.state.products.map((product, index) => {
                                        return (
                                            <tr>
                                                <td>
                                                    <input class="form-control align-middle"
                                                        name={'id' + index} id={"id" + index}
                                                        value={product.id}
                                                        onChange={this.handleChange} type="text">
                                                    </input>
                                                    <small className="text-danger">{product.idError}</small>
                                                </td>
                                                <td>
                                                    <input class="form-control align-middle"
                                                        onChange={this.handleChange} value={product.description}
                                                        name={"description" + index} id={"description" + index}
                                                        type="text">

                                                    </input>
                                                    <small className="text-danger">{product.descriptionError}</small>
                                                </td>
                                                <td>
                                                    <input class="form-control align-middle"
                                                        name={"returnDate" + index} id={"returnDate" + index}
                                                        onChange={this.handleChange} value={product.returnDate}
                                                        type="date" >
                                                    </input>
                                                </td>
                                                <td>
                                                    <input class="form-control align-middle"
                                                        name={"qty" + index} id={"qty" + index}
                                                        onChange={this.handleChange} value={product.qty}
                                                        type="number" min="1">
                                                    </input>
                                                </td>
                                                <td>
                                                    <select className="form-control align-middle" name={"type" + index}
                                                        id={"type" + index}
                                                        value={product.type}
                                                        onChange={this.handleChange}>
                                                        <option selected>Returnable</option>
                                                        <option>Non-Returnable</option>
                                                    </select>
                                                </td>
                                                {
                                                    product.type === 'Returnable'
                                                        ? <td className="align-middle">
                                                            <div class="form-check">
                                                                <input class="form-check-input position-static" onChange={this.handleChange}
                                                                    type="checkbox" name={"status" + index} id={"status" + index} value="option1" aria-label="..." />
                                                            </div>
                                                        </td>
                                                        : <td className="align-middle">
                                                            <div class="form-check">
                                                                <input disabled class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />
                                                            </div>
                                                        </td>
                                                }
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <h5>Authorization</h5>
                            <div className="row mt-2">
                                <div className="col-md-3 col-6">
                                    <div className="form-group">
                                        <label htmlFor="requestedBy">Requested By</label>
                                        <input type="text" name="requestedBy" id="requestedBy"
                                            onChange={this.handleChange} value={this.state.requestedBy}
                                            className='form-control' placeholder='Requested By'></input>
                                        <small className="text-danger">{this.state.requestedByError}</small>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="form-group">
                                        <label htmlFor="cordinatedBy">Cordinated By</label>
                                        <input type="text" name="cordinatedBy" id="cordinatedBy"
                                            onChange={this.handleChange} value={this.state.cordinatedBy}
                                            className='form-control' placeholder='Cordinated By'></input>
                                        <small className="text-danger">{this.state.cordinatedByError}</small>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="form-group">
                                        <label htmlFor="carriedBy">Carried By</label>
                                        <input type="text" name="carriedBy" id="carriedBy"
                                            onChange={this.handleChange} value={this.state.carriedBy}
                                            className='form-control' placeholder='Carried By'></input>
                                        <small className="text-danger">{this.state.carriedByError}</small>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="form-group">
                                        <label htmlFor="verifiedBy">Verified By</label>
                                        <input type="text" name="verifiedBy" id="verifiedBy"
                                            onChange={this.handleChange} value={this.state.verifiedBy}
                                            className='form-control' placeholder='Verified By'></input>
                                        <small className="text-danger">{this.state.verifiedByError}</small>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.toggleModal}>Close</Button>
                            <Button variant="primary" onClick={this.handleSubmit}>Update</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </>
        );
    }
}
