import axios from 'axios'

export function addNotes(data){
   let token= localStorage.getItem('tokenId')
   console.log(data)
   console.log(token)
//    const config = {     
//     headers: { 'content-type': 'multipart/form-data' }
// }
    let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",data,{
        headers:{
              
             Authorization:token,
            //  content-type:'multipart/form-data'
        }
    })
    return response;
}