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

const stylesJSS = theme => ({
  root: {
    flexGrow: 1,
  },
  txtPadding: {
    padding: `0 ${theme.spacing.unit}px`,
  },
});

class Contact extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,// eslint-disable-line
  };

  sendMail = async data => {
    try {
      // Perform the ajax call
      const request = new Request('/email');
      const response = await fetch(request, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        // make sure to serialize your JSON body
        body: JSON.stringify(data),
      });

      // Convert respone to json
      const content = await response.json();
      return content.sent;

      // Process your content (if needed)
    } catch (e) {
      console.error(e);
      return false;
    }
  };
  render() {
    const { props } = this;
    const { classes } = props;
    const { root } = classes;
    return <div className={root}>test</div>;
  }
}

export default withStyles(stylesJSS)(Contact);
