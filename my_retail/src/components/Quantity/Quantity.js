import React, { Component } from 'react';
import { Well, Button } from 'react-bootstrap';

class Quantity extends Component {
    state = {
        count: 1,
    }
    handleQuantityIncrease = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state);
    }
    handleQuantityDecrease = () => {
        this.setState({
            count: this.state.count - 1
        })
        console.log(this.state);
    }

    render() {
        return (
            <div className="App">
                <Well><Button onClick={this.handleQuantityIncrease}>More</Button>
                    <Button onClick={this.handleQuantityDecrease}>Less</Button>
                </Well>
            </div>
        );
    }
}

export default Quantity;
