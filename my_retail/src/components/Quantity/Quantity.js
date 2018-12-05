import React, { Component } from 'react';
import { Button, Label } from 'react-bootstrap';
import { Add, Minimize } from '@material-ui/icons'

class Quantity extends Component {
    state = {
        count: 1,
    }
    handleQuantityIncrease = () => {
        this.setState({
            count: this.state.count + 1
        })
        if (this.state.count === 4)
            alert('You have reached the maximum allowable quantity for this product');
    }
    handleQuantityDecrease = () => {
        this.setState({
            count: this.state.count - 1
        })
        if (this.state.count === 0) {
            alert('Please add to your cart.');
        }
    }

    render() {
        return (
            <div className="well">
                <div id="wellText">
                    quantity:
                    </div>
                <div id="wellFunction">
                    <Button onClick={this.handleQuantityDecrease}><Minimize /></Button>
                    <Label>{this.state.count}</Label>
                    <Button onClick={this.handleQuantityIncrease}><Add /></Button>
                </div>
            </div>
        );
    }
}

export default Quantity;
