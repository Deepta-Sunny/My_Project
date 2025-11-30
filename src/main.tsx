import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { ThemeProvider as StyledThemeProvider } from "@mui/styles";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";
import { lightTheme, darkTheme } from "./store/theme";

const AppTheme = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppTheme />
  </Provider>
)
