import axios from 'axios'
export function signUp(data){
 let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
             data )
             console.log(response)
             return response;
}
export function signIn(data){
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
return response;
}
export function setToken(data){
    let resetPassToken=localStorage.getItem('tokenId')
    console.log(resetPassToken)
   let resetPasswordResponse= axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password",data,
{
    headers:{
        Authorization:resetPassToken
    }
})
return resetPasswordResponse
}
