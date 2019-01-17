import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import stylesJSS from '../style';

class index extends Component {
  static propTypes = {
    // eslint-disable-next-line
    children: PropTypes.oneOfType([
      // eslint-disable-next-line
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]), // eslint-disable-next-line
    index: PropTypes.number.isRequired, // eslint-disable-next-line
    square: PropTypes.bool,// eslint-disable-next-line
  };
  static defaultProps = { square: false };
  render() {
    const { props } = this;
    const { classes, children, square } = props;
    const { infoBlock, pictureTxtBlock, textHalf, nonSquareT } = classes;

    const className = `order${props.index}md`;
    let rootClasses =
      typeof classes[className] !== 'undefined'
        ? `${infoBlock} ${pictureTxtBlock} ${classes[className]}`
        : `${infoBlock} ${pictureTxtBlock}`;
    rootClasses = square ? rootClasses : `${rootClasses} ${nonSquareT}`;
    return (
      <Grid item sm={12} md={6} className={rootClasses}>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
          className={textHalf}
        >
          {children}
        </Grid>
      </Grid>
    );
  }
}

index.propTypes = {
  classes: PropTypes.shape({}).isRequired,// eslint-disable-line
};

index.defaultProps = {};

export default withStyles(stylesJSS)(index);
