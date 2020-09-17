import {
  Card,
  createMuiTheme,
  List,
  MuiThemeProvider,
} from "@material-ui/core";
import async from "async";
import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { getNotes } from "../services/notesService";
import "../Styles/View.css";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import GroupWorkOutlinedIcon from "@material-ui/icons/GroupWorkOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import BackgroundColorNotes from "./colorNotesComponent";

// const viewNote = () => {
//   // const [title, setTitle] = React.useState("");
//   // const [description,setDescription]=React.useState("");
//   //const [showNotes,setShowNotes]=React.useState([])
//   let getNotesList = [];
//   let open = true;
//   //  class ViewNote extends Component{
//   //    constructor(props){
//   //      super(props)
//   //      this.state={
//   //        title:"",
//   //        description:""
//   //      }
//   //    }

//   //async componentDidMount(){

//   // const printData = () => {
//     getNotes()
//       .then((response) => {
//         getNotesList.push(response.data.data.data);
//         console.log(getNotesList);
//         // console.log(getNotesList);
//         // // printData();
//         //console.log(response)
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//   //};

//   // let printData = () => {
//   // for (let i = 0; i < 10; i++) {
//   //   getNotesList.map((text, index) => {
//   //     setTitle(text[i].title)
//   //     setDescription(text[i].description)
//   //     // setShowNotes([
//   //     //   ...showNotes,{
//   //     //     noteTitle:title,
//   //     //     noteDescription:description
//   //     //   }
//   //     // ])
//   //   });

//   // };
//   return (
//     <Card id="viewNotesCard">

//       <div className="createViewNote">
//       <div className="getNotes">
//          {getNotesList.map((text, index) => {
//           <div key={index}>{text}</div>;
//         })}

//         </div>
//         <div>hii</div>
//       </div>
//      </Card>
//   );
// };
// export default viewNote;
let getNotesList = [];
const themes = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      root: {
        fontSize: "1.2rem",
        color: "grey",
      },
    },
  },
});
class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // title: "",
      // description: "",
      data: [],
      isHovered: true,
      index:0
    };
  }
  componentDidMount() {
    getNotes()
      .then((response) => {
        this.setState({ data: response.data.data.data });
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  toggleHover = (indexValue) => {
    this.setState({
      isHovered: false,
      index:indexValue
    });
  
    
  };
  toggleNotHover = () => {
    this.setState({
      isHovered: true,
    });
  };
  render() {
    return (
      <div>
      <MuiThemeProvider theme={themes}>
        <div className="viewNotes">
          {this.state.data.map((item, index) => {
            return (
              <div>
               {this.state.data[index] && this.state.isHovered ? (
                  <Card
                    id="viewNotesCard"
                    onMouseEnter={this.toggleHover.bind(this,index)}
                    onMouseLeave={this.toggleNotHover}
                    
                  >
                    <div className="viewTitleNote">{item.title}</div>
                    <div className="viewDescriptionNote">
                      {item.description}
                    </div>
                  </Card>
                ) : (
                  <Card
                    id="viewNotesCard"
                    onMouseEnter={this.toggleHover}
                    onMouseLeave={this.toggleNotHover}
                    tabIndex={this.state.data[this.state.index]}
                  >
                    <div className="viewTitleNote">{item.title}</div>
                    <div className="viewDescriptionNote">
                      {item.description}
                    </div>
                    {this.state.index===index ?
                    (<div className="notesIcon">
                      <div className="notesAlertComponent" id="same">
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
                    </div>):(null )}
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </MuiThemeProvider>
      
      </div>
    );
  }
}
export default ViewNote;
