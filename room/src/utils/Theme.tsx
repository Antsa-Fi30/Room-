import { ThemeOptions, createTheme } from "@mui/material/styles";

export const getThemeOptions = (mode: "light" | "dark"): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#2980b9",
            contrastText: "#ffffff",
          },
          secondary: {
            main: "#00c49a",
            contrastText: "#ffffff",
          },
          background: {
            default: "#f4f6f8",
            paper: "#ffffff",
          },
          text: {
            primary: "#0a0a0a",
            secondary: "#505050",
          },
        }
      : {
          primary: {
            main: "#2c3e50",
            contrastText: "#0a0a0a",
          },
          secondary: {
            main: "#00e5c1",
            contrastText: "#0a0a0a",
          },
          background: {
            default: "#1e272e",
            paper: "#161b22",
          },
          text: {
            primary: "#e6edf3",
            secondary: "#8b949e",
          },
        }),
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
          fontWeight: 600,
        },
      },
    },
  },
});

export const getTheme = (mode: "light" | "dark") =>
  createTheme(getThemeOptions(mode));
