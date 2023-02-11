import * as React from "react";
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FlagIcon from '@mui/icons-material/Flag';
import LinearProgressWithLabel from '@mui/material/LinearProgress';
import { Link } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import VideoModal from "../tutorials/VideoModal";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';

const steps = [
  {
    label: "Connect Google Account",
    description: <Step1 />,
  },
  {
    label: "Store Settings",
    description: <Step2 />,
  },
  {
    label: "Merchant Feed Settings",
    description: <Step3 />,
  },
];

export default function Setup() {

  const [progress, setProgress] = React.useState(0);


  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setProgress((prevProgress) => prevProgress + 33.3);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setProgress((prevProgress) => prevProgress - 33.3);

  };

  const handleReset = () => {
    setActiveStep(0);
  };


  const navigate = useNavigate();
  const dashboardOnClick = useCallback(() => navigate('/dashboard', { replace: true }), [navigate]);

  return (
    <>

      <Box style={{ margin: "10px" }}>
        {/* //////////////////////////// dashboard button //////////////////////////// */}
        <div onClick={dashboardOnClick} className="flex items-center justify-end mr-8">
          <CloseIcon  className="cursor-pointer hover:bg-gray-200 hover:transition-all transition ease-in-out delay-250 hover:rotate-180  cursor-pointer" />
        </div>
        {/* ///////////////////////////////////////////////////////////////////////// */}
        <div className="grid md:grid-cols-5 sm:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 mx-8">
          <div>
            <div className="flex items-center w-full">
              <FlagIcon style={{ color: '#008060' }} />
              <p className="text-lg font-medium ">Setup Guide</p>
            </div>
            <div className="text-lg">{activeStep} of 3 task Complete</div>
            <VideoModal title='Complete Guide For Initial Setup' videoSrc='https://www.youtube.com/embed/xu1O3lTBaYE' />
          </div>
          <div className="flex justify-center items-center col-span-4">
            <LinearProgressWithLabel id='progress' style={{ width: '100%', height: '5px', marginRight: '10px' }} variant="determinate" value={progress} />
            <label for='progress'>{(progress).toFixed(0)}%</label>
          </div>
        </div>

        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last Step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 9 }}>
                  <div>
                    <Button
                      style={{ background: "#008060" }}
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <div square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed successfully</Typography>
            <Link to="/setupPrice">
              <Button
                style={{ background: "#008060" }}
                variant="contained"
                sx={{ mt: 1, mr: 1 }}
              >
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SyncIcon"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"></path></svg>
                Sync Now
              </Button>
            </Link>
            <Button className='back__button'
              onClick={handleBack}
              sx={{ mt: 1, mr: 1 }}
            >
              Back
            </Button>
          </div>
        )}
      </Box>
    </>
  );
}
