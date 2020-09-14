import React, { Component } from "react";

// const { Component } = require("react");
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import DehazeOutlinedIcon from "@material-ui/icons/DehazeOutlined";
import ViewAgendaOutlinedIcon from "@material-ui/icons/ViewAgendaOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import "../Styles/navBar.css";
import {
  createMuiTheme,
  MuiThemeProvider,
  IconButton,
  ClickAwayListener,
  makeStyles,
} from "@material-ui/core";

import SideDrawer from "./dashBoardDrawer";
import ClickAwayComponent from "./clickAwayComponent";
import ClickAway from "./clickAwayComponent";

const themes = createMuiTheme({
  overrides: {
    MuiIcon: {
      colorPrimary: {
        color: "#eaebe8",
      },
    },
  },
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      open: false,
      notes: false,
    };
  }

  handleClick = () => {
    this.setState({
      open: true,
    });
  };
  handleCloseClick = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={themes}>
        <div className="fundoonotes-fullpage">
          <div className="fundoonotes-navBar">
            <div className="fundoonotes-navBarItems">
              <div className="navBarDehazComponent">
                <DehazeOutlinedIcon onClick={this.handleClick} />
                <SideDrawer
                  open={this.state.open}
                  handleCloseClick={this.handleCloseClick}
                />
              </div>

              <div className="navBarLogoComponent">
                <div className="logoComponent">
                  <img src={"../Assets/pngImages/googleKeep.png"}></img>
                </div>
              </div>
              <div className="navBarnotesComponent">
                <div className="notesComponent">fundooNotes</div>
              </div>
              <div className="navBarSearchOutlineComponent">
                <div className="navBarSearchComponents">
                  <div className="navBarSearchBarComponents">
                    <SearchOutlinedIcon />
                  </div>
                  <div className="SearchBarComponent">Search</div>
                </div>
              </div>

              <div className="navBarRefreshComponent">
                <div className="refreshComponent">
                  <RefreshOutlinedIcon />
                </div>
              </div>
              <div className="navBarAgendaComponent">
                <div className="agendarComponent">
                  <ViewAgendaOutlinedIcon />
                </div>
              </div>
              <div className="navBarSettingComponent">
                <div className="settingComponent">
                  <SettingsOutlinedIcon />
                </div>
              </div>
              <div className="navBardottedComponent">
                <div className="dottedComponent">
                  <AppsSharpIcon color="inherit" />
                </div>
              </div>
              <div className="navBarAccountCircleComponent">
                <div className="accountCircleComponent">
                  <AccountCircleIcon style={{ fontSize: 30 }} />
                </div>
              </div>
            </div>
          </div>
          <div className="fundooContainer">
            <div className="fundooContainerBar">
              <div className="fundooSidebar"></div>
              <div className="headerConatiner">
                <div className="headerNotesContainer">
                  <ClickAway />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default NavBar;
