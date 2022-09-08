import React from 'react'
import { Button, Typography, makeStyles } from '@material-ui/core';

const withStyles = makeStyles(() => ({
    sectionOneWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        background: "#AAF0C1",
        height: "500px",
        marginTop: "30px",
        padding: "0 17% 0 17%",
    },
    sectionOneHeader: {
        fontWeight: "bold",
        fontSize: "3rem",
        textAlign: "left",
        marginBottom: "20px"
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
        "&:hover":{
            backgroundColor: "gray"
        }
    },
    bannerImage: {
        width: "200px"
    },
    bannerContentWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        marginRight: "100px",
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
            <div>
                <div>
                    <img className={classes.bannerImage}src="SVG/woman1.svg"/>
                </div>
            </div>
        </div>
    )
}

export default SectionOne