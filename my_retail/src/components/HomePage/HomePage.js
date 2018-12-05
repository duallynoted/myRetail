import React, { Component } from 'react';
import '../App/App.css';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';

// import Nav from '../Nav/Nav';

//this component will eventually get a nav bar
//with links to products and services

class HomePage extends Component {
    render() {
        return (
            <div className="App">
                <header className="companyName">
                    <center>
                        <h1>Bullseye</h1>
                        <TrackChangesIcon />

                    </center>
                    {/* <Nav /> */}

                </header>
            </div>
        );
    }
}

export default HomePage;
