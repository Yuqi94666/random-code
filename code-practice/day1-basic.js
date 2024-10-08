var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log("Today is: " + daylist[day] + ".");

// Get the current hour, minute, and second
let hour = today.getHours();
let prepend = hour < 12 ? hour + 'am' : (hour - 12) + 'pm';
let minute = today.getMinutes();
let second = today.getSeconds();
// console.log(`Current time is : ${prepend}:${minute}:${second}`);


// Define a function named print_current_page
function print_current_page() {
    // Call the window.print() method to initiate the printing of the current page
    window.print();
}

// 3
let month = today.getMonth();
let formatMonth = month -10>0? month-1: '0'+month-1;
let year = today.getFullYear()
// console.log(`${formatMonth}-${day}-${year}`);

// 4

