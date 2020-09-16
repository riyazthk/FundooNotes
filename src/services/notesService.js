import { Notes } from "@material-ui/icons";
import axios from "axios";
import note from "../apiConstanst/notesApiConstant";



export function addNotes(data) {
  let token = localStorage.getItem("tokenId");
  console.log(data);
  console.log(token);

  let response = axios.post(
    process.env.REACT_APP_BASE_URL+note.addNotes,
    data,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  return response;
}

export function getNotes(){
    let token=localStorage.getItem("tokenId")
    let response=axios.get(process.env.REACT_APP_BASE_URL+note.getNotes,{
        headers:{
            Authorization:token
        }
    })
    return response
}
