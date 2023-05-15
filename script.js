// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements

//const dayjs = require("dayjs");

//const dayjs = require('dayjs');

// Get the current date and time
const now = dayjs();

// Display the current date and time in the "currentDay" element
document.getElementById("currentDay").innerHTML = now.format("YYYY-MM-DD HH:mm:ss");

// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //jquery to save and render data from local storage

 $(".saveBtn").on("click",function(){
    let text=$("#hour-9-a").val()
    localStorage.setItem("hour9",text)
  })

  $("#hour-9-a").val(localStorage.getItem("hour9"))


  $(".saveBtn").on("click",function(){
    let text=$("#hour-10-a").val()
    localStorage.setItem("hour10",text)
  })

  $("#hour-10-a").val(localStorage.getItem("hour10"))


  $(".saveBtn").on("click",function(){
    let text=$("#hour-11-a").val()
    localStorage.setItem("hour11",text)
  })


  $("#hour-11-a").val(localStorage.getItem("hour11"))

  //Additional time block

  $(".saveBtn").on("click",function(){
    let text=$("#hour-12-a").val()
    localStorage.setItem("hour12",text)
  })

  $("#hour-12-a").val(localStorage.getItem("hour12"))


  $(".saveBtn").on("click",function(){
    let text=$("#hour-13-a").val()
    localStorage.setItem("hour13",text)
  })

  $("#hour-13-a").val(localStorage.getItem("hour13"))


  $(".saveBtn").on("click",function(){
    let text=$("#hour-14-a").val()
    localStorage.setItem("hour14",text)
  })

  $("#hour-14-a").val(localStorage.getItem("hour14"))

  $(".saveBtn").on("click",function(){
    let text=$("#hour-15-a").val()
    localStorage.setItem("hour15",text)
  })

  $("#hour-15-a").val(localStorage.getItem("hour15"))

  $(".saveBtn").on("click",function(){
    let text=$("#hour-16-a").val()
    localStorage.setItem("hour16",text)
  })

  $("#hour-16-a").val(localStorage.getItem("hour16"))

  $(".saveBtn").on("click",function(){
    let text=$("#hour-17-a").val()
    localStorage.setItem("hour17",text)
  })

  $("#hour-17-a").val(localStorage.getItem("hour17"))

  $(".saveBtn").on("click",function(){
    let text=$("#hour-18-a").val()
    localStorage.setItem("hour18",text)
  })

  $("#hour-18-a").val(localStorage.getItem("hour18"))

 
   $(".saveBtn").on("click",function(){
    let text=$("#hour-19-a").val()
    localStorage.setItem("hour19",text)
  })

  $("#hour-19-a").val(localStorage.getItem("hour19"))

  $(".saveBtn").on("click",function(){
    let text=$("#hour-20-a").val()
    localStorage.setItem("hour20",text)
  })

  $("#hour-20-a").val(localStorage.getItem("hour20"))

  $(".saveBtn").on("click",function(){
    let text=$("#hour-21-a").val()
    localStorage.setItem("hour21",text)
  })

  $("#hour-21-a").val(localStorage.getItem("hour21"))

 






  

 
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //Logs current hour to the console for later reference
  var currentHour = dayjs().format("H")
  console.log(currentHour)

  //if (currentHour=10){
  //$("#hour-10").attr("class","present")
  //}


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  
  var today = dayjs();
$('#1a').text(today.format('MMM D, YYYY'));

});
