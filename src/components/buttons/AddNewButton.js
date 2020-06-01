import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import firebase from '../../firebase/firebase'


const dateObj = new Date();
const minDateForForm = dateObj.getFullYear() + '-' + String(dateObj.getMonth() + 1).padStart(2, '0') + '-' + String(dateObj.getDate()).padStart(2, '0');

const productMap = {
    id: '',
    description: '',
    returnDate: minDateForForm,
    qty: '1',
    type: 'Returnable',
    idError: '',
    descriptionError: '',
};

let passNo;

export default class AddNewButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            passNo: null,
            isModelOpen: false,
            name: '',
            contact: '',
            address: '',
            requestedBy: '',
            cordinatedBy: '',
            carriedBy: '',
            verifiedBy: '',
            nameError: '',
            contactError: '',
            addressError: '',
            requestedByError: '',
            cordinatedByError: '',
            carriedByError: '',
            verifiedByError: '',
            products: [
                productMap,
            ],
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    componentDidMount() {
        if (this.props.issues.length > 0) {
            passNo = this.props.issues[0].data().passNo + 1;

        } else {
            passNo = 1;
        }
    }

    toggleModal() {
        this.setState({
            isModelOpen: !this.state.isModelOpen,
        })
    }

    handleChange(event) {

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
                returnDate: this.state.products[index].returnDate,
                qty: this.state.products[index].qty,
                type: this.state.products[index].type,
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
                returnDate: this.state.products[index].returnDate,
                qty: this.state.products[index].qty,
                type: this.state.products[index].type,
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
                returnDate: event.target.value,
                qty: this.state.products[index].qty,
                type: this.state.products[index].type,
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
                returnDate: this.state.products[index].returnDate,
                qty: event.target.value,
                type: this.state.products[index].type,
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
                returnDate: this.state.products[index].returnDate,
                qty: this.state.products[index].qty,
                type: event.target.value,
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
            //push to cloud

            const productToUpload = this.state.products.map((product) => {
                console.log('type is', product.type);
                if (product.type === 'Returnable') {
                    return {
                        id: product.id,
                        description: product.description,
                        returnDate: product.returnDate,
                        qty: product.qty,
                        type: 'Returnable',
                        status: false,
                        date: minDateForForm.split("").reverse().join(""),
                    };
                } else {
                    return {
                        id: product.id,
                        description: product.description,
                        returnDate: product.returnDate,
                        qty: product.qty,
                        type: 'Non-Returnable',
                        date: minDateForForm.split("").reverse().join(""),
                    };
                }
            });
            const db = firebase.firestore();
            db.collection('issues').add({
                passNo: passNo,
                name: this.state.name,
                contact: this.state.contact,
                address: this.state.address,
                products: productToUpload,
                verifiedBy: this.state.verifiedBy,
                requestedBy: this.state.requestedBy,
                cordinatedBy: this.state.cordinatedBy,
                carriedBy: this.state.carriedBy
            })
                .then(function () {
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
            this.toggleModal();
            this.setState({
                isModelOpen: false,
                name: '',
                contact: '',
                address: '',
                requestedBy: '',
                cordinatedBy: '',
                carriedBy: '',
                verifiedBy: '',
                nameError: '',
                contactError: '',
                addressError: '',
                requestedByError: '',
                cordinatedByError: '',
                carriedByError: '',
                verifiedByError: '',
                products: [
                    productMap,
                ],
            });
            passNo++;
            console.log('after submitting state is ', this.state);

        }
    }

    addProduct() {
        let temp = this.state.products;
        temp.push(productMap);
        this.setState({
            products: temp,
        });
    }

    removeProduct(index) {
        let temp = this.state.products;
        temp.splice(index, 1);
        this.setState({
            products: temp,
        });
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
                            <p>Gate Pass Number <strong>{passNo}</strong></p>
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
                            <div className="row container mb-1">
                                <h5 >Products Details</h5>
                                <Button variant="outline-dark" onClick={this.addProduct} className="ml-auto">
                                    <span className="fa fa-plus"></span> Product
                                </Button>
                            </div>
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Return Date</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.products.map((product, index) => {
                                        return (
                                            <tr>
                                                <td>
                                                    <input class="form-control align-middle"
                                                        name={'id' + index} id={"id" + index}
                                                        onChange={this.handleChange} type="text">
                                                    </input>
                                                    <small className="text-danger">{product.idError}</small>
                                                </td>
                                                <td>
                                                    <input class="form-control align-middle"
                                                        onChange={this.handleChange}
                                                        name={"description" + index} id={"description" + index}
                                                        type="text">

                                                    </input>
                                                    <small className="text-danger">{product.descriptionError}</small>
                                                </td>
                                                <td>
                                                    <input class="form-control align-middle"
                                                        name={"returnDate" + index} id={"returnDate" + index}
                                                        onChange={this.handleChange} value={product.returnDate}
                                                        type="date" min={minDateForForm}>
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
                                                        onChange={this.handleChange}>
                                                        <option selected>Returnable</option>
                                                        <option>Non-Returnable</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    {index != 0 ?
                                                        <Button variant="outline-danger" onClick={() => this.removeProduct(index)} className="ml-auto">
                                                            <span className="fa fa-times"></span>
                                                        </Button>
                                                        : null}
                                                </td>
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
                            <Button variant="primary" onClick={this.handleSubmit}>New Gate Pass</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </>
        );
    }
}
