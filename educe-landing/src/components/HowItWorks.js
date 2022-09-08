import { ClassNames } from '@emotion/react';
import { Typography, makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import Buildon from '../assets/Buildon2.gif'
import Recall from '../assets/Recall.gif'
import Store2 from '../assets/Store2.gif'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const withStyles = makeStyles(() => ({
    stepperWrapper: {
        display: "flex",
        padding: "30px",
        height:"600px"
    },
    howToContentWrapper: {
        display: "flex",
        margin: "5% 17% 5% 17%",
        background: "#AAF0C1",
        borderRadius: "35px"
    },
    gif: {
        width: "70%"
    },
    stepperContentWrapper: {
        display: "flex",
        justifyContent: "space-evenly",
    }
}));


const HowItWorks = () => {
    const classes = withStyles();

    const steps = [{
        label: 'Store',
        gif: Store2
    },
    {
        label: 'Build',
        gif: Buildon
    },
    {
        label: 'Recall',
        gif: Recall
    }];


    const [activeStep, setActiveStep] = useState(0);
    const [value, setValue] = React.useState(0);

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.howToContentWrapper}>
            <div className={classes.stepperWrapper}>
                <Box>
                    <Box>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Store" {...a11yProps(0)} />
                            <Tab label="Build" {...a11yProps(1)} />
                            <Tab label="Recall" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <div className={classes.stepperContentWrapper}>
                            <div>Store description placeholder</div>
                            <img className={classes.gif} src={Store2} />
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className={classes.stepperContentWrapper}>
                            <div>Build description placeholder</div>
                            <img className={classes.gif} src={Buildon} />
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className={classes.stepperContentWrapper}>
                            <div>Recall description placeholder</div>
                            <img className={classes.gif} src={Recall} />
                        </div>
                    </TabPanel>
                </Box>


            </div>
        </div>

    )
}

export default HowItWorks