import React from 'react';
import {
  BrowserRouter,
  Link
} from "react-router-dom";
import Router from './Router';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
  <BrowserRouter>
    <AppBar position="relative">
      <Toolbar>
        <Link to="/"><Typography variant="h6" color="textSecondary" noWrap>
          Story Time
        </Typography></Link>
      </Toolbar>
    </AppBar>
    <Router/>
    <footer>
      <Typography variant="h6" align="center" gutterBottom>
        Copyright © Story Time {new Date().getFullYear()}
      </Typography>
    </footer>
  </BrowserRouter>
  );
}

export default App;
