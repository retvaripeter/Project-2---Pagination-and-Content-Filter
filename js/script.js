/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//VARIABLES

let StudentLength = document.querySelectorAll('ul li').length;

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

 //Add HTML element <div> with class="pagination" to class Page

 const addPageNumber = () => {

 getPageNumber ();

  let BigDiv = document.createElement("div"); //create a DIV to store all <a> elements inside

  BigDiv.setAttribute('class', 'pagination'); // add class attribute: "pagination"

  document.querySelector('.page').appendChild(BigDiv); // add 'BigDiv' to DOM



          let LiElement = document.createElement("li"); //create <li> element

          document.querySelector('.pagination').appendChild(LiElement); //add Li elements to the BigDiv



        for (let j = 1; j <= PageToDisplay; j +=1) {

            let AnchorElement = document.createElement("a"); //create <li> element

            AnchorElement.innerHTML = j ; //add j to the <a> element

            document.querySelector('.pagination li').appendChild(AnchorElement); //add Anchorelement to Li

          }

  } // end of addPageNumber function

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

 let SelectAnchor = document.querySelectorAll('.pagination a');

      for (let i = 0; i < 10; i +=1) { //create loop that loops trough all student till the 10th and set the display from none to block

          // select the i student from AllStudent
          AllStudent[i].style.display= "block";

        }

} // first10 function ends

//Program starts

 first10(); //hide all students and add the first 10

 addPageNumber(); //add pagnumbers

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

    SelectBigDiv.addEventListener("click", function(event){  // If you click on each <a> tag the event listener starts.

         hideAllStudent();

         let eventContent = parseInt(event.target.textContent); // Inside event handler event.target will equal to the number of the user clicked

removeClass();
event.target.className = 'active';

           for (let i = (eventContent*10)-10; i < (eventContent*10); i +=1) {

               //select the i student from AllStudent
               AllStudent[i].style.display= "block";

               if (i === (StudentLength-1)){ // if i is equal to the last student index value, exit the loop

                 break;

               }

             }
         });

 // Functions for Search

 // Filter method with JS - create function which hide all elements except that we're looking for

 const filterMe = () => {

   let Input, Filter, Student, Details, i;

// select the DOM elements with the defined variables

   Input = document.querySelector(".student-search input");
   Filter = Input.value.toUpperCase();
   Student = document.querySelectorAll(".student-details");

  for(i=0; i < Student.length; i+=1) {

    Details = Student[i].getElementsByTagName("h3")[0];
    console.log(Details.textContent);
    if (Details) {
      if (Details.innerHTML.toUpperCase().indexOf(Filter) > -1) {

          Student[i].style.display = "";
      } else {

          Student[i].style.display = "none";
      }

    }


  }

 } //filterme function ends

 document.querySelector(".student-search button").addEventListener("click", filterMe);





// // Loop trough all item in array
//
//   let namelist = []; //create the namelist array
//   let results = []; //create the results array
//   let mySplittedArray = []; //create the mysplitted array to search for first and lastname
//
//   let mySplitResults;
//
//   const studentNameList = document.querySelectorAll(".student-details h3"); // Select and put all h3 element into a variable
//
//
//   const createNamelist = () => {
//
//
//       // Convert nodelist to an array with all elements
//
//             for (let i = 0; i < studentNameList.length; i +=1) {
//
//             namelist.push(studentNameList[i].textContent);
//
//               }
//
//       // Split array elements into first and last name and
//       // put it into mySplittedArray
//
//           for (let i = 0; i < namelist.length; i+=1){
//
//             mySplitResults = namelist[i].split(" ");
//             mySplittedArray.push(mySplitResults[0]); //the variable can display it separately with index value
//             mySplittedArray.push(mySplitResults[1]);
//
//           }
//
//   }
//
//   //search in mysplitted mySplittedArray and put each result to the result array
//
//   // !!!!!!! IF YOU START A NEW SEARCH DON'T FORGET TO DELETE THE CONTENT OF RESULTS!!!! !!!!!!!
//
// const searchInSplitted = (usersearch) => {
//
//
//
//   for (let i=0; i < mySplittedArray.length; i+=1){
//
//       if (usersearch === mySplittedArray[i]) {
//
//           results.push(usersearch); // !!!!!!! IF YOU START A NEW SEARCH DON'T FORGET TO DELETE THE CONTENT OF RESULTS!!!! !!!!!!!
//
//       } else if (results.length === 0 && i === (mySplittedArray.length-1)){
//
//         alert ("Sorry we don't have this student");
//       }
//
//
//   }
//
// // !!!!!!! IF YOU START A NEW SEARCH DON'T FORGET TO DELETE THE CONTENT OF RESULTS!!!! !!!!!!!
// }

// use the mysplitted array to find the indexvalue of result

//   // Create a variable that contains a string
// var myString = "Mr. Jack Adams";
// // Create a variable to contain the array
// var mySplitResult;
//
// mySplitResult = myString.split(" ");

  // const searchForStudent = (search) => {
  //
  //   createNamelist();
  //
  //
  //
  //             // // for (i=0;i<namelist.length;i++) {
  //             //
  //             // }
  //               if (namelist[0] == search) {
  //                 alert('we have' + search+ 'in our database')
  //               } else {
  //                 alert('nope ' + search+ 'in our database')
  //               }
  //             }


// //search with jquery
//
// let visibleStudents;
//
// $(document).ready(function(){
//   $(".student-search input").on("keyup", function() {
//     var value = $(this).val().toLowerCase();
//     $("ul li").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//
//         })
//
//        visibleStudents = $( "li.student-item.cf:visible" ).length;
//
//        for (let i = 0; i < document.querySelectorAll('.pagination a').length; i +=1) {
//
//                    if (visibleStudents < 6) {
//
//                  $(document.querySelectorAll('.pagination a')[i+1]).hide();
//                }
//
//          }
//           });
//     });
