import React from 'react'
import { Button, Typography, makeStyles } from '@material-ui/core';
import EduceLogo from '../assets/educeLogo.png'

const withStyles = makeStyles(() => ({
    navbarWrapper: {
        display: "flex",
        justifyContent: "space-between",
        background: "#AAF0C1",
        height: "75px",
        position: "fixed",
        top:0,
        width: "100%"
    },
    navbarImage: {
        width: "200px",
        margin: "10px"
    },
    navbarMenuWrapper: {
        display: "flex"
    },
    menuItem: {
        margin: "auto 15px auto 15px !important",
    }

}));

const Nav = () => {

    const classes = withStyles();
    return (
        <div className={classes.navbarWrapper}>
            <div>
                <img
                    className={classes.navbarImage}
                    src={EduceLogo}
                    alt="company logo"
                />
            </div>
            <div className={classes.navbarMenuWrapper}>
                <Typography className={classes.menuItem}>How it Works</Typography>
                <Typography className={classes.menuItem}>Contact</Typography>
                <Button>Login</Button>
            </div>
        </div>
    )
}

export default Nav;
