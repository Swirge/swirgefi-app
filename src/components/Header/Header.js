import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import WbSunny from '@material-ui/icons/WbSunny';
import NightsStay from '@material-ui/icons/NightsStay';

import styles from './styles';

const useStyles = makeStyles(styles);

const Header = ({ links, isNightMode, setNightMode }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar className={`${classes.appBar} ${classes.dark}`}>
      <Toolbar className={classes.container}>
        <Button href="/" className={classes.title}>
          <Hidden xsDown>
            <img
              alt="BIFI"
              src={require(`images/single-assets/swglogo.png`)}
              height={'40px'}
              className={classes.logo}
            />
            Swirge | Finance
          </Hidden>
          <Hidden smUp>
            <img
              alt="BIFI"
              src={require(`images/single-assets/swglogo.png`)}
              height={'35px'}
              className={classes.logo}
            />
          </Hidden>
        </Button>

        <span>
          <Hidden mdDown>
            {renderLink('app', 'app', 'warehouse', classes)}
            {renderLink('vote', 'vote', 'vote-yea', classes)}
            {renderLink('dashboard', t('stats'), 'chart-bar', classes)}
            {renderLink('docs', 'docs', 'book', classes)}
          </Hidden>
          {renderLink('buy', t('buy swgb'), 'dollar-sign', classes)}
          {renderBoost(classes)}
        </span>

        <Hidden smDown implementation="css">
          <div className={classes.collapse}>{links}</div>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.iconButton}
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>

      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.closeButtonDrawer}
          >
            <Close />
          </IconButton>
          <div className={classes.appResponsive}>{links}</div>
          <div style={{ textAlign: 'center' }}>
            {renderLinkSidebar('app', 'app', 'warehouse', classes)}
            {renderLinkSidebar('vote', 'vote', 'vote-yea', classes)}
            {renderLinkSidebar('dashboard', t('stats'), 'chart-bar', classes)}
            {renderLinkSidebar('docs', 'docs', 'book', classes)}
            {renderLinkSidebar('buy', t('buy'), 'dollar-sign', classes)}
            <IconButton onClick={setNightMode} className={classes.icon}>
              {isNightMode ? <WbSunny /> : <NightsStay />}
            </IconButton>
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

const renderLink = (name, label, icon, classes) => {
  return (
    <a
      href={getLinkUrl(name)}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}
      style={{ marginLeft: '5px', marginRight: '5px' }}
    >
      <i className={`fas fa-${icon} ${classes.icon}`} />
      <span>{label}</span>
    </a>
  );
};

const renderBoost = classes => {
  return (
    <a className={classes.btnBoost} href="/stake">
      <img alt="Boost" src={require('images/stake/boost.svg')} />
    </a>
  );
};

const renderLinkSidebar = (name, label, icon, classes) => {
  return (
    <div style={{ width: '100%', paddingTop: '10px' }}>
      {renderLink(name, label, icon, classes)}
    </div>
  );
};

const getLinkUrl = name => {
  return name === 'buy'
    ? 'https://1inch.exchange/#/SWGb/WBNB?network=56'
    : `https://${name}.swirge.com`;
};

export default Header;
