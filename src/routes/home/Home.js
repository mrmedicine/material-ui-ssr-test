/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';
import PictureInfoBlock from './PictureInfoBlock';
import Link from '../../components/Link';

import info1 from './info1.jpg';

const stylesJSS = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: `0 -${theme.spacing.unit}px`,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  plainTxt: {
    textDecoration: 'none',
    color: 'inherit',
  },
  iconSmall: {
    fontSize: 20,
  },
  optionsBlock: {
    flexGrow: 1,
    backgroundColor: theme.palette.lightGrey.main,
  },
  centeredContent: {
    maxWidth: '1200px',
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
    display: 'flex',
  },
  plainList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  footerListButton: {
    [theme.breakpoints.up('sm')]: {
      textAlign: 'center',
      textTransform: 'none',
      justifyContent: 'left',
      borderBottom: '3px solid transparent',
      borderRadius: 0,
      minWidth: 'auto',
      padding: 0,
      '&:hover': {
        background: 'inherit',
        borderBottomColor: '#eec200',
      },
    },
  },
  footerBlock: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      marginTop: '20px',
    },
  },
});
const pictureBlocks = [
  {
    title: 'Test 1',
    image: info1,
    text: ' test ',
  },
  {
    title: 'Test 2',
    image: info1,
    text: ' some text ',
  },
];
class Home extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,// eslint-disable-line
    classes: PropTypes.shape({}).isRequired,// eslint-disable-line
  };

  render() {
    // this.props.title
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Link to="/contact"> goto contact page! </Link>
        <Button href="tel: sdfsdf" size="small" className={classes.button}>
          <PhoneIcon className={`${classes.leftIcon} ${classes.iconSmall}`} />
          +3434
        </Button>
        <PictureInfoBlock blocks={pictureBlocks} />
      </div>
    );
  }
}

export default withStyles(stylesJSS)(Home);
