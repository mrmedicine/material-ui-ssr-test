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

// external-global styles must be imported in your JS. antiquewhite
import normalizeCss from 'normalize.css';
import menus from 'routes/menus';
import s from './Layout.css';
import Footer from '../Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  static defaultProps = {};

  render() {
    // deep merge to defaultOptions

    return (
      <div>
        {this.props.children}
        <Footer menuData={menus.footer} />
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
