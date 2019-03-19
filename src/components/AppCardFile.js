import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

class AppCardFile extends Component {
    render() {
        return (
            <Card className={this.props.classes.card}>
                <CardContent>
                    <Typography className={this.props.classes.title} color="textSecondary" gutterBottom>
                        Test your produced song
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
    }
}

const styles = {
    card: {
        minWidth: 275,
        display: 'inline-block',
        padding: 20,
        margin: 30
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

export default withStyles(styles)(AppCardFile);

