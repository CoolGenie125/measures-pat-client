import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Layout from "layout/Layout";

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1200,
        lg: 1280,
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
