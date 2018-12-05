import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab, Typography, withStyles } from '@material-ui/core';
import { StarRate } from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';

//this component holds customer reviews
//eventually, reviews will be passed in through
//redux and populated in the tabs

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
});

class Reviews extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <Typography>
                    <StarRate /><StarRate /><StarRate /><StarRate /><StarRate /> overall
                    <br />
                    see all reviews {/*this will eventually be a link that will hold all reviews*/}
                    <h3>What did other Bullseye shoppers think?</h3>
                </Typography>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        <Tab label="Higher Rating" />
                        <Tab label="Lower Rating" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <StarRate /> <StarRate /> <StarRate /> <StarRate /> <StarRate />
                        <h2>Fantastic Blender</h2>
                        This blender works amazingly, and blends within seconds.  The single serve cups also work really well for smoothies or protein shakes!
                    <p>Eric  April 18, 2013</p>
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <StarRate />
                        <h2>Very unhappy</h2>
                        Less than 2 months after purchase it completely stopped working. First it wouldn't detect the pitcher when trying to blend a significant amount, a couple weeks later it wouldn't detect the single serve cup.
                    <p>New York    March 11, 2013</p>
                    </TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

Reviews.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Reviews);
