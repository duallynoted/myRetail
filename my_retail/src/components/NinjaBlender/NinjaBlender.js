import React, { Component } from 'react';
import '../App/App.css';
import ImageCarousel from './ImageCarousel';
import { Label, PageHeader } from 'react-bootstrap';
import { Divider } from '@material-ui/core'



class NinjaBlender extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="leftSide">
                        <h3>Ninja &trade; Professional Blender with Single Serve Blending Cups</h3>
                        <img src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758" />
                        <br />
                        <br />
                        <ImageCarousel />
                    </div>
                    <div className="rightSide">
                        <PageHeader>
                            $139.99 <small>online price</small>
                        </PageHeader>
                        <PageHeader>
                            <small>spend $50, ship free</small>
                            <br />
                            <small>$25 gift card with purchase of select Ninja Blender</small>
                        </PageHeader>
                    </div>



                </header>
            </div>
        );
    }
}

export default NinjaBlender;
{/* <Button bsStyle="primary">Click</Button> */ }
// const json = require('./item-data.json');