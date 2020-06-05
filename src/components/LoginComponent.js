import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import firebase from '../../src/firebase/firebase'

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errorMessage: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(user => {
                console.log(user);
            }
            ).catch(e => {
                this.setState({
                    errorMessage: e.message,
                })
            });
    }



    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="row mt-5">
                    <div className="col-md-6 offset-md-3 col-10 offset-1">
                        <form onSubmit={this.handleSubmit}>
                            <div className="container">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-4">Gate Pass System Login</h5>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control"
                                                id="exampleInputEmail1"
                                                onChange={this.handleChange}
                                                name="email"
                                                aria-describedby="emailHelp" placeholder="Enter email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input type="password"
                                                className="form-control"
                                                onChange={this.handleChange}
                                                name="password"
                                                id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <button type="submit" className="btn btn-outline-dark">Login</button>
                                        <small className="text-danger ml-3">{this.state.errorMessage}</small>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}