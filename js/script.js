/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

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

 } // end of get Pagenumber function

 // I. Display link and the actual page number at the bottom of the page

 //Add HTML element <div> with class="BigDiv" to class Page

 const addPageNumber = (i) => {

 getPageNumber ();

  let BigDiv = document.createElement("div"); //create a DIV to store all <a> elements inside

  BigDiv.setAttribute('class', 'BigDiv'); // add class attribute: "BigDiv"

  document.querySelector('.page').appendChild(BigDiv); // add 'BigDiv' to DOM

      for (let i = 1; i <= PageToDisplay; i +=1) {

        let AnchorElement = document.createElement("a"); //create <a> element

        AnchorElement.innerHTML = i ; //add i to the <a> element

        document.querySelector('.BigDiv').appendChild(AnchorElement); //add Anchorelement to the BigDiv

      }

      // create variables for selection

      let SelectBigDiv = document.querySelector('.BigDiv');
      let SelectAnchor = document.querySelectorAll('.BigDiv a');

      SelectBigDiv.style.textAlign = "center"; //Put the numbers in the center

      SelectBigDiv.style.marginTop= "20px"; //Set margintop

      SelectBigDiv.style.letterSpacing = "5px"; //Set letterspacing

      SelectBigDiv.style.overflow = "auto"; //Set overflow for the case when are a lot of student, like 1781

      //Format the page display with DOM style, CSS property

        for (let i = 0; i < PageToDisplay; i +=1) {

      SelectAnchor[i].style.color = "darkblue";
      SelectAnchor[i].style.letterSpacing = "0px";
      SelectAnchor[i].style.margin = "0px 2px 0px 2px";

    }

     // Hide all students

    const hideAllStudent = () => {

//create loop that loops trough all student till the 10th and set the display to none
     for (let i = 0; i < StudentLength; i +=1) {

         // select the i student from AllStudent
         AllStudent[i].style.display= "none";

       }
    }
} // end of addPageNumber function

 // II. Show only the first 10 student and display the actual page numbers to the bottom of the page

 const first10 = () => {

 hideAllStudent (); //hide all student

      for (let i = 0; i < 10; i +=1) { //create loop that loops trough all student till the 10th and set the display from none to block

          // select the i student from AllStudent
          AllStudent[i].style.display= "block";

        }

 addPageNumber(); //ad pagnumbers

} // first10 function ends
