import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import {mainPallete} from '../../layout/colors';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import OpinionCard from './OpinionCard';


const styles = theme => ({
    root: {
    
      flexGrow: 1,
      marginLeft: '10px',
      marginTop: '20px'  
    },
    grow: {
      flexGrow: 1,
    },
    card: {
        backgroundColor: mainPallete.licorice,

    }
    
  });
  
  class OpinionsCard extends React.Component {
    state = {
    };
  
    render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardHeader
                    title="Opinions"
                    titleTypographyProps={{variant:'h4'}}
                    />
                    <CardContent>
                        <OpinionCard/>
                        <OpinionCard/>
                    </CardContent>
            </Card>
        </div>
      );
    }
  }
  
  OpinionsCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withRoot(withStyles(styles)(OpinionsCard));
  