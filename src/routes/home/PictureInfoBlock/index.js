import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PictureBlock from './PictureBlock';
import TextBlock from './TextBlock';
import stylesJSS from './style';

class index extends Component {
  static propTypes = {
    // eslint-disable-next-line
    children: PropTypes.oneOfType([
      // eslint-disable-next-line
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]), // eslint-disable-next-line
    square: PropTypes.bool,// eslint-disable-next-line
  };
  static defaultProps = { square: false };
  render() {
    const { props } = this;
    const { classes, square, blocks } = props;
    const { root } = classes;

    return (
      <div className={root}>
        <Grid container spacing={0}>
          {blocks &&
            blocks.map((block, i) => {
              return [
                <PictureBlock
                  square={square}
                  image={block.image}
                  index={i+1}
                  key={i+1}
                />,
                <TextBlock square={square} index={i} key={i}>
                  <div style={{ maxWidth: '80%' }}>
                    <Typography component="h2" variant="h3" gutterBottom>
                      {block.title}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      {block.text}
                    </Typography>
                  </div>
                </TextBlock>,
              ];
            })}
        </Grid>
      </div>
    );
  }
}

index.propTypes = {
  classes: PropTypes.shape({}).isRequired,// eslint-disable-line
};

index.defaultProps = {};

export default withStyles(stylesJSS)(index);
