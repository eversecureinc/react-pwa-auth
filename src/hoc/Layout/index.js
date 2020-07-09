
import { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SentryProvider from 'hoc/SentryProvider';
import NotificationProvider from 'hoc/NotificationProvider';
import TopAppBar from 'components/TopAppBar';
import Footer from 'components/Footer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: theme.custom.layout.maxAppWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  main: {
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 0, 0, 0)
    },
    flexGrow: 1,
    minHeight: `calc(100vh - ${theme.custom.layout.topAppBarHeight + theme.custom.layout.footerHeight}px)`,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0, 5, 0, 5)
  },
  landingMain: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 0, 0, 0)
    },
    flexGrow: 1,
    minHeight: `calc(100vh - ${theme.custom.layout.topAppBarHeight + theme.custom.layout.footerHeight}px)`,
    backgroundColor: theme.palette.background.main,
    padding: theme.spacing(0, 5, 0, 5)
  },
  mainPanel: props => ({
    backgroundColor: props.pageName === "StreamPlayer" || props.pageName === 'AcademyPlayer' ? theme.palette.background.default : theme.palette.background.main,
    width: '100%',
    minHeight: `calc(100vh - ${theme.custom.layout.topAppBarHeight + theme.custom.layout.footerHeight}px)`,
  }),
  hidden: {
    display: 'none'
  },
  landingPage: {
    backgroundColor: theme.palette.background.main
  }
}));

const Layout = ({ content, pageName, invisible }) => {
  const classes = useStyles({ pageName });

  return (
    <>
      <SentryProvider>
        <div className={pageName == 'landing' ? classes.landingPage : null}>
          <div className={classes.root}>
            <TopAppBar />
            <main className={pageName == 'landing' ? classes.landingMain : classes.main}>
              <div className={classes.mainPanel}>
                <NotificationProvider pageName={pageName} />
                {content}
              </div>
            </main>
            <div className={invisible ? classes.hidden : classes.backColor}>
              <Footer />
            </div>
          </div>
        </div>
      </SentryProvider>
    </>
  );
};

export default memo(Layout);