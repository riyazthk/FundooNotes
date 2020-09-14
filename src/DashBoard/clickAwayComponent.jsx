import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import GroupWorkOutlinedIcon from "@material-ui/icons/GroupWorkOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import RedoOutlinedIcon from "@material-ui/icons/RedoOutlined";
import UndoOutlinedIcon from "@material-ui/icons/UndoOutlined";
import "../Styles/CreateNote.css";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import { createMuiTheme, InputBase, MuiThemeProvider } from "@material-ui/core";
import { addNotes } from "../services/notesService";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  riyaz: {
    position: "absolute",
    top: 18,
    right: 0,
    left: 0,
    zIndex: 1,
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));
const themes = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        width: "100%",
      },
    },
  },
});
export default function ClickAway() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [title, setTitle] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const handleNotesClick = () => {
    setOpen((prev) => !prev);
  };

  const handleCloseClick = () => {
    const formData = new FormData();
    setOpen(true);
    formData.append("title",title)
    formData.append("description",notes)
    addNotes(formData).then(response=>{
      console.log(response)
    }).catch(error=>{
      console.log(error)
    });

  };
  const handleTitleInput = (event) => {
    setTitle(event.target.value);
    //formData.append("title",title)
  };
  const handleNoteInput = (event) => {
    setNotes(event.target.value);
    // formData.append("description", notes);
    //addNotes(formData);

  };
//  let notesData={
//     title:title,
//     description:notes
//   }
  // formData.apppend("data",notesData)

  return (
    <MuiThemeProvider theme={themes}>
      <div className={classes.root}>
        {open ? (
          <div className="NotesContainer">
            <div className="takeNotes" onClick={handleNotesClick}>
              TakeNotes...
            </div>
            <div className="newList">
              <CheckBoxOutlinedIcon />
            </div>
            <div className="drawing">
              <BrushOutlinedIcon />
            </div>
            <div className="uploadImages">
              <ImageOutlinedIcon />
            </div>
          </div>
        ) : (
          <div className="createNotes">
            <div className="upperNotesElement">
              <InputBase
                defaultValue="title"
                inputProps={{ "aria-label": "naked" }}
                onChange={handleTitleInput}
              />
            </div>
            <div className="lowerNotesElement">
              <div className="outerTakeNotes">
                <InputBase
                  defaultValue="takeNote"
                  inputProps={{ "aria-label": "naked" }}
                  onChange={handleNoteInput}
                />
                <div className="notesOption">
                  <div className="alertComponent">
                    <AddAlertOutlinedIcon />
                  </div>
                  <div className="groupWorkComponent">
                    <GroupWorkOutlinedIcon />
                  </div>
                  <div className="colorPalleteComponent">
                    <ColorLensOutlinedIcon />
                  </div>
                  <div className="photoSizeComponent">
                    <PhotoSizeSelectActualOutlinedIcon />
                  </div>
                  <div className="archieveComponent">
                    <ArchiveOutlinedIcon />
                  </div>
                  <div className="moreVertComponent">
                    <MoreVertOutlinedIcon />
                  </div>
                  <div className="RedoComponent">
                    <RedoOutlinedIcon />
                  </div>
                  <div className="undoComponent">
                    <UndoOutlinedIcon />
                  </div>
                  <div className="closeComponent" onClick={handleCloseClick}>
                    close
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MuiThemeProvider>
  );
}
