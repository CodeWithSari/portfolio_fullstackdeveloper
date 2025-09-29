import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import App from "./App.jsx";
import { createTheme } from "@mui/material/styles";

// Dark Mode Portfolio Theme
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#3F51B5" },      
    secondary: { main: "#00BCD4" },    
    background: {
      default: "#121212",  
      paper: "#1E1E1E",    
    },
    text: {
      primary: "#E0E0E0",  
      secondary: "#B0B0B0",
    },
    error: { main: "#E91E63" },        
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* normalizes and applies dark theme */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
