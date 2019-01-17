const stylesJSS = theme => ({
  root: {
    flexGrow: 1,
  },
  centeredContent: {
    maxWidth: '1200px',
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
    display: 'flex',
  },
  infoBlock: {},
  pictureBlock: {
    backgroundSize: 'cover',
    flexGrow: 1,
  },
  flex: {
    display: 'flex',
  },
  squareP: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: '100%',
      flexBasis: '100%',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '50%',
    },
  },
  nonSquareP: {
    [theme.breakpoints.down('sm')]: {
      minHeight: 600,
    },
  },
  nonSquareT: {
    [theme.breakpoints.up('md')]: {
      padding: '7rem',
    },
  },
  pictureTxtBlock: {
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
    },
  },
  order1md: {
    [theme.breakpoints.up('md')]: {
      order: 1,
    },
  },
  order2md: {
    [theme.breakpoints.up('md')]: {
      order: 2,
    },
  },
  order3md: {
    [theme.breakpoints.up('md')]: {
      order: 3,
    },
  },
  order4md: {
    [theme.breakpoints.up('md')]: {
      order: 4,
    },
  },
  order5md: {
    [theme.breakpoints.up('md')]: {
      order: 5,
    },
  },
  order6md: {
    [theme.breakpoints.up('md')]: {
      order: 6,
    },
  },
  textHalf: {
    height: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '50px 0',
      minHeight: 600,
    },
  },
});
export default stylesJSS;
