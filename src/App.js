import { Box, Stack } from "@mui/system";
import React from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Box>
      <NavBar />

      {/* The Stack component manages layout of immediate children 
      along the vertical or horizontal axis 
      with optional spacing and/or dividers between each child. */}
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
      <Add/>
      
    </Box>
  );
}

export default App;
