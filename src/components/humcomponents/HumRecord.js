import React from 'react';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import play_arrow from '@material-ui/icons/PlayArrow';

import { withStyles } from '@material-ui/core/styles';

const HumRecord = (props) => {
    const { classes } = props;
    return (
        <div>
            <Fab color="primary" aria-label="Play" className={classes.fab}>
                <Icon>play_arrow</Icon>
            </Fab>
        </div>
    );
}

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit
    },
    extendedIcon: {
        marginRight: theme.spacing.unit
    }
});

export default withStyles(styles)(HumRecord);
