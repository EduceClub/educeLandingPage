import { Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import ConfusionGuy from '../assets/confusionGuy.svg'

const withStyles = makeStyles(() => ({
    sectionTwoWrapper: {
        display: "flex",
        alignItems: "center",
        padding: "0 14% 0 14%",
        margin: "auto",
        background: "black",
        height: "500px",
        "@media(max-width: 600px)": {
            flexDirection: "column",
            height: "auto"
        }
    },
    sectionTwoHeader: {
        fontWeight: "bold",
        fontSize: "3rem",
        textAlign: "left",
        "& > span": {
            color: "#AAF0C1"
        },
        "@media(max-width: 600px)": {
            fontSize: "2rem"
        }
    },
    sectionTwoText: {
        fontSize: "1rem",
        textAlign: "left",
        margin: "10px 0 10px 0",
    },
    sectionTwoContentWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minWidth: "40%",
        color: "white",
        maxHeight: "500px"
    },
    sectionTwoImage: {
        borderRadius: "35px",
        width: "53vw",
        "@media(max-width: 600px)": {
            minWidth: "80vw"
        }
    },
    imageWrapper: {
        display: "flex",
        marginLeft: "-150px",
        "@media(max-width: 600px)": {
            marginLeft: "0px"
        }
    },
    sectionTwoHeaderTextWrapper: {
        display: "flex",
        margin: "0px 0 20px 0"
    },
    sectionTwoContentTextWrapper: {
        display: "flex",
        flexDirection: "column",
    }

}));


const SectionTwo = () => {

    const classes = withStyles();

    return (
        <div className={classes.sectionTwoWrapper}>
            <div className={classes.imageWrapper}>
                <img className={classes.sectionTwoImage} src={ConfusionGuy} />
            </div>
            <div className={classes.sectionTwoContentWrapper}>
                <div className={classes.sectionTwoHeaderTextWrapper}>
                    <Typography className={classes.sectionTwoHeader}>Information overload is<span>&nbsp;real</span></Typography>
                </div>
                <div className={classes.sectionTwoContentTextWrapper}>
                    <Typography className={classes.sectionTwoText}>Do you have insights, quotes, and reminders on sticky notes, in physical and online notebooks,
                        and 101 other places...and still forget where you put that one piece of information you need right now?</Typography>
                    <Typography className={classes.sectionTwoText}>Wish you had a way to build upon the insights you captured in a meaningful way?</Typography>
                    <Typography className={classes.sectionTwoText}>Educe is setup to be your central repository for you to store your short insights and then build upon them.</Typography>
                </div>
            </div>

        </div>
    )
}

export default SectionTwo