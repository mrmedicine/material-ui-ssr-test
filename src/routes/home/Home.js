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
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PictureInfoBlock from './PictureInfoBlock';

import s from './Home.css';
import info1 from './info1.jpg';

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
  };

  render() {
    // this.props.title
    return (
      <div className={s.root}>
        <PictureInfoBlock blocks={pictureBlocks} />
      </div>
    );
  }
}

export default withStyles(s)(Home);
