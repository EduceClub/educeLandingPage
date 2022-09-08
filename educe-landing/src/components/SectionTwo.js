import { Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import StickyNote from '../assets/luis-villasmil-mlVbMbxfWI4-unsplash.jpg'

const withStyles = makeStyles(() => ({
    sectionTwoWrapper: {
        display: "flex",
        alignItems: "center",
        padding: "0 17% 0 17%",
        margin: "auto",
        background: "black"
    },
    sectionTwoHeader: {
        fontWeight: "bold",
        fontSize: "3rem",
        textAlign: "left",
        "& > span": {
            color: "#AAF0C1"
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
        width: "60%",
        color: "white"
    },
    sectionTwoImage: {
        maxHeight: "450px",
        margin: "50px 0 50px 50px",
        borderRadius: "35px"
    },
    imageWrapper: {
        // width: "60%"
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
            <div className={classes.imageWrapper}>
                <img className={classes.sectionTwoImage} src={StickyNote} />
            </div>
        </div>
    )
}

export default SectionTwo