import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

function Workspace({createWorkSpace}) {


  return (
    <div className="App">
        <h1 className='text-center'>Let's set up a home for all your work</h1>
        <p className='text-center grey-color'>You can always create another workspace later</p>
        <div className="formCls">
            <p className='font-12'>Workspace Name</p>
            <input type="text" placeholder="Steve" className='textfieldCls' /> 
            <p className='font-12'>Workspace URL (optional)</p>
            <div id="url">
              <input id="username" type="text"  placeholder="Url" />
              <span>www.eden.com/</span>
            </div>
            <div className="text-center margin-t-30">
            <button variant="contained" className='buttonCls' onClick={createWorkSpace}>Create Workspace</button>
            </div>
        </div>
    </div>
  );
}

export default Workspace;
