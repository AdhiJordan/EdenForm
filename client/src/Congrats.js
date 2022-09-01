import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

function Congrats({workSpaceCreated}) {


  return (
    <div className="App text-center">
        <img src="/images/check.png" alt="Congrats" width="40px" height="40px" />
        <h2 className='text-center'>Congratulations Eren !</h2>
        <p className='text-center grey-color'>You have completed onboarding, You can start using Eden.</p>
        <div className="formCls">
            <div className="text-center margin-t-30">
            <button variant="contained" className='buttonCls' onClick={workSpaceCreated}>Launch Eden</button>
            </div>
        </div>
    </div>
  );
}

export default Congrats;
