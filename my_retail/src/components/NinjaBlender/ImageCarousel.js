import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class ImageCarousel extends Component {

    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img width={200} height={175} alt="200x175" src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt01" />
                    <Carousel.Caption>
                        <h3>Get Healthy</h3>
                        <p>Make smoothies with ease</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={200} height={175} alt="200x175" src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt02" />
                    <Carousel.Caption>
                        <h3>Capacity</h3>
                        <p>72oz</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={200} height={175} alt="200x175" src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt03" />
                    <Carousel.Caption>
                        <h3>Low Mess</h3>
                        <p>Less mess, </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={200} height={175} alt="200x175" src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt04" />
                    <Carousel.Caption>
                        <h3>Travels Well</h3>
                        <p>Includes travel cups</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={200} height={175} alt="200x175" src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt05" />
                    <Carousel.Caption>
                        <h3>Container Options</h3>
                        <p>Blend directly into the travel cup</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={200} height={175} alt="200x175" src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt06" />
                    <Carousel.Caption>
                        <h3>Puree</h3>
                        <p>Change the texture of soups</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={200} height={175} alt="200x175" src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt07" />
                    <Carousel.Caption>
                        <h3>Complete</h3>
                        <p>Get started</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default ImageCarousel; 
