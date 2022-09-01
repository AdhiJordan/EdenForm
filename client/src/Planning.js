import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

function Planning({planWorkSpace}) {


  return (
    <div className="App">
            <h2 className='text-center'>How are you planning to use Eden ?</h2>
            <p className='text-center grey-color margin-b-40'>We'll streamline your setup experience accordingly</p>
            <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className='borderBox'>
                <img src="/images/user.png" alt="users" width="20px" height="20px" className='margin-b-10' />
                <h6 className='margin-0'>For myself</h6>
                <p className='font-12 grey-color'>write better. Think more clearly. Stay organised.</p>
              </div>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className='borderBox'>
              <img src="/images/group.png" alt="Team" width="20px" height="20px" className='margin-b-10' />
              <h6 className='margin-0'>With my team</h6>
              <p className='font-12 grey-color'>Wikis, docs, tasks & projects, all in one place.</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
        </Grid>
          <div className="text-center margin-t-40">
            <button variant="contained" className='buttonCls' onClick={planWorkSpace}>Create Workspace</button>
          </div>
    </div>
  );
}

export default Planning;
