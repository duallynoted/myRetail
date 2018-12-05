import React, { Component } from 'react';
import '../App/App.css';
import ImageCarousel from './ImageCarousel';
// const json = require('./item-data.json');
// import { Button } from 'react-bootstrap';


class NinjaBlender extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Ninja Blender</h1>
                    <img src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt01" />
                    {/* <Button bsStyle="primary">Click</Button> */}
                    <ImageCarousel />

                </header>
            </div>
        );
    }
}

export default NinjaBlender;
