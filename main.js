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

function functionWithArgs(a,b) {
    console.log(a + b)
};

functionWithArgs(10, 5)




//------------------------------------
// Global Scope