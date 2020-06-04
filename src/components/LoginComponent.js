import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import firebase from '../../src/firebase/firebase'

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
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
        console.log(this.state);
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(user => console.log(user)
            );
    }

    render() {
        return (
            <div>
                <NavbarComponent />
                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" onChange={this.handleChange} placeholder="email"></input>
                    <input name="password" type="password" onChange={this.handleChange} placeholder="pass"></input>
                    <input type="submit" onChange={this.handleChange} value="sub"></input>
                </form>
            </div>
        );
    }
}