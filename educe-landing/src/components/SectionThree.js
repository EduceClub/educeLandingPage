import {Typography, makeStyles } from '@material-ui/core';
import React from 'react'

const withStyles = makeStyles(() => ({
    sectionThreeWrapper: {
        display: "flex",
        border: "1px solid red"
    }

}));
const SectionThree = () => {

  const classes = withStyles();
  return (
    <div className={classes.sectionThreeWrapper}>SectionThree</div>
  )
}

export default SectionThree