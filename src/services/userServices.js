import axios from 'axios'
export function signUp(data){
 let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
             data )
             return response;
}
export function signIn(data){
    // let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login"
    //     ,data,{headers:{
    //         Authorisation:data.atom.id
    //     }})
    // return response;
    let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",
             data )
             return response;
}
export  function resetPassword(data){
    let token=localStorage.getItem('tokenId')
    console.log(token)
let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/reset",data,
{headers:{
   Authorization:token
}})

let resetTok;
let res= axios.post('http://localhost:4200/resetpassword/$resetTok')
 
 console.log(res)
return res;
}
export function setToken(data){
    let resetPassToken=localStorage.getItem("resetTokenId")
    axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password",data,
{
    headers:{
        Authorization:resetPassToken
    }
})
}
