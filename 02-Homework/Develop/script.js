// Assignment Code

var newPassword = prompt("Do you need new password?", '');
if (newPassword === "yes" || newPassword === "Yes") {
    alert("Great, you said " + newPassword)
} else { alert("I don't understand your input. Please say Yes") };

var age = prompt("Are you 18 years old?");
if (age === "yes" || age === "Yes") {
    alert("Welcome!!!");
} else {
    alert("You are too young!!!");
}

var length = confirm("The password should be at least 8 and no more than 128 characters!");

//if (confirm("Do you want upper case charactors in your password?")) { passwdDict = passwdDict + upperCase };
//if (confirm("Do you want number charactors in your password?")) { passwdDict = passwdDict + numBers };
//if (confirm("Do you want special charactors in your password")) { passwdDict = passwdDict + numBers }

//var typeCharacters = prompt("What tipe of characters do you want? lovercase, uppercase, numbers or spetialCharacters. Please, make your choice!!! ");
//if (typeCharacters === " lovercase "  && typeCharacters === " uppercase " && typeCharacters === " numbers " && typeCharacters === " spetialCharacters ") {

//alert("Great choice!!!");

//} else {
//alert("Please, one more time!!!");
//}

var lengthPassword = prompt("What do the password length you want?");
alert(lengthPassword);
if (lengthPassword >= 8 && lengthPassword <= 128) {
    alert("Please, get a new password!");
} else {
    alert("You gave the wrong number!!!");
}


function generatePasswd() {


    //password dictionary
    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    var password = '';
    for (var i = 0; i < lengthPassword; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    document.getElementById("password").placeholder = password
        //return alert(password);
        //add password to textbox/display are

}

// Add event listener to generate button
document.querySelector(".btn").addEventListener("click", generatePasswd);