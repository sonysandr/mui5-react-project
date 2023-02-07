import { Mail, Notifications, Store } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const NavBar = () => {

  // set states for Menu usage
  const [open, setOpen] = useState(false);

  //our styled toolbar
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  //our styled search

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  // our icons
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    // Display flex only when display size is more than sm, icons won't be displayed below sm
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  //  userbox
  const Userbox = styled(Box)(({ theme }) => ({
    padding: "0 10px",
    display: "flex",
    gap: "10px",
    alignItems: "center",
    // Display none only when display size is more than sm, icons will display flex below sm
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <AppBar position="sticky">
    
      <StyledToolbar>

        {/* STORE text displayed for sm display  */}
            <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
            STORE
            </Typography>
        {/* Store icon displayed for xs display */}
            <Store sx={{ display: { xs: "block", sm: "none" } }} />

        {/* Search field using InputBase */}
        <Search>
          <InputBase placeholder="Search..." />
        </Search>

        <Icons>

            {/* Badge generate a small badge to the top-right of its child  */}
            <Badge badgeContent={4} color="error">
                {/* Mail is the name of the mail icon from Material Icons */}
                <Mail />
            </Badge>

            {/* Badge generate a small badge to the top-right of its child  */}
            <Badge badgeContent={4} color="error">
                {/* Notifications is the name of the notifications icon from Material Icons */}
                <Notifications />
            </Badge>

            {/* Add an avatar for the user  */}
            <Avatar
                src=""
                sx={{ width: 30, height: 30 }}
                onClick={(e) => setOpen(true)}
            />
        </Icons>

        <Userbox onClick={(e) => setOpen(true)}>
          <Avatar src="" sx={{ width: 30, height: 30 }} />
          <Typography variant="span">John Doe</Typography>
        </Userbox>

      </StyledToolbar>

      {/* Menu to display the list of choices */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
