import { createTheme } from '@mui/material';
import palette from './palette';
import typography from './typography';

const theme = createTheme({
  palette,
  typography,
//   spacing: [0, 4, 8, 16, 32, 64]
});

export default theme;
