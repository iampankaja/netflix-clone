import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import logo from '../assets/logo.svg';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const StyledAppBar = styled(AppBar)`
  && {
    box-shadow: none;
    background: transparent;
    color: red;
  }
`;

const StyledTypography = styled(Typography)`
  && {
    flex-grow: 1;
  }
`;

const NavigationBar = ({ classes }) => (
  <div className={classes.root}>
    <StyledAppBar position="static">
      <Toolbar>
        <img src={logo} alt="Netflix" />
        <StyledTypography variant="h6">Home</StyledTypography>
        <StyledTypography variant="h6">TV Shows</StyledTypography>
        <StyledTypography variant="h6">Movies</StyledTypography>
        <StyledTypography variant="h6">Recently Added</StyledTypography>
        <StyledTypography variant="h6">My List</StyledTypography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </StyledAppBar>
  </div>
);

NavigationBar.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(NavigationBar);
