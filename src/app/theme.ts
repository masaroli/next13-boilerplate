import { createTheme } from '@mui/material';
import { COLORS_PRIMARY, COLORS_SECONDARY } from '../types/enums';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: COLORS_PRIMARY.LIGHT,
      main: COLORS_PRIMARY.MAIN,
      dark: COLORS_PRIMARY.DARK,
    },
    secondary: {
      light: COLORS_SECONDARY.LIGHT,
      main: COLORS_SECONDARY.MAIN,
      dark: COLORS_SECONDARY.DARK,
    },
  },
  typography: {
    fontFamily: ['open sans', 'Helvetica Neue', 'sans-serif'].join(','),
    fontSize: 10,
    body1: {
      fontSize: '1.6rem',
    },
    h2: {
      fontSize: '4.8rem',
      color: COLORS_PRIMARY.MAIN,
      fontWeight: 900,
    },
    h3: {
      fontSize: '2.4rem',
      fontWeight: 700,
    },
    price: {
      fontSize: '3.6rem',
      fontWeight: 700,
    },
  },
});

export default theme;
