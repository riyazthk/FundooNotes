import React, { Component } from "react";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import GroupWorkOutlinedIcon from "@material-ui/icons/GroupWorkOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import BackgroundColorNotes from "./colorNotesComponent";
import { Card } from "@material-ui/core";
class HoverNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
         isHovered: true ,
         index:0,
         item:"",
         description:""
        };
  }
  toggleHover = () => {
    this.setState({
      isHovered: false,
      
    });
  };
  toggleNotHover = () => {
    this.setState({
      isHovered: true,
    });
  };
  getData(indexValue,itemValue,descriptionName){
      console.log("sucess")
    this.setState({
        index:indexValue,
        item:itemValue,
        description:descriptionName
    })
    console.log(this.state.item+" "+this.state.description+" "+this.state.index)
  }
  render() {
    return (
      <div>
        {this.state.isHovered ? (
          <Card
          id="viewNotesCard"
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleNotHover}
        >
          <div className="viewTitleNote">{this.state.item}</div>
          <div className="viewDescriptionNote">{this.state.description}</div>
          
          <div className="notesIcon">
            <div className="notesAlertComponent"  id="same">
              <AddAlertOutlinedIcon />
            </div>
            <div className="notesGroupWorkComponent" id="same">
              <GroupWorkOutlinedIcon />
            </div>
            <div className="notesColorPalleteComponent" id="same">
              <BackgroundColorNotes />
            </div>
            <div className="notesPhotoSizeComponent" id="same">
              <PhotoSizeSelectActualOutlinedIcon />
            </div>
            <div className="notesArchieveComponent" id="same">
              <ArchiveOutlinedIcon />
            </div>
            <div className="notesMoreVertComponent" id="same">
              <MoreVertOutlinedIcon />
            </div>
          </div>
        </Card>
        ) : (
          null
        )}
      </div>
    );
  }
}

HoverNote.getData = undefined;

export default HoverNote;
