let name="Kanagaraj S";

let message=`Hello, ${name}! Welcome to JavaScript.`;
console.log(message);

console.log(name.toUpperCase());



if(message.length>10){
    console.log("yes it has more then 10 charecter");
}
else{
   console.log("No it does't have more then 10 charecter"); 
}
if(message.toLowerCase().includes("javascript")){
    console.log("yes ,it have the word");
}
else{
   console.log("No ,it does't have that word"); 
}