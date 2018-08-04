/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate

//VARIABLES

const StudentLength = document.querySelectorAll('ul li').length;

const AllStudent = document.querySelectorAll('ul li');

let PageToDisplay;



//FUNCTIONS

 //Show me the proper page number regarding the students

 const getPageNumber = () => {

   if (StudentLength <10) {

       PageToDisplay = 1;

   } else if (Number.isInteger(StudentLength / 10))  {


       PageToDisplay = StudentLength/10;

   } else {

       PageToDisplay = Math.ceil((StudentLength/10));
   }


   return PageToDisplay;

 }

 // Hide all students

const hideAllStudent = () => {


 for (let i = 0; i < StudentLength; i +=1) {

     // select the i student from AllStudent
     AllStudent[i].style.display= "none";

   }
}
