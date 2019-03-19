import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';

const styles = {
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
  },
  heroButtons: {
    marginTop: 4,
  },
  heroUnit: {
    backgroundColor: lightGreen,
    margin: 60,
  },
} 
class AppPicture extends Component {
    render() {
        return (
                <div className={this.props.classes.heroUnit}>
                <div className={this.props.classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Test your song!
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    Do you feel you are making songs which are already composed? Fear not my Friend!
                    We have a solution for you!
                    </Typography>
                    </div>
                </div>
               
  );
}
}


export default withStyles(styles)(AppPicture);