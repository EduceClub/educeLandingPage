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

const withStyles = makeStyles((theme) => ({
    tabsWrapper: {
        display: "flex",
        padding: "30px",
        height: "600px",
        "@media(max-width: 600px)": {
            padding: "0px"
        }
    },
    howToContentWrapper: {
        display: "flex",
        margin: "5% 14% 5% 14%",
        background: "#AAF0C1",
        borderRadius: "35px",
        "@media(max-width: 600px)": {
            width: "100%",
            margin: "0px",
            borderRadius: "0px"
        }
    },
    gif: {
        width: "60%",
        borderRadius: "35px",
        maxHeight: "500px",
        "@media(max-width: 600px)": {
            width: "100%"
        }
    },
    tabsContentWrapper: {
        display: "flex",
        justifyContent: "space-evenly",
    },
    tabPanelElement: {
        "& > div":{
            padding: "20px 0px"
        }
    },
    tabsDescription: {
        textAlign: "left",
        width: "100%",
        margin: "10px 24px 0px 24px",
        "@media(max-width: 600px)": {
            margin: "0px",
            marginBottom: "40px"
        }
    },
    tabLabel: {
        "& button": {
            textTransform: "none",
        }
    },
    tabLabelSelected: {
        color: "black !important",
    },
    tabLabelIndicator: {
        backgroundColor: "black",
    },
    tabsInnerContentWrapper: {
        display: "flex",
        "@media(max-width: 600px)": {
            flexDirection: "column",
            padding: "10px"
        }
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
                        <div className={classes.tabsInnerContentWrapper}>{children}</div>
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
            <div className={classes.tabsWrapper}>
                <Box>
                    <Box>
                        <Tabs indicatorColor='secondary' classes={{ root: classes.tabLabel}} value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab classes={{root: classes.tabLabelSelected}} label="Store" {...a11yProps(0)} />
                            <Tab classes={{root: classes.tabLabelSelected}} label="Build" {...a11yProps(1)} />
                            <Tab classes={{root: classes.tabLabelSelected}} label="Recall" {...a11yProps(2)} />
                        </Tabs>
                    </Box>

                    <div className={classes.tabsContentWrapper}>
                        <TabPanel className={classes.tabPanelElement} value={value} index={0}>
                            <Typography className={classes.tabsDescription}>Store short insights with a title and tag which allow you to recall your information easily.</Typography>
                            <img className={classes.gif} src={Store2} />
                        </TabPanel>
                    </div>


                    <div className={classes.tabsContentWrapper}>
                        <TabPanel className={classes.tabPanelElement} value={value} index={1}>
                            <Typography className={classes.tabsDescription}>Share categories with others to help build up on your insights. 
                            Whether you have a work topic to share with colleagues and industry experts or you have a child's medical information you want to share with your partner.  
                            <span> <br/><br/>Shared categories allow you to work with others to build updon your information.</span> </Typography>
                         
                            <img className={classes.gif} src={Buildon} />
                        </TabPanel>
                    </div>


                    <div className={classes.tabsContentWrapper}>
                        <TabPanel className={classes.tabPanelElement} value={value} index={2}>
                            <Typography className={classes.tabsDescription}>Category tags allow you to see all the insights or information you store to a topic in one view.
                            This helps you organize your information over time.</Typography>
                            <img className={classes.gif} src={Recall} />
                        </TabPanel>
                    </div>

                </Box>


            </div>
        </div >

    )
}

export default HowItWorks