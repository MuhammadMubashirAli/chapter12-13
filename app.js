
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
var nmbr1 = prompt("Entr first number")
var nmbr2 = prompt("Entr Second number")
if(nmbr1>nmbr2){
    alert('First Number is greater')
}else if(nmbr2>nmbr1){
    alert('Second Number is Greater')

}else if(nmbr1==nmbr2){
    alert('Both numbers are Equal')
}

// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.
var number = prompt("Entr Number")
if (number > 0){
    alert('Number is positive')
}else if(number<0){
    alert('Number is negative')
}else if(number==0){
    alert('Number is Zero')
}



// 4. Write a program that takes a character (i.e. string of 
//     length 1) and returns true if it is a vowel, false otherwise
var character = prompt('Entr any letter between a to z')
if(character=="a" || character=="e" || character=="i" || character=="o" || character=="u"){
    alert('The letter you entered is Vowel')
}else{
    alert('false')
}




// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise
var password = "pass123"
var userPassword = prompt("Entr THE Password")
if(userPassword == ""){
    alert("Please Enter Your Password")

}else if(password===userPassword){
alert("Correct Password")
}else{
    alert("Incorrect Password")
}



// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}