//It will match a , ab, abb , abbbbbb , abbbbbbb and so on.
//But will not match b, bc, abc,aba , etc.
//! * means zero or more occurences of the previous character.
var reg = /ab*/;
//or
var reg = new RegExp('ab*');

// Example 1: find all occurrences of a pattern in a string
// var fs = require('fs');
// var str = fs.readFileSync('regex/data.txt').toString();
// // g : global scope
// // i : case insensitive
// // m : multiline match
// var pattern = /man/gim;
// var myarray = str.match( pattern );
// var len = myarray.length;
// console.log("Occurrences of pattern in the string is : " + len);
// console.log("Regex found this : " + myarray);

// Example 2: find number of tags using regular expression
// var fs = require('fs');
// var filename = 'regex/data.html';
// var str = fs.readFileSync(filename).toString();
// var pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;

// var myarray = str.match( pattern );
// var len = myarray.length;
// console.log("Occurrences of pattern in the string is : " + len);
// console.log("Regex found this : " + myarray);

// Example 3: check if a string is valid email address
// var str = 'rjbitdemo@gmail.com'
// var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// var res = str.match( pattern );
// if(res){
// 	console.log("Valid email address");
// }else{
// 	console.log("Please enter a valid email address");
// }

// Example 4: Validating Hexadecimal number
// var str = 'FFFFFF'
// var pattern = /^[a-fA-F0-9]+$/g;

// var res = str.match( pattern );
// if(res){
// 	console.log("Valid Hexadecimal number");
// }else{
// 	console.log("Not a valid Hexadecimal number");
// }


// Example 5: Validating Password
// // Password must contain 1 capital letter [A-Z]
// // Password must contain 1 small letter [a-z]
// // Password must contain 1 number [0-9]
// // Password must contain 1 special character [!,@,#,$,%,^,. . . ] etc
// // Length of the password must be within the range [6 to 16]
// var str = 'Aa#1aaabcde'
// var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;

// var res = str.match( pattern );
// if(res){
// 	console.log("Valid password");
// }else{
// 	console.log("Not a valid password");
// }