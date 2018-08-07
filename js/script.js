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

   if (length <10) {

       PageToDisplay = 1;

   } else if (Number.isInteger(length / 10))  {


       PageToDisplay = length/10;

   } else {

       PageToDisplay = Math.ceil((length/10));
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



        for (let j = 1; j <= page; j +=1) {

            let AnchorElement = document.createElement("a"); //create <li> element

            AnchorElement.innerHTML = j ; //add j to the <a> element

            document.querySelector('.pagination li').appendChild(AnchorElement); //add Anchorelement to Li

          }

  } // end of addPageNumber function

  const reBuildPageNumber = (length) => {

    let divToRemove = document.querySelector('.pagination');
    document.querySelector('.page').removeChild(divToRemove);

    getPageNumber (length);
    addPageNumber(PageToDisplay);

  }

  const removePagnumber = () => {

    let divToRemove = document.querySelector('.pagination');
    document.querySelector('.page').removeChild(divToRemove);


  }


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

const showAllStudent = () => {

hideAllStudent (); //hide all student


     for (let i = 0; i < StudentLength; i +=1) { //create loop that loops trough all student till the 10th and set the display from none to block

         // select the i student from AllStudent
         AllStudent[i].style.display= "block";

       }

} // showAllStudent function ends

//Program starts

 first10(); //hide all students and add the first 10

 addPageNumber(PageToDisplay); //add pagnumbers

 createSearchBar();

 let SelectAnchor = document.querySelectorAll('.pagination a'); //define DOM element
 let SelectBigDiv = document.querySelector('.pagination'); //define DOM element

 //create function that remove active class to the current Pagenumber

 const removeClass =()=> {


   // Get all buttons with a inside the container
   let getAllAnchor = document.querySelectorAll('.pagination a');

   for (let i = 0; i < getAllAnchor.length; i +=1) {

   getAllAnchor[i].className = "";

     }

}

 // Add active class to the current button (highlight it)

 // III. If you click on the pagenumber will show the actual student to the proper page

 const buildClick = (student, length) => {

    SelectBigDiv.addEventListener("click", function(event){  // If you click on each <a> tag the event listener starts.

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

buildClick(AllStudent, StudentLength);

//get visible student on page

const getVisibleStudents = () => {

    for (let i = 0; i < AllStudent.length; i+=1) {

      if (AllStudent[i].offsetParent !== null) {

          visibleArray.push(AllStudent[i]);
      }

    }

}

 // Functions for Search

 // Filter method with JS - create function which hide all elements except that we're looking for

 const filterMe = () => {

   showAllStudent();

   let Input, Filter, Student, Details, i;

// select the DOM elements with the defined variables

   Input = document.querySelector(".student-search input");
   Filter = Input.value.toUpperCase();
   Student = document.querySelectorAll(".student-details");

  for(i=0; i < Student.length; i+=1) {

    Details = Student[i].getElementsByTagName("h3")[0];

    if (Details) {
      if (Details.innerHTML.toUpperCase().indexOf(Filter) > -1) {

          Student[i].style.display = "";
      } else {

          Student[i].parentNode.style.display = "none";
      }

    }

  }

  //if the input area is empty show the first 10 student from FROM THE ORIGINAL studentlist

$(".student-search input").keyup(function() {

   if (!this.value) {

     removePagnumber();
     hideAllStudent();

     //get the pagetodisplay from the original studentlength
     getPageNumber (StudentLength);

     addPageNumber(PageToDisplay); //add pagnumbers

     first10();

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

     buildClickBack(AllStudent, StudentLength);

     visibleArray = [];

   }

});

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
alert("Terribly sorry, but we don't have " + Input.value.toUpperCase() + " in our database. Please type a new search with another name.");

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
