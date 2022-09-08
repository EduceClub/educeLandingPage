import React from 'react'
import { Button, Typography, makeStyles } from '@material-ui/core';
import OrganizeOne from '../assets/organizationImage.svg'

const withStyles = makeStyles(() => ({
    sectionOneWrapper: {
        display: "flex",
        alignItems: "center",
        background: "#AAF0C1",
        height: "500px",
        marginTop: "40px",
        padding: "0px 14% 0 14%",
        "@media(max-width: 600px)": {
            flexDirection: "column",
            paddingTop: "100px"
        }
    },
    sectionOneHeader: {
        fontWeight: "bold",
        fontSize: "3rem",
        textAlign: "left",
        marginBottom: "20px",
        "@media(max-width: 600px)": {
            fontSize: "2rem"
        }
    },
    sectionOneSubheader: {
        fontSize: "1rem",
        textAlign: "left"
    },
    sectionOneJoinButton: {
        background: "black",
        color: "white",
        borderRadius: "20px",
        width: "200px",
        height: "50px",
        margin: "20px 0 20px 0",
        fontSize: "1.125rem",
        "& > span": {
            textTransform: "none",
        },
        "&:hover": {
            backgroundColor: "gray"
        },
        "@media(max-width: 600px)": {
            width: "100%"
        }
    },
    bannerImage: {
        width: "53vw",
        "@media(max-width: 600px)": {
            minWidth: "80vw"
        }
    },
    bannerContentWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minWidth: "32vw"
    },
    bannerImageWrapper: {
        display: "flex",
    }

}));



const SectionOne = () => {

    const classes = withStyles();

    return (
        <div className={classes.sectionOneWrapper}>
            <div className={classes.bannerContentWrapper}>
                <Typography className={classes.sectionOneHeader}>Simplify your knowledge</Typography>
                <Typography className={classes.sectionOneSubheader}>Capture and build on your insights like never before.</Typography>
                <Button className={classes.sectionOneJoinButton}>Learn More</Button>
            </div>
            <div className={classes.bannerImageWrapper}>
                <img className={classes.bannerImage} src={OrganizeOne} />
            </div>
        </div>
    )
}

export default SectionOne