// // Data Types

// // Declare a Variable

// var myName = "Dawood"
// myAge = 18

// let myAge = 19

// const pi = 3.14


//------------------------------------


// // Declare a Variable 
// var a;

// // Assign   a Variable
// var b = 20;


// // Printing outputs 
// console.log(a);


//------------------------------------


// //Initializing Variables
// var a = 9;

// //Uninitialized Variables
// var a;
// var b;
// var c;  //these can be initialised by assigning them a value using '='


//------------------------------------

//Case sensitivity

// declaration
// var myAGE;

// //asignment 
// myage = 9;    // This will not work becuase of case sensitivity --- use camel case


//------------------------------------
// Incrementing

// var myVar = 88;
// myVar++; // This is increment by 1 each time 


//------------------------------------
//Calculating the remainder of a division

// var remainder;
// remainder = 11 % 3; 
// console.log(remainder) // this will give the remainder 


//------------------------------------
// Compound

// a = a + 12;
// //same as 
// a += 12;


//------------------------------------
//FInd length of string

// var lastName = "Ahmed";

// lastNameLength = lastName.length
// console.log(lastNameLength)



//------------------------------------
//First letter of a string
// var lastName = "Ahmed";

// firstLetterOfLastName = lastName[0]
// console.log(firstLetterOfLastName)  //this will give the letter 'A'


//------------------------------------
// Correct the mistrake in a string

// var hello = "Jello World";

// hello = "Hello World";


//------------------------------------
// Find the last letter of string without knowing the length (if it was known, we could use index)
// var lastName;
// lastName = "Ahmed";

// lastLetterOfLastName = [lastName.length - 1]
// console.log(lastLetterOfLastName);


//------------------------------------
// Arrays
// var myStr = ["Dawood", 1];

// var dataArray = [50,60,70];
// var myData = dataArray[1]
// console.log(myData) // will print 60


//------------------------------------
// nested Array (array inside an array)
// var myStr = [["Bulls", 22],["Lakers" ,1]]


//------------------------------------
// Modify array

// var myStr = [50,40,70];
// myStr[1] = 60;
// console.log(myStr); //This will change 40 to 60;



//------------------------------------
//selecting elements in multi-dimension array

// var myStr = [[1,2,3] , [4,5,6] , [7,8,9] , [10,11,12] , 13 , 14];
// var myData = myStr[2][1]; 
//console.log(myData) // This will select the entry '8'...the first bracket chooses the array(the one inside) and then the other bracket chooses the position of the element inside the array...



//------------------------------------
//Manipulate Arrays with push

// var myArray = [['dog', 1] , ['cat', 2 ]]
// myArray.push(['kangaroo', 3])

// console.log(myArray) //this is add new arrays to the ones previously made (addition to arrays)




//------------------------------------
// Array of arrays - Shopping List

// var myList = [['cereal', 3] , ['milk', 2] , ['bananas', 3] , ['juice' , 2] , ['eggs', 12]]




//------------------------------------
// Reusable Function

// function reuseableFunction() {
//     console.log('Hi World!')
// }

// reuseableFunction();




//------------------------------------
//Function With Arguments

// function functionWithArgs(a,b) {
//     console.log(a + b)
// };

// functionWithArgs(10, 5)




//------------------------------------
// Global Scope

// var myGLobal = 10;
// //this can be used all around and in any function you want

// function fun1() {
//     var oopsGlobal = 5 //this can only be used inside this function ONLY!! IF there wasnt a var keyword...this would have been possible to be used outside as well.
// }



//------------------------------------
//Local Scopes and functions

// function myLocalScope(){
//     myVar = 5;
// }

// myLocalScope() //This will give output as 5

// console.log(myVar) //this will give an error as myVar is defined Inside a function and cant be used outside of it
// // Local Variable > global variable .... meaning if local and global variable have same names ...and it is called...local will take the lead



//------------------------------------
//Return a function
// function timesFive(num){
//     return num * 5;
// }

// console.log(timesFive(5));





//------------------------------------
// Boolean

// function welcomeToBooleans(){
//     return false;
// }
// console.log(welcomeToBooleans)  //THis will return Boolean 'FALSE'







//------------------------------------
//IF Statements

// function trueOrFalse(wasThatTrue){
//     if(wasThatTrue){
//         return 'Yes, that was true';
//     }
//     return 'No, That was false';
// }

// console.log(trueOrFalse(true)); //if its true..then first return statement will be executed or else the second (if false)





//------------------------------------
//Equality Operators

// function testEqual(val){
//     if (val == 12){
//         return 'Equal'
//     }
//     return 'Not Equal'
// }

// console.log(testEqual(10)) // this wil output 'Not equal' because 10 is not equal to 12

// '==' checks if value is same (equality)
// '===' checks if value and data type is same (strict equality)





//------------------------------------
// InEquality Operators

// function testNotEqual(val){
//     if (val != 12){
//         return 'Not Equal'
//     }
//     return 'Equal'
// }


// '!=' checks if value is NOt same (Inequality)
// '!==' checks if value and data type is same (strict Inequality)




//------------------------------------
// AND operators

// function testLogicalAnd(val) {
//     if(val > 25 && val < 50){
//         return 'Yes'
//     }
    
//     return 'No'
// }

// console.log(testLogicalAnd(30)) //This will output "Yes" as the 'val' is above 25 AND below 50





//------------------------------------
// OR operators

// function testLogicalOr(val) {
//     if(val < 10 || val > 20){
//         return 'Outside range'
//     }
    
//     return 'Inside range'
// }

// console.log(testLogicalAnd(30)) //This will output "Outside Range" as the 'val' either below 10 OR above 20 .






//------------------------------------
//Switch statemenets

// function caseInSwitch(val){
//     var answer = '';

//     switch(val){
//         case 1:
//             answer = "alpha"
//             break;
//         case 2:
//             answer = "beta"
//             break;
//         case 3:
//             answer = "gamma"
//             break
//         case 4:
//             answer = "delta"
//             break    
//             // the default statement will always return the bottom if the val is not the one specified
//         default:
//             answer = "Answer not specified properly"       
//             break; 

//     }
//     return answer;
// }

// console.log(caseInSwitch(1));






//------------------------------------

//This way mulitple inputs can have same outputs (e.g. 1,2 and 3 will give the outout as 'low')
// function caseInSwitch(val){
//     var answer = '';

//     switch(val){
//         case 1:
//         case 2:
//         case 3:
//             answer = "Low"
//             break;

//         case 4:
//         case 5:
//         case 6: 
//             answer = "Mid"
//             break;

//         case 7:
//         case 8:
//         case 9: 
//             answer = "High"
//             break;

//     }
//     return answer;
// }

// console.log(caseInSwitch(1));