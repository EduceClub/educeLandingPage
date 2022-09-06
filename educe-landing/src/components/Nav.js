import React from 'react'
import { makeStyles } from "@mui/styles";
import { Button, Typography } from '@mui/material';
import { flexbox } from '@mui/system';

const withStyles = makeStyles(() => ({
    navbarWrapper: {
        display: "flex",
        justifyContent: "space-between",
        background: "white",
        height: "75px",
        border: "1px solid black"
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
                    src="/educeLogo.png"
                    alt="company logo"
                />
            </div>
            <div className={classes.navbarMenuWrapper}>
                <Typography class={classes.menuItem}>How it Works</Typography>
                <Typography className={classes.menuItem}>Contact</Typography>
                <Button>Login</Button>
            </div>
        </div>
    )
}

export default Nav;
