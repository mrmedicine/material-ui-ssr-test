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

const stylesJSS = () => ({
  root: {
    flexGrow: 1,
  },
});
class NotFound extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { props } = this;
    const { classes } = props;
    const { root } = classes;
    return (
      <div className={root}>
        <h1>{this.props.title}</h1>
        <p>De pagina die u zoekt is niet gevonden.</p>
      </div>
    );
  }
}

export default withStyles(stylesJSS)(NotFound);
