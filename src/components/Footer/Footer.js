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
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import company from 'company';
import ButtonLink from 'components/Netpulse/ButtonLink';
import Link from 'components/Netpulse/Link';

const stylesJSS = theme => ({
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

class Footer extends React.Component {
  render() {
    const { classes, menuData } = this.props;
    return (
      <footer className={classes.optionsBlock}>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
          className={classes.optionsBlock}
          style={{ padding: '40px 0' }}
        >
          <Grid
            container
            spacing={0}
            direction="row"
            className={classes.centeredContent}
          >
            {menuData &&
              menuData.map(menuBlock => (
                <Grid
                  item
                  xs={12}
                  sm={4}
                  className={classes.footerBlock}
                  key={menuBlock.id}
                >
                  <Typography component="h3" variant="h5" gutterBottom>
                    <Link className={classes.plainTxt} href={menuBlock.href}>
                      {menuBlock.title}
                    </Link>
                  </Typography>
                  {menuBlock.children && (
                    <ul className={classes.plainList}>
                      {menuBlock.children.map(menuItem => (
                        <li key={menuItem.id}>
                          {' '}
                          <ButtonLink
                            href={menuItem.href}
                            disableRipple
                            className={classes.footerListButton}
                          >
                            {menuItem.title}
                          </ButtonLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </Grid>
              ))}
            <Grid item xs={12} sm={3} className={classes.footerBlock}>
              <Typography component="h3" variant="h5" gutterBottom>
                Company details
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ color: '#989898' }}
              >
                Netpulse<br />
                street<br />
                City
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                <Button
                  href={`tel: ${company.phone}`}
                  size="small"
                  className={classes.button}
                >
                  <PhoneIcon
                    className={`${classes.leftIcon} ${classes.iconSmall}`}
                  />
                  +{company.phone}
                </Button>
                <br />
                <Button
                  href={`mailto: ${company.email}`}
                  size="small"
                  className={classes.button}
                >
                  <MailIcon
                    className={`${classes.leftIcon} ${classes.iconSmall}`}
                  />
                  {company.email}
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </footer>
    );
  }
}
Footer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  menuData: PropTypes.instanceOf(Array),
};

Footer.defaultProps = {
  menuData: [],
};

export default withStyles(stylesJSS)(Footer);
