import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

function UserDetails({createWorkSpace}) {


  return (
    <div className="App">
        <h1 className='text-center'>Welcome ! First things first ...</h1>
        <p className='text-center grey-color'>You can always change them later .</p>
        <div>
            <p className='font-12'>Full Name</p>
            <input type="text" placeholder="Steve" className='textfieldCls' /> 
            <p className='font-12'>Display Name</p>
            <input type="text" placeholder="Steve" className='textfieldCls' /> <br />
            <div className="text-center margin-t-20">
            <button className='buttonCls' onClick={createWorkSpace}>Create Workspace</button>
            </div>
        </div>
    </div>
  );
}

export default UserDetails;
