import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, withStyles } from '@material-ui/core';

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
});

class Cart extends Component {
    handleAddToCart = event => {
        console.log('cart button working');
    }
    handlePickup = event => {
        console.log('pickup button working');

    }
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Button
                    classes={{
                        root: classes.addButton,
                    }}
                    variant="contained"
                    onClick={this.handleAddToCart}>
                    Add to Cart
                </Button>
                <Button

                    classes={{
                        root: classes.pickupButton,
                    }}
                    variant="contained"
                    onClick={this.handlePickup}>
                    Pick Up In Store
                </Button>
            </div>
        );
    }
};
Cart.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cart);
