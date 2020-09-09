let add=function(a,b){
    return a+b;
}
let sub=function(a,b){
    return a-b;
}

let cal=function(num1,num2,callback){
    return callback(num1,num2)
    
};
console.log(cal(4,5,add))
console.log(cal(4,5,sub))