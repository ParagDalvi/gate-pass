import React, { Component } from 'react';
import Navbar from './NavbarComponent';
import ItemsList from './ItemsListComponent';
import firebase from '../firebase/firebase';
import AddNewButton from './buttons/AddNewButton';
import ExportButton from './buttons/ExportComponent';


export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            issues: null,
        }
    }

    async componentDidMount() {
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
    }

    render() {
        return (
            <div>
                <Navbar />
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
    }
}