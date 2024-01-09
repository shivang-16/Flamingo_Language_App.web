import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import store from "./redux/Store.tsx";
import { Provider } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(51, 133, 255)",
    },
  },
});
console.log(import.meta.env.VITE_FLAMIGO_API)
export const server: string = import.meta.env.VITE_FLAMIGO_API || 'http://localhost:4501'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
);
