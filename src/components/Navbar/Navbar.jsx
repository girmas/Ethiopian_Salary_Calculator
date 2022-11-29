import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import "@fontsource/lobster";
import "lato-font";
const Navbar = () => {
  return (
    <div>
      <AppBar position='sticky'>
        <Toolbar sx={{ fontFamily: "lato-font", fontSize: "28px" }}>
          Ethiopian Salary Calculator
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
