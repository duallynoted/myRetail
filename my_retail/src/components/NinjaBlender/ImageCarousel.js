import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class ImageCarousel extends Component {

    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img width={200} height={175} alt="200x175" src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt01" />
                    <Carousel.Caption>
                        <h3>Get</h3>
                        <h3>Healthy</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={200} height={175} alt="200x175" src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt02" />
                    <Carousel.Caption>
                        <h3>72 oz.</h3>
                        <h3>Capacity</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={200} height={175} alt="200x175" src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt03" />
                    <Carousel.Caption>
                        <h3>Low</h3>
                        <h3>Mess</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={200} height={175} alt="200x175" src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt04" />
                    <Carousel.Caption>
                        <h3>Travels</h3>
                        <h3>Well</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={200} height={175} alt="200x175" src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt05" />
                    <Carousel.Caption>
                        <h3>Easy</h3>
                        <h3>to Use</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={200} height={175} alt="200x175" src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt06" />
                    <Carousel.Caption>
                        <h3>Puree </h3>
                        <h3>Soups</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={200} height={175} alt="200x175" src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt07" />
                    <Carousel.Caption>
                        <h3>Let's Get</h3>
                        <h3>Started</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default ImageCarousel; 
