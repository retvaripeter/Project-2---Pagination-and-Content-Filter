/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//VARIABLES

let StudentLength = document.querySelectorAll('ul li').length;

const AllStudent = document.querySelectorAll('ul li');

let PageToDisplay;

let visibleArray = [];

//FUNCTIONS

 //Show me the proper page number regarding the students

 const getPageNumber = (length) => {

   //we will use PageToDisplay value for the pagination. If the number of student less then 10, then the value is 1 and so on..

   if (length <10) { // length means the original number of student or after search the visible studentnumber

       PageToDisplay = 1; // here PageToDisplay suggest that the page number at the bottom should be 1

   } else if (Number.isInteger(length / 10))  {


       PageToDisplay = length/10; // here PageToDisplay suggest that the page number at the bottom should be number of student devided by 10

   } else {

       PageToDisplay = Math.ceil((length/10)); // here the formula is based on the integer number. e.g.: 54/10 is 5.4. After we just round up to 6.
   }

   return PageToDisplay;

 }

 getPageNumber (StudentLength);

 // end of get Pagenumber function

 // I. Display link and the actual page number at the bottom of the page

 //Add HTML element <div> with class="pagination" to class Page

 const addPageNumber = (page) => {


  let BigDiv = document.createElement("div"); //create a DIV to store all <a> elements inside

  BigDiv.setAttribute('class', 'pagination'); // add class attribute: "pagination"

  document.querySelector('.page').appendChild(BigDiv); // add 'BigDiv' to DOM



          let LiElement = document.createElement("li"); //create <li> element

          document.querySelector('.pagination').appendChild(LiElement); //add Li elements to the BigDiv


          // the loop will give each <a> a value (like 1 or 2 or 3) regarding the number of PageToDisplay value, however we can use any value instead of PageToDisplay,
          // because I set a 'page' property

        for (let j = 1; j <= page; j +=1) {

            let AnchorElement = document.createElement("a"); //create <li> element

            AnchorElement.innerHTML = j ; //add j to the <a> element

            document.querySelector('.pagination li').appendChild(AnchorElement); //add Anchorelement to Li

          }

  } // end of addPageNumber function

  // created a rebuildPagnumber in case if I have to rebuild the pagination

  const reBuildPageNumber = (length) => {

// remove childelement pagination
    let divToRemove = document.querySelector('.pagination');
    document.querySelector('.page').removeChild(divToRemove);

// call the functions I created above to build up the pagenumber to display and the pagination
    getPageNumber (length);
    addPageNumber(PageToDisplay);

  }

// in case if I have to call only the pagenumber-remove and don't want to build up the others
  const removePagnumber = () => {

    let divToRemove = document.querySelector('.pagination');
    document.querySelector('.page').removeChild(divToRemove);


  }

// Create searchbar from Javascript to care about Progressive Enhancement and remain the page Unobstrusive

  const createSearchBar = () => {

 //Add DIV tag to create a search bar dinamically

 let studentSearch = document.createElement("div"); //create a DIV to store input and button element inside

 studentSearch.setAttribute('class', 'student-search'); // add class attribute: "student-search"

 document.querySelector('.page-header').appendChild(studentSearch); // add 'studentSearch' to DOM

 const selectStudentSearch = document.querySelector('.student-search'); //select Studentsearch DOM element on the page

 //Add Input tag to create a search bar dinamically

 let barInput = document.createElement("input"); //create an Input element

 //add attributes type and placeholder

 barInput.setAttribute('type', 'text'); // tpye: 'text'
 barInput.setAttribute('placeholder', 'Search for students...'); // tpye: 'placeholder'

 selectStudentSearch.appendChild(barInput); // add 'barinput' to DOM

 //Add Button tag to create a search bar dinamically

 let barButton = document.createElement("button"); //create a Button element

 //add attributes type and placeholder

 barButton.setAttribute('type', 'submit'); // tpye: 'text'
 barButton.innerHTML = ('Search'); // add 'search' inside button

 selectStudentSearch.appendChild(barButton); // add 'barButton' to DOM

} //create createSearchBar function ends

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


      for (let i = 0; i < 10; i +=1) { //create loop that loops trough all student till the 10th and set the display from none to block

          // select the i student from AllStudent
          AllStudent[i].style.display= "block";

        }

} // first10 function ends

// Show all the student

const showAllStudent = () => {

hideAllStudent (); //hide all student


     for (let i = 0; i < StudentLength; i +=1) { //create loop that loops trough all student till the 10th and set the display from none to block

         // select the i student from AllStudent
         AllStudent[i].style.display= "block";

       }

} // showAllStudent function ends

//Program starts and call the basic functions

 first10(); //hide all students and add the first 10

 addPageNumber(PageToDisplay); //add pagnumbers

 createSearchBar(); // create searchbar and add to the DOM

 let SelectAnchor = document.querySelectorAll('.pagination a'); //define DOM element
 let SelectBigDiv = document.querySelector('.pagination'); //define DOM element

 //create function that remove active class to the current Pagenumber

 const removeClass =()=> {


   // Get all buttons with a inside the container
   let getAllAnchor = document.querySelectorAll('.pagination a');

   // loop trough each anchor and set the classname to none
   for (let i = 0; i < getAllAnchor.length; i +=1) {

   getAllAnchor[i].className = "";

     }

}

 // Add active class to the current button (highlight it) - MAKE THE PAGINATION RESPONSIVE/LIVE

 // III. If you click on the pagenumber will show the actual student to the proper page

 const buildClick = (student, length) => {

    SelectBigDiv.addEventListener("click", function(event){  // If you click on each <a> tag the event listener starts.

         hideAllStudent();

         let eventContent = parseInt(event.target.textContent); // Inside event handler event.target will equal to the number of the user clicked

removeClass(); // if you click on another number will remove the active class from the previous one
event.target.className = 'active'; // set the current number an 'active' class

// now we show the student regarding the number we clicked - eventcontent is equal to the number we clicked on
// so we can use the exact number to build the following rule:

           for (let i = (eventContent*10)-10; i < (eventContent*10); i +=1) { // it means e.g.: number 2 (if we clicked on number 2) => (let i= 10; i < 20; i+=1)

               //select the i student from AllStudent and set the display property to block to show it on the page
               student[i].style.display= "block";

               if (i === (length-1)){ // if i is equal to the last student index value, exit the loop

                 break;

               }

             }
         });
}

buildClick(AllStudent, StudentLength); //we use the function we our variables

//get visible student on page

const getVisibleStudents = () => {

    for (let i = 0; i < AllStudent.length; i+=1) {

      if (AllStudent[i].offsetParent !== null) { // every element that has display property none, has an offsetparent value null.
        // so if the display property is block, its parent doesn't have null. So if its parent doesn't have null offsetParent value it means that the element
        // is visible. Please see the MDN reference: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent

          visibleArray.push(AllStudent[i]); // put all visible student to the visibleArray as a result
      }

    }

}

// IV. This part is about style the input border and create a message when a user type a student that we don't have


// set red border to the Input
const setBorder = () => {


document.querySelector('input').style.border = "1px solid rgb(223, 13, 76)";
document.querySelector('input').style.borderStyle = "dotted";
document.querySelector('input').style.borderRadius = "5px";
document.querySelector('input').style.padding = "8px 15px";
document.querySelector('input').style.fontSize = "14px";
document.querySelector('input').style.marginRight = "8px";

}

// unset red border to the Input
const unSetBorder = () => {

document.querySelector('input').style.border = "1px solid #eaeaea";
document.querySelector('input').style.borderRadius = "5px";
document.querySelector('input').style.padding = "8px 15px";
document.querySelector('input').style.fontSize = "14px";


}

// set fadeout to messagebar

const delay = () => {

  // ShowMessage();

$('.message').delay(1000).fadeOut('slow');

}

// show a message bar with error
 const ShowMessage = () => {

   setBorder ();
   let messageDiv = document.createElement("div"); //create messageDIV

   messageDiv.setAttribute('class', 'message'); // add class attribute: "message"

   messageDiv.innerHTML = ("<p>Sorry we don't have this student. Please type a new search.<p>");

   let parentMessage = document.querySelector('.student-list'); // select parent element in DOM

   let liSibling = document.querySelector('.student-list li'); // select sibling element in DOM

   parentMessage.appendChild(messageDiv); // add 'messageDiv' to parentMessage

   parentMessage.insertBefore(messageDiv,liSibling);
 }

 // V. This part is about the search method ----------------------------------------------------

 // Functions for Search

 // Filter method with JS - create function which hide all elements except that we're looking for

 const filterMe = () => {

   showAllStudent();

   let Input, Filter, Student, Details, i; //create the variables

// select the DOM elements with the defined variables

   Input = document.querySelector(".student-search input");
   Filter = Input.value.toUpperCase();
   Student = document.querySelectorAll(".student-details");

  for(i=0; i < Student.length; i+=1) {

    Details = Student[i].getElementsByTagName("h3")[0]; //select the current h3 on the page to compare it later with the input.value

    if (Details) {
      if (Details.innerHTML.toUpperCase().indexOf(Filter) > -1) { //compare the uppercased details to the user input. Larger than -1 means it exist and get the indexvalue

          Student[i].style.display = ""; // if the indexof is larger -1 we show the student[i]
      } else {

          Student[i].parentNode.style.display = "none"; // if the indexof is NOT larger -1 we hide the student[i]
      }

    }

  }

  //if the input area is empty show the first 10 student from FROM THE ORIGINAL studentlist

$(".student-search input").keyup(function() { //we use jquery to trigger the empty inputbox

   if (!this.value) {

     removePagnumber();
     hideAllStudent();

     //get the pagetodisplay from the original studentlength
     getPageNumber (StudentLength);

     addPageNumber(PageToDisplay); //add pagnumbers

     first10();

     //we call the buildclick again to make the pagination live, but this time we have to select another pagniation!

     const buildClickBack = (student, length) => {

        document.querySelector(".pagination li").addEventListener("click", function(event){  // If you click on each <a> tag the event listener starts.

             hideAllStudent();

             let eventContent = parseInt(event.target.textContent); // Inside event handler event.target will equal to the number of the user clicked

    removeClass();
    event.target.className = 'active';

    // now we show the student regarding the number we clicked

               for (let i = (eventContent*10)-10; i < (eventContent*10); i +=1) {

                   //select the i student from AllStudent
                   student[i].style.display= "block";

                   if (i === (length-1)){ // if i is equal to the last student index value, exit the loop

                     break;

                   }

                 }
             });
    }

     buildClickBack(AllStudent, StudentLength); //call the function we created before

     visibleArray = []; // make the array empty for that case if the user type a new search later

   }
   delay(); // hide the error message
   unSetBorder(); //hide the red border of the input

}); //empty input functions ends

// VI. This part is still related to search method. It's about the visible student during the search.
// We kind of rebuild the page after the search to make the proper pagination regarding the number of results and make it live.

getVisibleStudents();

hideAllStudent(); // don't forget to unhide regarding the visibleArray

removePagnumber();

getPageNumber(visibleArray.length); //get the pagenumber to display

addPageNumber(PageToDisplay); // display proper pagenumbers

//visible the first 10 student regarding the visible visibleArray

const first10Visible = () => {


  for (let i = 0; i < 10; i +=1) { //create loop that loops trough all student till the 10th and set the display from none to block

         // select the i student from AllStudent
         if (visibleArray.length === 0 ) {
// alert("Terribly sorry, but we don't have " + Input.value.toUpperCase() + " in our database. Please type a new search with another name.");
ShowMessage();
setBorder();


             break;
         } else if (i === visibleArray.length){

           break;
         }


         else {
         visibleArray[i].style.display= "block";
         }
       }

}

first10Visible();

//display the students on the proper page number


const buildClickVisible = (student, length) => {

   document.querySelector(".pagination li").addEventListener("click", function(event){  // If you click on each <a> tag the event listener starts.

hideAllStudent(); // don't forget to unhide regarding the visibleArray

        let eventContent = parseInt(event.target.textContent); // Inside event handler event.target will equal to the number of the user clicked

removeClass();
event.target.className = 'active';

// now we show the student regarding the number we clicked

          for (let i = (eventContent*10)-10; i < (eventContent*10); i +=1) {

              //select the i student from AllStudent
              student[i].style.display= "block";

              if (i === (length-1)){ // if i is equal to the last student index value, exit the loop

                break;

              }

            }
        });
}

buildClickVisible(visibleArray, visibleArray.length);

//get the proper pagenumber regarding the length of visibleArray




// build the pagenumbers regarding the length of visible studentSearch

 } //filterme function ends


 //add event listeners to the button

 document.querySelector(".student-search button").addEventListener("click", filterMe);
