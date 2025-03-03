import React, { useState } from 'react';
import './App.scss';
import { FormCompnent } from './compnents/form-compnent';
import "@fontsource/barlow-condensed"; 
import { Switch } from '@mui/material';
import UserCard from './compnents/user-card';

function App() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);  // Toggle the state
    console.log('Changed:', !checked);
  };

  return (
    <div className="App">
      <div className="right-0">
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
      { checked ?   <FormCompnent /> :    <UserCard /> }
   
    </div>
  );
}

export default App;
