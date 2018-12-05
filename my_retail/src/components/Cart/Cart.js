import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, withStyles } from '@material-ui/core';

//this component is the cart for customers
//eventually, customers can add products and
//checkout from here
//the component uses state to determine product availabilty
//the buttons are rendered conditionally based on product availability

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    addButton: {
        background: 'linear-gradient(45deg, black 15%, red 90%)',
        borderRadius: '4',
        border: '15px',
        color: 'antiquewhite',
        fontSize: '20px',
        height: 50,
        width: 200,
        padding: '10 20px',
        boxShadow: '0 3px 5px 2px rgba(100, 105, 135, .3)',
    },
    pickupButton: {
        background: 'linear-gradient(45deg, gray 15%, black 90%)',
        borderRadius: '4',
        border: '15px',
        color: 'antiquewhite',
        fontSize: '20px',
        whiteSpace: 'nowrap',
        height: 50,
        width: 200,
        padding: '10 20px',
        boxShadow: '0 3px 5px 2px rgba(100, 105, 135, .3)',
    },
});//JSS styling for buttons

class Cart extends Component {
    state = {
        productAvailableEverywhere: 0,
        productAvailableOnline: 1,
        productAvailableInStore: 2,
    };
    handleAddToCart = event => {
        alert('Added to Cart!')//eventually add Snackbar or SweetAlerts
    }
    handlePickup = event => {
        alert('Added to In-Store Basket')//eventually add Snackbar or SweetAlerts
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button
                    classes={{
                        root: classes.pickupButton,
                    }}
                    variant="contained"
                    onClick={this.handlePickup}>
                    Pick Up In Store
                </Button>
                {/*this is a ternary operator which will conditionally render the 'Add to Cart' button
                if the product is available onine */}
                {this.state.productAvailableOnline ?
                    <Button
                        classes={{
                            root: classes.addButton,
                        }}
                        variant="contained"
                        onClick={this.handleAddToCart}>
                        Add to Cart
                </Button>
                    : <Button>In Store Only</Button>
                }
            </div>
        );
    }
};
Cart.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cart);
