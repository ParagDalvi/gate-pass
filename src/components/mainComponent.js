import React, { Component } from 'react';
import Navbar from './NavbarComponent';
import ItemsList from './ItemsListComponent';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ItemsList />
            </div>
        );
    }
}