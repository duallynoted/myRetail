import React, { Component } from 'react';
import '../App/App.css';
import { Carousel } from 'react-bootstrap';

class ImageCarousel extends Component {

    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img width={250} height={200} alt="900x500" src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt01" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={250} height={200} alt="900x500" src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt02" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={250} height={200} alt="900x500" src="http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt03" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default ImageCarousel; 
