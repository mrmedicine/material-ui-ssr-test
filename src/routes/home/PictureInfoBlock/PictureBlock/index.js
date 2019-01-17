import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import stylesJSS from '../style';

import placeholder from './placeholder.jpg';

class index extends Component {
  static propTypes = {
    // eslint-disable-next-line
    children: PropTypes.oneOfType([
      // eslint-disable-next-line
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]), // eslint-disable-next-line
    index: PropTypes.number.isRequired, // eslint-disable-next-line
    image: PropTypes.string,// eslint-disable-next-line
    square: PropTypes.bool,// eslint-disable-next-line
  };
  static defaultProps = {
    image: placeholder,
    square: false,
  };
  render() {
    const { props } = this;
    const { classes, image, square } = props;
    const { infoBlock, pictureBlock, squareP, order1md, nonSquareP } = classes;

    const className = `order${props.index}md`;
    const orderClass =
      typeof classes[className] !== 'undefined' ? classes[className] : order1md;
    const classesConcat = square
      ? `${infoBlock} ${pictureBlock} ${orderClass} ${squareP}`
      : `${infoBlock} ${pictureBlock} ${orderClass} ${nonSquareP}`;
    return (
      <Grid
        item
        sm={12}
        md={6}
        className={classesConcat}
        style={{ backgroundImage: `url(${image})` }}
      />
    );
  }
}

index.propTypes = {
  classes: PropTypes.shape({}).isRequired,// eslint-disable-line
};

index.defaultProps = {};

export default withStyles(stylesJSS)(index);
