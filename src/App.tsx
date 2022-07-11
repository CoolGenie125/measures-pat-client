import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Layout from "layout/Layout";

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 540,
        md: 1025,
        lg: 1367,
        xl: 1600,
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
