import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Stepper from "react-stepper-horizontal";
import UserDetails from './UserDetails';
import Workspace from './Workspace';
import Planning from './Planning';
import Congrats from './Congrats';

function App() {

  const [step, setStep] = useState(0);

  return (
    <div className="App">
        <h2 className='text-center'>
          <img src="/images/logo.png" alt="Eden logo" className='logoCls' /> Eden</h2>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={4} lg={4}></Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Stepper steps={ [{title: ''}, {title: ''}, {title: ''}, {title: ''}] } 
            activeStep={ step } completeBarColor="#603bda" defaultTitleColor="#000"  completeTitleColor="#fff"  activeColor="#603bda" completeColor="#603bda" />
            {step === 0 && <UserDetails createWorkSpace={() => setStep(1)} /> }
            {step === 1 && <Workspace createWorkSpace={() => setStep(2)} /> }
            {step === 2 && <Planning planWorkSpace={() => setStep(3)} /> }
            {step === 3 && <Congrats workSpaceCreated={() => setStep(0)} /> }
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}></Grid>
        </Grid>
    </div>
  );
}

export default App;
