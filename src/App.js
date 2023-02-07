
import { createTheme, ThemeProvider } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";

function App() {

  const [mode,setMode] = useState("dark")


  const darkTheme = createTheme({
    palette:{
      mode: mode
    }
  })


  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"} >
      <NavBar />

      {/* The Stack component manages layout of immediate children 
      along the vertical or horizontal axis 
      with optional spacing and/or dividers between each child. */}
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar setMode={setMode} mode={mode} />
        <Feed />
        <RightBar />
      </Stack>
      <Add/>
      
    </Box>
    </ThemeProvider>
  );
}

export default App;
