import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#cc6055',
      main: '#c0392b',
      dark: '#86271e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#db7633',
      main: '#d35400',
      dark: '#933a00',
      contrastText: '#000',
    },
    lightGrey: {
      main: '#f8f9fa',
    },
  },
  props: {
    MuiWithWidth: {
      // Initial width property
      initialWidth: 'md', // Breakpoint being globally set 🌎!
    },
  },
  overrides: {
    MuiButton: {
      // Name of the component style sheet
      root: {
        // Name of the rule
        borderRadius: 0,
      },
      label: {
        pointerEvents: 'none',
      },
    },
  },
});

export default theme;
/*
typography: {
  useNextVariants: true,
}, */
