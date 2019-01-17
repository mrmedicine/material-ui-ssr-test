/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import company from 'company';
import Layout from '../../components/Layout';
import Contact from './Contact';
import contactBackground from './contact_bg.jpg';

const title = 'Contact';

function action() {
  return {
    chunks: ['contact'],
    title,
    keywords: ['contact', 'gg'],
    description: `Neem contact op voor een goed gesprek over online en offline communicatie. Bel Netpulse ${
      company.phone
    } of verstuur mail naar ${company.email}`,
    component: (
      <Layout headerOptions={{ background: contactBackground }}>
        <Contact title={title} />
      </Layout>
    ),
  };
}

export default action;
