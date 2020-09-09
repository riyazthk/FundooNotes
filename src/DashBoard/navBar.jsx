import React, { Component } from "react";

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
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';

import "../Styles/navBar.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiIcon: {
      colorPrimary: {
        //color: "#eaebe8",
        color: "#eaebe8",
      },
    },
  },
});
class navBar extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="fundoonotes-fullpage">
          <div className="fundoonotes-navBar">
            <div className="fundoonotes-navBarItems">
              <div className="navBarDehazComponent">
                <DehazeOutlinedIcon />
              </div>
              <div className="navBarLogoComponent">
                <div className="logoComponent">
                  <img src={"./src/Assets/pngImages/googleKeep.png"}></img>
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
              <div className="fundooSidebar">
                <div className="sideBarEmojiObjectsComponent">
                  <div className="EmojiObjectsComponent">
                    <EmojiObjectsOutlinedIcon />
                  </div>
                </div>
                <div className="sideBarNotificationsComponent">
                  <div className="NotificationsComponent">
                    <NotificationsNoneOutlinedIcon />
                  </div>
                </div>
                <div className="sideBarEditComponent">
                  <div className="EditComponent">
                    <EditOutlinedIcon />
                  </div>
                </div>
                <div className="sideBarArchiveComponent">
                  <div className="ArchiveComponent">
                    <ArchiveOutlinedIcon />
                  </div>
                </div>
                <div className="sideBarDeleteComponent">
                  <div className="DeleteComponent">
                    <DeleteOutlineOutlinedIcon />
                  </div>
                </div>
              </div>
              <div className="headerConatiner">
                <div className="headerNotesContainer">
                  <div className="NotesContainer">
                    <div className="takeNotes">TakeNotes...</div>
                    <div className="newList"><CheckBoxOutlinedIcon/></div>
                    <div className="drawing"><BrushOutlinedIcon/></div>
                    <div className="uploadImages"><ImageOutlinedIcon/></div>
                    </div>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default navBar;
