import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import AddButton from "./components/AddButton";

import { Box, createTheme, Stack } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";

function Mocksite() {
  const [mode, setMode] = useState("light");
  const theme = useTheme();
  const darkTheme = createTheme({
    palette: {
      mode: mode,
      badge: { ...theme.palette.badge },
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor="background.default" color="text.primary">
          <Navbar />
          <Stack direction="row" spacing={3} justifyContent="space-between">
            <Sidebar setMode={setMode} />
            <Feed />
            <Rightbar />
          </Stack>
          <AddButton />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Mocksite;
