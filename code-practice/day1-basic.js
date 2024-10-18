// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
/**
 * const day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6
 */
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


// 2.Write a JavaScript program to print the current window contents.  
function print_current_page() {
    // Call the window.print() method to initiate the printing of the current page
    window.print();
}

// 3.Write a JavaScript program to get the current date.  
let month = today.getMonth();
let formatMonth = month - 10 > 0 ? month - 1 : '0' + month - 1;
let year = today.getFullYear()
// console.log(`${formatMonth}-${day}-${year}`);

// 4.Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
let side1 = 5;
let side2 = 6;
let side3 = 7;
let semiPerimeter = (side1 + side2 + side3) / 2;
let area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
// console.log(area);

// 5 important,Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  
// function rotateStringRight(str) {
//     let arr = str.split('');
//     let last = arr.pop();
//     arr.unshift(last);
//     return arr.join('');
// }
// let str = "w3resource ";
// setInterval(()=>{
//     str=rotateStringRight(str);
//     document.getElementById('target').textContent = str;
// },1000)

/** 
 * 6，if just console.log(), no return, it will return additonal undefined
 * Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  
 * */
function leapyear(yr) {
    if ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0) {
        // return 'yes, it is leap year.'
        console.log('yes, it is leap year.');
    } else {
        // return 'No.'
        console.log('No.');
    }
}
// leapyear(2016)
// console.log(leapyear(2016)); // Expected output: true
// console.log(leapyear(2000)); // Expected output: true
// console.log(leapyear(1700)); // Expected output: false
// console.log(leapyear(1800)); // Expected output: false
// console.log(leapyear(100));  // Expected output: false

/**
 * 7.Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  
 * @param {*} date 
 * new Date()
new Date(value)
new Date(dateString)
new Date(dateObject)
new Date(year, monthIndex)
new Date(year, monthIndex, day) return Sun Jan 01 2023 00:00:00 GMT+0800 (Australian Western Standard Time)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
 */
function isSunday(yr) {
    for (yr; yr <= 2050; yr++) {
        const date = new Date(yr, 0, 1);
        console.log("1st January is being a Sunday  " + yr);
        return date.getDay() === 0 ? 'true' : 'false';
    }

}
// console.log(isSunday(2017));
// console.log(isSunday(2023));
// console.log(isSunday(2025));

//8.
// const input = prompt('Guess the number between 1 and 10 inclusive');
// const num = Math.ceil(Math.random()*10);
// if (num === input){
//     console.log('Matched', num);
// }else{
//     console.log('Not matched, the number was ' + num); 
// }

//9.
const xmas = new Date(new Date().getFullYear(), 11, 25);
const millisecondsAday = 24 * 60 * 60 * 1000;
const leftDay = Math.ceil(Math.abs(today - xmas) / millisecondsAday);
// console.log(leftDay);

//10.

function multiplyBy() {
    let firstInput = document.getElementById('firstNumber').value;
    let secondInput = document.getElementById('secondNumber').value;
    document.getElementById('result').innerHTML = firstInput * secondInput;
}
function divideBy() {
    let firstInput = document.getElementById('firstNumber').value;
    let secondInput = document.getElementById('secondNumber').value;
    document.getElementById('result').innerHTML = firstInput / secondInput;
}

//11.
function tempFormula(c) {
    const f = (c / 5) * 9 + 32
    console.log(c + '°C is ' + f + '°F');
}
tempFormula(60)

//12. Write a JavaScript program to get the website URL (loading page).
// console.log(document.URL);

// 13. Write a JavaScript exercise to create a variable using a user-defined name.  
function createVariable() {
    const varName = document.getElementById("varName").value;
    const varValue = document.getElementById("varValue").value;
    // Create the variable using the window object
    window[varName] = varValue;
    document.getElementById("result").innerText = `Variable ${varName} created with value: ${window[varName]}`;
}

//14,Write a JavaScript exercise to get the filename extension.
function showFileName(e) {
    const filename = document.getElementById("fileName").value.split('.');
    // console.log(filename.pop() );
}

/**
 * 15. Write a JavaScript program to get the difference between a given number and 13, 
 * if the number is broader than 13 return double the absolute difference. 
 */
// function difference(num){
//     if (num - 13 > 0){
//         console.log((num-13)*2);
//     }else{
//         console.log('less than 13');
//     }
// }
// difference(32)

//18.Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50. 
function test50(n1, n2) {
    return n1 === 50 || n2 === 50 || n1 + n2 === 50;
}
// console.log(test50(50, 50))
// console.log(test50(20, 50))
// console.log(test50(20, 20))
// console.log(test50(20, 30))

//21.
function restr(str) {
    if (str.substring(0, 2) !== "Py") {
        return 'Py' + str;
    } else {
        return str;
    }
}
// console.log(restr("Python"));
// console.log(restr("thghon"));

// 22.Write a JavaScript program to remove a character at the specified position in a given string and return the modified string. 
function remove_character(str, char_pos) {
    const str1 = str.substring(0, char_pos);
    const str2 = str.substring(char_pos + 1, str.length);
    return str1 + str2;
}
// console.log(remove_character("Python",0));
// console.log(remove_character("Python",3));
// console.log(remove_character("Python",5));

//23.
function first_last(str) {
    if (str.length <= 1) { return str; }
    return str.substring(str.length - 1, str.length) + str.substring(1, str.length - 1) + str.substring(0, 1);
}
// console.log(first_last('a'));
// console.log(first_last('ab'));
// console.log(first_last('abc'));

//30.
function check_script(str) {
    if (str.substring(4, 10) === 'Script') {
        return str.substring(0, 4) + str.substring(10, str.length);
    } else {
        return str;
    }
}
// console.log(check_script("JavaScript"));
// console.log(check_script("CoffeeScript"));

//31. Write a JavaScript program to find the largest of three given integers. important!
function max_of_three(x, y, z) {
    let max_val = 0;
    if (x > y) {
        max_val = x;
    } else {
        max_val = y;
    }
    if (z > max_val) {
        return z;
    } else {
        return max_val;
    }
}
// console.log(max_of_three(1, 0, 1));
// console.log(max_of_three(0, -10, -20));
// console.log(max_of_three(1000, 510, 440));

//32.
function near_100(x, y) {
    if (x !== y) {
        const diff1 = Math.abs(x - 100);
        const diff2 = Math.abs(y - 100);
        if (diff1 > diff2) {
            return y;
        } else {
            return x;
        }
    } else {
        return false;
    }
}
// console.log(near_100(90, 89));
// console.log(near_100(-90, -89));
// console.log(near_100(90, 90));

//35.
function check_char(str, char) {
    const givenStr = str.substring(1, 4);
    if (givenStr.includes(char)) {
        return true;
    } else {
        return false;
    }
}
// console.log(check_char("Python", "y"));
// console.log(check_char("JavaScript", "a"));
// console.log(check_char("Console", "o"));
// console.log(check_char("Console", "C"));
// console.log(check_char("Console", "e"));
// console.log(check_char("JavaScript", "S"));

//36.Write a JavaScript program that checks whether the last digit of three positive integers is the same. important
function last_digit(x, y, z) {
    if (x > 0 && y > 0 && z > 0) {
        return x % 10 === y % 10 && y % 10 === z % 10 && x % 10 === z % 10;
    } else {
        return false;
    }
}
// console.log(last_digit(20, 30, 400));
// console.log(last_digit(-20, 30, 400));
// console.log(last_digit(20, -30, 400));
// console.log(last_digit(20, 30, -400));

//37.
function upper_lower(str) {
    if (str.length <= 3) {
        return str.toUpperCase();
    }
}

/** important
 * Let’s say sum_nums = 60:
Correct Expression: 60 >= 50 && 60 <= 80 evaluates to true && true, which is true.
Incorrect Expression: 50 <= 60 <= 80 evaluates to true <= 80, which is true (since true is coerced to 1).
 */

//41.
function three_numbers(x, y, z) {
    if (x === y && y === z) {
        return 30;
    } else if (x === y && x !== z || x !== y && x == z) {
        return 20;
    } else {
        return 40;
    }
}
// console.log(three_numbers(8, 8, 8));
// console.log(three_numbers(8, 8, 18));
// console.log(three_numbers(8, 7, 18));

//43.
function same_last_digit(p, q, r) {
    if (p % 10 !== q % 10 && p % 10 !== r % 10 && q % 10 !== r % 10) {
        return false;
    } else {
        return true;
    }
    // return (p % 10 === q % 10) || (p % 10 === r % 10) || (q % 10 === r % 10);
}
// console.log(same_last_digit(22,32,42));
// console.log(same_last_digit(102,302,2));
// console.log(same_last_digit(20,22,45));

//48. Write a JavaScript program to reverse a given string.  reverse() can only be used in array.
function string_reverse(str) {
    return str.split('').reverse().join('');
}
// console.log(string_reverse("w3resource"));
// console.log(string_reverse("www"));
// console.log(string_reverse("JavaScript"));

//49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.  
function LetterChanges(text) {
    console.log("don't understand");
}

// 50.
function capital_letter(str) {
    const arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1, arr[i].lenth)
    }
    return arr.join(' ');
}
// console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));

//51.
function time_convert(num) {
    const mins = num % 60;
    const hours = Math.floor(num / 60)
    return hours + 'h:' + mins + 'min';
}
// console.log(time_convert(71));
// console.log(time_convert(450));
// console.log(time_convert(1441));

//52.Write a JavaScript program to convert letters of a given string alphabetically.
function alphabet_Soup(str) {
    return str.split('').sort().join('');
}
// console.log(alphabet_Soup("Python"));
// console.log(alphabet_Soup("Exercises"));

// 53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string. important
function ab_Check(str) {
    return (/a...b/).test(str) || (/b...a/).test(str);
}
// console.log(ab_Check("a123b123a"));
// console.log(ab_Check("pane borrowed"));
// console.log(ab_Check("abCheck"));

//54.Write a JavaScript program to count the number of vowels in a given string.
function vowel_Count(str) {
    const arr = str.split('');
    return arr.filter(e => e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u').length;
}
// console.log(vowel_Count("Python"));
// console.log(vowel_Count("w3resource.com"));

//55. Write a JavaScript program to check whether a given string contains an equal number of p's and t's.
function equal_pt(str) {
    const arr = str.split('');
    const tarr = arr.filter(e => e === 't');
    const parr = arr.filter(e => e === 'p');
    return tarr.length === parr.length;
}
// console.log(equal_pt("paattpss"));
// console.log(equal_pt("paatps"));

/**56. Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.
 * toLocaleString()   important
toLocaleString(locales)
toLocaleString(locales, options)
 * */
function division_string_format(number1, number2) {
    if (number2 === 0) {
        return 'cannot divide by 0';
    }
    let result = number1 / number2;
    return result.toLocaleString({ maximumFractionDigits: 2 });
}
// console.log("Result: " +  division_string_format(10000000, 21));

// 57. Write a JavaScript program to create one string of specified copies (positive numbers) of a given string. important
function string_copies(str, n) {
    if (n <= 0) {
        return 'negative number.';
    }
    return str.repeat(n);
}
// console.log(string_copies("abc", 5));
// console.log(string_copies("abc", 0));
// console.log(string_copies("abc", -2));

//58. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.
function newstring(str) {
    if (str.length < 3) {
        return 'invalid str.'
    }
    const lastThreeCha = str.substring(str.length - 3);
    return str.concat(lastThreeCha.repeat(3))
}
// console.log(newstring("Python 3.0"));
// console.log(newstring("JS"));
// console.log(newstring("JavaScript"));

//59. Write a JavaScript program to extract the first half of a even string.
function first_half(str) {
    if (str.length % 2 !== 0) {
        return str;
    }
    return str.substring(0, str.length / 2);
}
// console.log(first_half("Python"));  
// console.log(first_half("JavaScript")); 
// console.log(first_half("PHP"));

//60.Write a JavaScript program to create a new string without the first and last characters of a given string.
function without_first_end(str) {
    return str.slice(1, str.length - 1);
}
// console.log(without_first_end('JavaScript'));
// console.log(without_first_end('JS'));
// console.log(without_first_end('PHP'));

//61. Write a JavaScript program to concatenate two strings except for their first character.
function concatenate(str1, str2) {
    return str1.slice(1).concat(str2.slice(1));
}
// console.log(concatenate("PHP","JS"));
// console.log(concatenate("A","B"));
// console.log(concatenate("AA","BB"));

//62. Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.
function right_three(str) {
    if (str.length < 3) return false;
    return str.slice(-3).concat(str.slice(0, -3));
}
// console.log(right_three("Python"));
// console.log(right_three("JavaScript"));
// console.log(right_three("Hi")); 

//64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.
function str_con_cat(str1, str2) {
    const minNum = Math.min(str1.length, str2.length);
    return str1.slice(-minNum) + str2.slice(-minNum);
}
console.log(str_con_cat("Python", "JS"));
console.log(str_con_cat("ab", "cdef"));

//69.Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
function sum_three(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++ ){
        sum += nums[i];
    }
    return sum;
}
// console.log(sum_three([10, 32, 20]));
// console.log(sum_three([5, 7, 9]));
// console.log(sum_three([0, 8, -11]));

//70. Write a JavaScript program to rotate the elements left in a given array of integers of length 3. important
function rotate_elements_left(array){
    let arr = [];
    for(let i = 0; i < array.length-1; i++ ){
        const first = array.shift();
        console.log(first);
        array.push(first);
       
        console.log(array);
        
    }
    return array;
}
console.log(rotate_elements_left([3, 4, 5]));  
// console.log(rotate_elements_left([0, -1, 2]));  
// console.log(rotate_elements_left([7, 6, 5])); 