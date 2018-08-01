/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate

const studentLength = document.querySelectorAll('ul li').length;

// Create a function to hide all of the items in the list excpet for the ten you want to show

// The pagenumber is the fundamental of the pagination. How to calculate the proper number of page we will need?
// It comes from x(length of the ul array) devided by 10.
// First check x. If it's smaller than 10 then the pagenumber is 1.
//If the number is a whole number then it's equal to the pagenumber
//If the number is not a whole number then pagenumber = x/10+1

  const pNumberDisplay = () => {

    if (studentLength < 10) {

      pNumberDisplay = studentLength;

    } else if (studentLength.isInteger) {

      pNumberDisplay = studentLength/10;
    } else {

      pNumberDisplay = studentLength/10 + 1;

    }

    return pNumberDisplay;
  }

  const showPage = (pagenumber,studentlist) => {


}

// first hide all students on the page
// then loop through all students in our student list argument
// if student should be on this page number
// show the student

// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four





// Create and append the pagination links - Creating a function that can do this is a good approach




// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
