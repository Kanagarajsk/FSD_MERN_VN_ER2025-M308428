// 6.
// A theatre booking system has: totalSeats = 120 and bookedSeats = 78.
//  Write a program to Calculate available seats, Check if the show is
// “Almost Full” if seats < 20, “Moderate Availability” if seats between 20–60, 
// “Plenty of Seats Available” if seats > 60. Print both the exact number of seats left
//  and the status message.

const total_seats=120;

let booked_seat=78;

let available = total_seats-booked_seat;

if(available<20){
    console.log(`${available} seats available -so `+"Almost Full");
}
else if(available>=20 && available<=60){
    console.log(`${available} seats available -so `+"Moderate Availability");
}
else{
    console.log(`${available} seats available -so `+"Plenty of Seats Available");
}