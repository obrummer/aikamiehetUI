import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class AppNavigation extends Component {
    render() {
        return (
            <div className={this.props.classes.root}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" color="inherit" className={this.props.classes.grow}>
                    Pitch a Song
                </Typography>
                <IconButton className={this.props.classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                </Toolbar>
            </AppBar>
            </div>
  );
}
}


export default withStyles(styles)(AppNavigation);