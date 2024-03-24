import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "&::before": {
            backgroundColor: "#E9EAEA",
          },
          "&.Mui-expanded::before": {
            opacity: "1",
          },
          "&.Mui-expanded": {
            margin: "0",
            marginBottom: "16px",
          },
        },
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          "&.Mui-expanded": {
            marginTop: "12px",
            marginBottom: "12px",
          },
        },
        root: {
          paddingLeft: "0",
        },
      },
    },

    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0",
          paddingRight: "35px",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          padding: "16px 16px",
          fontSize: "17px",
          width: "100%",
          borderRadius: "16px",
          minHeight: "40px",
          textTransform: "none",
          fontWeight: "600",
          lineHeight: "24px",
          fontFamily: 'San Francisco Pro Display',
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          bottom: "0 !important",
          maxWidth: "540px",
          width: "100%",
          boxShadow: "none",

          "& .MuiSnackbarContent-root": {
            backgroundColor: "#fff",
            borderRadius: "24px 24px 0 0",
            padding: "34px 16px 40px 16px",
            textAlign: "left",
            width: "100%",
            fontFamily: 'San Francisco Pro Display',
          },
          "& .MuiSnackbarContent-action": {
            flexGrow: "1",
            marginRight: "0",
            paddingLeft: "0",
            marginTop: "40px",
          },
        },
      },
    },
  },
});

export default theme;
