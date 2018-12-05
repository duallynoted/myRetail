import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';

////will eventually be added to project for client side routing

const styles = {
    appBar: {
        backgroundColor: "#335393",
        textAlign: "center",
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};//JSS for navBar

class Nav extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static" className={classes.appBar} >
                    <Toolbar>
                        <Typography variant="h5" color="inherit" className={classes.grow}>
                            <Link className="nav-title" to="/products">
                                {/* <img src={Logo} height="60" alt="logo" /> */}
                                Bullseye
                        </Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Nav.propTypes = { classes: PropTypes.object.isRequired };

const navStyles = withStyles(styles)(Nav);

const navStylesRouter = withRouter(navStyles)

export default connect()(navStylesRouter);
