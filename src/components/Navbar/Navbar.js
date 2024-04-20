import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [activeOption, setActiveOption] = useState("Portfolio");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            className="adbicon"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className="navbar-title"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            Dynamo VISION
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              className="icon-button"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Link
                  to="/"
                  onClick={handleCloseNavMenu}
                  className="navbar-link"
                >
                  <Typography textAlign="center">Portfolio</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/packages"
                  onClick={handleCloseNavMenu}
                  className="navbar-link"
                >
                  <Typography textAlign="center">Packages</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/cart"
                  onClick={handleCloseNavMenu}
                  className="navbar-link"
                >
                  <Typography textAlign="center">Cart</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            className="adbicon"
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            className="navbar-title"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            Dynamo VISION
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: "30px",
            }}
          >
            <Link
              to="/"
              onClick={() => setActiveOption("Portfolio")}
              className={`navbar-link ${
                activeOption === "Portfolio" && "active"
              }`}
            >
              <Button
                key={"Portfolio"}
                className={`navbar-button ${
                  activeOption === "Portfolio" && "active"
                }`}
                sx={{ my: 2, display: "block" }}
              >
                Portfolio
              </Button>
            </Link>
            <Link
              to="/packages"
              onClick={() => setActiveOption("Packages")}
              className={`navbar-link ${
                activeOption === "Packages" && "active"
              }`}
            >
              <Button
                key={"Packages"}
                className={`navbar-button ${
                  activeOption === "Packages" && "active"
                }`}
                sx={{ my: 2, display: "block" }}
              >
                Packages
              </Button>
            </Link>
            <Link
              to="/cart"
              onClick={() => setActiveOption("Cart")}
              className={`navbar-link ${activeOption === "Cart" && "active"}`}
            >
              <Button
                key={"Cart"}
                className={`navbar-button ${
                  activeOption === "Cart" && "active"
                }`}
                sx={{ my: 2, display: "block" }}
              >
                Cart
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Sachin" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
