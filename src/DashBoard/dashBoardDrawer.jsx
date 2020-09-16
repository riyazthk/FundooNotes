import React, { Component } from "react";
import {
  SwipeableDrawer,
  Drawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  makeStyles,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import NavBar from "./navBar";
import { withStyles } from "@material-ui/styles";
import "../Styles/DashBoardDrawer.css";

let messageWord = ["Notes", "Reminders", "edit Labels", "Archieve", "Trash"];
let messageIcon = [
  <EmojiObjectsOutlinedIcon />,
  <NotificationsNoneOutlinedIcon />,
  <EditOutlinedIcon />,
  <ArchiveOutlinedIcon />,
  <DeleteOutlineOutlinedIcon />,
];
const drawerWidth = 300;

const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        width: "16.5%",
        top: "12.5%",
      },
    },
  },
});
class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="DrawerComponent">
          <Drawer open={this.props.open} anchor={"left"} variant="persistent">
            <KeyboardBackspaceIcon onClick={this.props.handleCloseClick} />

            <List>
              {messageWord.map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? messageIcon[index] : messageIcon[index]}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default SideDrawer;
