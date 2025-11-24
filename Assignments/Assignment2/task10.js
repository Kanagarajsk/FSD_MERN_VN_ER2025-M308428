let bus_number=28;

if(bus_number==0 || bus_number<0){
    console(`there is no bus number : ${bus_number}`);
}
else if(bus_number%2==0){
    console.log(`${bus_number} - this bus goes Route A`);
}
else{
    console.log(`${bus_number} - this bus goes Route B`);
}