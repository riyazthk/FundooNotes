let addition=function(x,y){
  return new Promise((resolve,reject)=>{
    var sum=x+y
    if(sum){
        resolve(sum);
    }
    else{
        reject(Error("Could not add two values"));
    }
  })
}
const promiseObj=addition();
promiseObj.then(result=>{
    console.log(result);
}).catch((err)=>{
    console.log(err)
})
