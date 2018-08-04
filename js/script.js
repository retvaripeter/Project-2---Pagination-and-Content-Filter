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

 const addPageNumber = () => {

 getPageNumber ();

  let BigDiv = document.createElement("div"); //create a DIV to store all <a> elements inside

  BigDiv.setAttribute('class', 'pagination'); // add class attribute: "BigDiv"

  document.querySelector('.page').appendChild(BigDiv); // add 'BigDiv' to DOM

      for (let i = 1; i <= PageToDisplay; i +=1) {

          let LiElement = document.createElement("li"); //create <li> element

          document.querySelector('.pagination').appendChild(LiElement); //add Li elements to the BigDiv

        }

        for (let j = 1; j <= PageToDisplay; j +=1) {

            let AnchorElement = document.createElement("a"); //create <li> element

            AnchorElement.innerHTML = j ; //add j to the <a> element

            document.querySelector('.pagination li').appendChild(AnchorElement); //add Anchorelement to Li

          }

        // let AnchorElement = document.createElement("a"); //create <a> element
        //
        // AnchorElement.innerHTML = i ; //add i to the <a> element
        //
        // document.querySelector('.pagination').appendChild(AnchorElement); //add Anchorelement to the BigDiv



    //   // create variables for selection
    //
    //   let SelectBigDiv = document.querySelector('.BigDiv');
    //   let SelectAnchor = document.querySelectorAll('.BigDiv a');
    //
    //   SelectBigDiv.style.textAlign = "center"; //Put the numbers in the center
    //
    //   SelectBigDiv.style.marginTop= "20px"; //Set margintop
    //
    //   SelectBigDiv.style.letterSpacing = "5px"; //Set letterspacing
    //
    //   SelectBigDiv.style.overflow = "auto"; //Set overflow for the case when are a lot of student, like 1781
    //
    //   //Format the page display with DOM style, CSS property
    //
    //     for (let i = 0; i < PageToDisplay; i +=1) {
    //
    //   SelectAnchor[i].style.color = "darkblue";
    //   SelectAnchor[i].style.letterSpacing = "0px";
    //   SelectAnchor[i].style.margin = "0px 2px 0px 2px";
    //
    // }

  } // end of addPageNumber function

     // Hide all students

    const hideAllStudent = () => {

//create loop that loops trough all student till the 10th and set the display to none
     for (let i = 0; i < StudentLength; i +=1) {

         // select the i student from AllStudent
         AllStudent[i].style.display= "none";

       }
    }

 // II. Show only the first 10 student and display the actual page numbers to the bottom of the page

 const first10 = () => {

 hideAllStudent (); //hide all student

 let SelectAnchor = document.querySelectorAll('.pagination a');

      for (let i = 0; i < 10; i +=1) { //create loop that loops trough all student till the 10th and set the display from none to block

          // select the i student from AllStudent
          AllStudent[i].style.display= "block";

        }

} // first10 function ends

//Program starts

 first10(); //hide all students and add the first 10

 addPageNumber(); //add pagnumbers

 let SelectAnchor = document.querySelectorAll('.pagination a'); //define DOM element
 let SelectBigDiv = document.querySelector('.pagination'); //define DOM element

 // III. If you click on the pagenumber will show the actual student to the proper page

    SelectBigDiv.addEventListener("click", function(event){  // If you click on each <a> tag the event listener starts.

         hideAllStudent();
         let eventContent = parseInt(event.target.textContent); // Inside event handler event.target will equal to the number of the user clicked

           for (let i = (eventContent*10)-10; i < (eventContent*10); i +=1) {

               //select the i student from AllStudent
               AllStudent[i].style.display= "block";

             }
         });
