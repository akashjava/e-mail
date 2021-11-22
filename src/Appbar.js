import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import email_logo from "./assets/logo_gmail.png";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: '8px',
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    // "&:hover": {
    //   backgroundColor: alpha(theme.palette.common.white,0.90),
    //   color:alpha(theme.palette.common.black, 0.80),
    // },
    marginLeft: 0,
    width: "600px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 500,
      height: 30,
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          borderBottom: "1px solid #80808080",
        }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Main manu">
            <MenuIcon />
          </IconButton>
          <img src={email_logo} />

          <div
            className={classes.search}
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              style={{ color: "#ffffff" }}
              placeholder="Search mail"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onClick={handleClick}
            />
            <Menu
              style={{ marginTop: "-6px",marginLeft:'2px' }}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <div style={{ height: "220px", width: "600px" }}>
                <div
                  className={classes.search}
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                    borderBottom:'1px solid gray',
                    marginTop: "-6px"
                  }}
                >
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    style={{ color: "#000000" }}
                    placeholder="Search mail"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                  <div style={{ marginLeft: "auto", marginRight: "16px" }}>
                    <TuneOutlinedIcon />
                  </div>
                </div>
              </div>
            </Menu>
            <div style={{ marginLeft: "auto", marginRight: "16px" }}>
              <TuneOutlinedIcon />
            </div>
          </div>
          <IconButton
            color="inherit"
            aria-label="Help"
            style={{ marginLeft: "auto" }}
          >
            <HelpOutlineIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Setting">
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Setting">
            <AppsOutlinedIcon />
          </IconButton>
          <Avatar
            style={{
              height: "30px",
              width: "30px",
            }}
          ></Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
}
