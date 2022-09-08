import React, { useState } from 'react'
import { Button, Typography, makeStyles } from '@material-ui/core';
import EduceLogo from '../assets/educeLogo.png'
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const withStyles = makeStyles(() => ({
    navbarWrapper: {
        display: "flex",
        justifyContent: "space-between",
        background: "#AAF0C1",
        height: "75px",
        position: "fixed",
        top: 0,
        width: "100%"
    },
    navbarImage: {
        width: "200px",
        margin: "10px"
    },
    navbarMenuWrapper: {
        display: "flex",
        "@media(max-width: 600px)": {
            display: "none"
        }
    },
    menuItem: {
        margin: "auto 15px auto 15px !important",
    },
    loginButton: {
        backgroundColor: "black",
        color: "white",
        borderRadius: "35px",
        height: "35px",
        margin: "auto",
        marginRight: "10px"
    },
    loginButtonMobile: {
        "& span": {
            color: "white",
        }
    
    },
    navBarHamburgerDrawerWrapper: {
        display: "none",
        "@media(max-width: 600px)": {
            display: "flex"
        }
    },
    hamburgerIcon: {
        margin: "20px",
        fontSize: "2.5rem",
        "@media(min-width: 601px)": {
            display: "none"
        }
    },
    drawerItem: {
        "&:hover":{
            backgroundImage: "black",
            border: "1px solid #000000",
            color: "black"
        },
        "&:selected:hover":{
            backgroundImage: "black",
            border: "1px solid #000000",
            color: "black"
        }
      },
      drawerItemLogin: {
        backgroundColor: "black",
      },
      list: {
        width: "250px"
      },

}));

const Nav = () => {

    const classes = withStyles();

    const [openDrawer, setOpenDrawer] = useState(false)

    const toggleDrawer = () => {
        setOpenDrawer(drawerOpen => !drawerOpen)
    }

    const handleClick = (id) => {
        // let scrollToId = id
        // setTimeout(() => scrollTo(scrollToId), 100)
    }
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
                <Button className={classes.loginButton}>Login</Button>
            </div>
            <div className={classes.navBarHamburgerDrawerWrapper}>
                <MenuIcon
                    className={classes.hamburgerIcon}
                    onClick={toggleDrawer}
                />
                <Drawer
                    open={openDrawer}
                    onClose={toggleDrawer}
                    anchor="right"
                    className={classes.drawerRoot}
                >
                    <div
                        className={classes.list}
                        role="presentation"
                        onClick={toggleDrawer}
                        onKeyDown={toggleDrawer}
                    >
                        <List>
                            <ListItem
                                className={classes.drawerItem}
                                button
                            // onClick={() => handleClick('#services')}
                            >
                                <ListItemText primary={"How it Works"} />
                            </ListItem>
                            <ListItem
                                className={classes.drawerItem}
                                button
                            // onClick={() => scrollTo('#about')}
                            // onClick={() => handleClick("#about")}
                            >
                                <ListItemText primary={"Contact"} />
                            </ListItem>
                            <ListItem
                                className={classes.drawerItemLogin}
                                button
                            // onClick={() => handleClick('#contactForm')}
                            >
                                <ListItemText className={classes.loginButtonMobile} primary={"Login"} />
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </div>
        </div>
    )
}

export default Nav;
