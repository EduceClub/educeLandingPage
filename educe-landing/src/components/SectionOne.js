import React from 'react'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";

const withStyles = makeStyles(() => ({
    sectionOneWrapper: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        background: "#54c438",
        height: "500px",
    },
    sectionOneHeader: {
        fontWeight: "bold",
        fontSize: "3rem"
    },
    sectionOneSubheader: {
        fontSize: "1.5rem"
    },
    sectionOneJoinButton: {
        background: "black",
        color: "white",
        borderRadius: "20px",
        width: "200px",
        height: "50px"
    }

}));



const SectionOne = () => {

    const classes = withStyles();

    return (
        <div className={classes.sectionOneWrapper}> 
            <div>
                <Typography class={classes.sectionOneHeader}>Simplify your Knowledge</Typography>
                <Typography class={classes.sectionOneSubheader}>Capture and build on your insights</Typography>
                <Button class={classes.sectionOneJoinButton}>Join the Club</Button>
                <Typography>"When you educe you first see the potential in something and then develop it"</Typography>
                <Typography>-Vocabulary.com</Typography>
            </div>
            <div>Image/GIF/animation Placeholder</div>
        </div>
    )
}

export default SectionOne