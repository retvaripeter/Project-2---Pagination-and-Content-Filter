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

 // I. Display link and the actual page number at the bottom of the page

 //Add HTML element <div> with class="page">

 const addElement = (i) => {

 getPageNumber ();

  let BigDiv = document.createElement("div"); //create a DIV to store all <a> elements inside

  BigDiv.setAttribute('class', 'BigDiv'); // add class attribute: "BigDiv"

  document.querySelector('.page').appendChild(BigDiv); // add 'BigDiv' to DOM

      for (let i = 1; i <= PageToDisplay; i +=1) {

        let AnchorElement = document.createElement("a"); //create <a> element


        AnchorElement.innerHTML = i ; //add i to the <a> element

        document.querySelector('.BigDiv').appendChild(AnchorElement); //add Anchorelement to the BigDiv

      }

      document.querySelector('.BigDiv').style.textAlign = "center"; //Put the numbers in the center

      document.querySelector('.BigDiv').style.marginTop= "20px"; //Set margintop

      document.querySelector('.BigDiv').style.letterSpacing = "5px"; //Set letterspacing

      document.querySelector('.BigDiv').style.overflow = "auto"; //Set overflow for the case when are a lot of student, like 1781

      /* unvisited link */

        for (let i = 0; i < PageToDisplay; i +=1) {

          const findA1 = document.querySelectorAll('.BigDiv a');

      findA1[i].style.color = "darkblue";

    }

      // reduce the letterspacing from <a> with at least 2 characters



        for (let i = 9; i <= PageToDisplay; i +=1) {

          const findA2 = document.querySelectorAll('.BigDiv a'); // select all <a> elements

          findA2[i].style.letterSpacing = "0px";
          findA2[i].style.margin = "0px 2px 0px 2px";

        }

 	}




 // Hide all students

const hideAllStudent = () => {


 for (let i = 0; i < StudentLength; i +=1) {

     // select the i student from AllStudent
     AllStudent[i].style.display= "none";

   }
}
