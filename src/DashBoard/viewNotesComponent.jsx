import { List } from "@material-ui/core";
import async from "async";
import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { getNotes } from "../services/notesService";
import "../Styles/View.css";

const viewNote = () => {
  // const [title, setTitle] = React.useState("");
  // const [description,setDescription]=React.useState("");
  //const [showNotes,setShowNotes]=React.useState([])
  let getNotesList = [];
let open=true 
//  class ViewNote extends Component{
//    constructor(props){
//      super(props)
//      this.state={
//        title:"",
//        description:""
//      }
//    }

  //async componentDidMount(){
  getNotes()
    .then((response) => {
       getNotesList.push(response.data.data.data);
       console.log(getNotesList)
      // console.log(getNotesList);
      // // printData();
      //console.log(response)
    })
    .catch((error) => {
      console.log(error);
    });
  
  // let printData = () => {
  // for (let i = 0; i < 10; i++) {
  //   getNotesList.map((text, index) => {
  //     setTitle(text[i].title)
  //     setDescription(text[i].description)
  //     // setShowNotes([
  //     //   ...showNotes,{
  //     //     noteTitle:title,
  //     //     noteDescription:description
  //     //   }
  //     // ])
  //   });
  
      // };
      return ( 
        <List>
      <div className="createViewNote">
        {open ? getNotesList.map((text,index)=>{
            <div key={index}>{text}</div>
       })
       :null    
      }  
      </div>
      </List> 
            
      )
    
    
 
}
export default viewNote;
