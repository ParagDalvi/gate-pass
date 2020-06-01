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
            issues: [],
        }


    }

    async componentDidMount() {
        const db = firebase.firestore();
        db.collection('issues').onSnapshot(
            (querySnapshot) => {
                this.setState({
                    issues: querySnapshot.docs,
                });
            },
            (error) => {
                console.log('custom', error.message);

            });
        this.setState({
            isLoading: false,
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <br></br>
                    <div className="row">
                        <div className="ml-auto">
                            <ExportButton issues={this.state.issues} />
                            <AddNewButton />
                        </div>
                    </div>
                    <ItemsList issues={this.state.issues} loading={this.state.isLoading} />
                </div>
            </div>
        );
    }
}