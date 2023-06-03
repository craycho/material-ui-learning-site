import { useState } from "react";
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
import ComputerIcon from "@mui/icons-material/Computer";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: 13,
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 6,
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar /*<Toolbar> has default padding*/>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MUI TEST
        </Typography>
        <ComputerIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Icons>
          <Badge
            badgeContent={4}
            color="badge"
            /*theme.badge*/ sx={{ cursor: "pointer" }}
          >
            <MailIcon color="white" />
          </Badge>
          <Badge badgeContent={4} color="badge" sx={{ cursor: "pointer" }}>
            <Notifications color="white" />
          </Badge>
          <Avatar
            // aria-controls="basic-menu"
            alt="Remy Sharp"
            src="https://randomuser.me/api/portraits/men/29.jpg"
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            onClick={(e) => {
              setOpenMenu(true);
              handleClick(e);
            }}
          />
        </Icons>
        <UserBox
          onClick={(e) => {
            setOpenMenu(true);
            handleClick(e);
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://randomuser.me/api/portraits/men/29.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="positioned-menu"
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
          handleClose();
        }}
        anchorEl={anchorEl}
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
}

export default Navbar;
