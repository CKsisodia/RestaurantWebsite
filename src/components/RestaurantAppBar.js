import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { userSliceAction } from "../reducer/userSlice";

export default function RestaurantAppBar() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Carter One", "cursive"].join(","),
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userProfileData = useSelector((state) => state.user.userProfileData);
  const cartItemsShow = useSelector((state) => state.restaurant.cartItems);

  const [userName, setUserName] = React.useState("");

  React.useEffect(() => {
    if (userProfileData !== undefined) {
      getEmailInfo();
    }
  }, [userProfileData]);

  const getEmailInfo = () => {
    setUserName(userProfileData.displayName);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const loginHandler = () => {
    navigate("/login");
  };

  const logOutHandler = () => {
    dispatch(userSliceAction.logOutUser());
    navigate("/");
    handleMobileMenuClose();
    handleMenuClose();
  };

  const profileFormHandler = () => {
    navigate("/userprofileshow");
    handleMenuClose();
  };

  const cartHandler = () => {
    navigate("/cart");
  };

  const orderHistoryHandler = () => {
    navigate("/orderHistory");
    handleMenuClose();
  };

  const navToHome = () => {
    navigate("/");
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={profileFormHandler}>Profile</MenuItem>
      <MenuItem onClick={orderHistoryHandler}>Order History</MenuItem>
      <MenuItem onClick={logOutHandler}>Log Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={cartItemsShow.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ p: 1.5, backgroundColor: "#408858" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={navToHome}
          >
            <FoodBankIcon
              sx={{
                fontSize: 40,
                backgroundColor: "#e6e600",
                color: "black",
                borderRadius: "20px",
              }}
            />
          </IconButton>

          <ThemeProvider theme={theme}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              onClick={navToHome}
              sx={{
                display: { xs: "none", sm: "block" },
                fontSize: 40,
                color: "#e6e600",
                cursor: "pointer",
                fontWeight: 700,
                p: 0.2,
              }}
            >
              FOOD YOG
            </Typography>
          </ThemeProvider>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <div
              style={{
                color: "#e6e600",
                fontSize: 25,
                fontWeight: 700,
                marginTop: "12px",
              }}
            >
              {userProfileData !== undefined && "Welcome " + userName}
            </div>

            {!userProfileData && (
              <div>
                <Button
                  onClick={loginHandler}
                  sx={{
                    fontSize: 20,
                    color: "#e6e600",
                    fontWeight: 700,
                    fontFamily: "cursive",
                  }}
                >
                  Log in
                </Button>{" "}
              </div>
            )}

            {userProfileData && (
              <div>
                {" "}
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  onClick={cartHandler}
                >
                  <Badge badgeContent={cartItemsShow.length} color="error">
                    <ShoppingCartIcon
                      sx={{
                        fontSize: 40,
                      }}
                    />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle
                    sx={{
                      fontSize: 40,
                    }}
                  />
                </IconButton>{" "}
              </div>
            )}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
