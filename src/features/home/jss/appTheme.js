import { createMuiTheme } from '@material-ui/core/styles';

const createTheme = (isNightMode) => createMuiTheme({
  palette: {
    type: isNightMode ? 'dark' : 'light',
    background: {
      default: isNightMode ? '#041116' : '#e9f7fb',
      paper: isNightMode ? '#1d282d' : '#fff',
      primary: isNightMode ? '#1d282d' : '#bee7f4',
      secondary: isNightMode ? '#1d282d' : '#bee7f4',
      dark: isNightMode ? '#1d282d' : '#1c7b9a',
      paused: isNightMode ? '#574700' : '#ffd000',
      retired: isNightMode ? '#d32f2f' : '#e57373',
      hover: isNightMode ? '#1d282d' : '#52bfe3',
      border: isNightMode ? '#1d282d' : '#3db7e0',
    },
    primary: {
      main: isNightMode ? '#fff' : '#000',
    },
    secondary: {
      main: isNightMode ? '#fff' : '#bee7f4',
    },
    text: {
      primary: isNightMode ? '#fff' : '#000',
      secondary: isNightMode ? '#81888a' : '#00000066',
    },
  },
  overrides: {
    MuiButton: {
      label: {
        color: isNightMode ? '#fff' : '#000',
      },
    },
    // for dropdown menu items
    MuiButtonBase: {
      root: {
        color: isNightMode ? '#fff' : '#000',
      },
    },
    MuiCheckbox: {
      colorPrimary: {
        color: isNightMode ? '#fff' : '#000',
      },
      colorSecondary: {
        color: isNightMode ? '#fff' : '#000',
      },
    },
  },
});

export default createTheme;
