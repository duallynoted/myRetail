import React, { Component } from 'react';
import '../App/App.css';
import ImageCarousel from './ImageCarousel';
import { PageHeader } from 'react-bootstrap';
import Quantity from '../Quantity/Quantity';
import Cart from '../Cart/Cart';
import Reviews from '../Reviews/Reviews';



class NinjaBlender extends Component {

    render() {


        return (
            <div className="App">
                <header className="App-header">
                    <div className="leftSide">
                        <h3>Ninja &trade; Professional Blender with Single Serve Blending Cups</h3>
                        <img src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758" alt="PrimaryPhoto" />
                        <br />
                        <br />
                        <ImageCarousel />
                        <br />
                        <Reviews />
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
                        <Quantity />
                        <Cart />
                        <h1>product highlights</h1>
                        <ul>
                            <li>Wattage Output: 1100 Watts</li>
                            <li>Number of Speeds: 3 </li>
                            <li>Capacity (volume): 72.0 Oz.</li>
                            <li>Appliance Capabilities: Blends</li>
                            <li>Includes: Travel Lid</li>
                            <li>Material: Plastic</li>
                            <li>Finish: Painted</li>
                            <li>Metal Finish: Chrome</li>
                            <li>Safety and Security Features: Non-Slip Base</li>
                            <li>Care and Cleaning: Easy-To-Clean, Dishwasher Safe Parts</li>
                        </ul>
                    </div>
                </header>
            </div>
        );
    }
}

export default NinjaBlender;
