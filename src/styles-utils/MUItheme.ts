import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '16px 16px',
          fontSize: '17px',
          width: '100%',
          borderRadius: '16px',
          minHeight: '56px',
          textTransform: 'none',
          fontWeight: '600',
          lineHeight: '24px',
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
            bottom: '0 !important',
            maxWidth: '540px',
            width: '100%',
            boxShadow: 'none',

          '& .MuiSnackbarContent-root': {
            backgroundColor: '#fff',
            borderRadius: '24px 24px 0 0',
            padding: '34px 16px 40px 16px',
            textAlign: 'left',
          },
          '& .MuiSnackbarContent-action': {
            flexGrow: '1',
            marginRight: '0',
            paddingLeft: '0',
            marginTop: '40px'
          },
        },
      },
    },   
  },
});

export default theme;
