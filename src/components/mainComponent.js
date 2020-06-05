import React, { Component } from 'react';
import Navbar from './NavbarComponent';
import ItemsList from './ItemsListComponent';
import firebase from '../firebase/firebase';
import AddNewButton from './buttons/AddNewButton';
import ExportButton from './buttons/ExportComponent';
import Login from './LoginComponent';


export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            isLoading: true,
            issues: null,
        }
    }

    async componentDidMount() {
        this.authListener();
    }

    authListener() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
                const db = firebase.firestore();
                db.collection('issues').orderBy('passNo', 'desc').onSnapshot(
                    (querySnapshot) => {
                        this.setState({
                            issues: querySnapshot.docs,
                            isLoading: false,
                        });
                    },
                    (error) => {
                        console.log('custom', error.message);
                    });
            } else {
                this.setState({ user: null })
            }
        });
    }

    render() {

        if (this.state.user) {

            return (
                <div>
                    <Navbar frompage="main" />
                    {
                        this.state.issues
                            ? <div className="container">
                                <br></br>
                                <div className="row">
                                    <div className="ml-auto">
                                        <ExportButton issues={this.state.issues} />
                                        <AddNewButton issues={this.state.issues} />
                                    </div>
                                </div>
                                <ItemsList issues={this.state.issues} loading={this.state.isLoading} />
                            </div>
                            : <p>Loading..</p>
                    }
                </div>
            );
        } else {

            return (
                <Login />
            );
        }
    }
}