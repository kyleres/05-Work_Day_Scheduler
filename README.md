# 05-Homework - [Work Day Scheduler](https://kyleres.github.io/05-Work_Day_Scheduler/)

## Introduction
For this homework assignment, we were tasked with creating a work day scheduler that fulfills the criteria below. My knowledge of third-party APIs, JQuery, and local storage were put to the test when developing this application.

## Acceptance Criteria
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Motivation
My goal for this assignment was to get familiar with how third-party APIs work and to get more familiar with JQuery. To begin, I broke the assignment down to four parts:
    1) Study the docs for Moment.js to understand how it works
    2) Create a function that automatically updates the timeblocks based on the current time
    3) Create functions that can store and clear the information entered in each timeblock
    4) Create a UI that incorporates all of this functionality in a way that is easy to use and understand
One of the most diffcult parts when developing this application was learning and understanding how JQuery works. While it was possible to do the whole thing using basic JS, I challenged myself to use JQuery because of its usefulness. Looking back, this decision was worth it; I saved myself from typing many lines of code and had a better understanding of how to use this API. The other challenge was making the function that saves the information entered into the timeblocks. This took a lot of trial and error, but I'm quite happy with how it worked out.

## Version List
### v1.0
* revised index.html
    * created timeblocks
* copied and pasted moment.js
* created script.js
    * displayed current date on HTML
    * created save button functionality
    * created clear button functionality
    * created update time function
* revised style.css
    * styled using Bootstrap
    * created hover effects for buttons
* tested application for functionality and responsiveness
* created README.md

## Framework
* created with Bootstrap

## Credits
* [JQuery](https://api.jquery.com/) for their extensive library and teaching resources
* [Moment.js](https://momentjs.com/) for the script which updates the current date and time
* [This](https://stackoverflow.com/questions/39155511/html-save-text-in-textarea) Stack Overflow post for ideas about how to work with textareas and local storage
* [w3schools.com](https://www.w3schools.com/) for all their resources regarding HTML, CSS, JS and JQuery
* Special thanks to my instructor Nick and my awesome TAs Jimi and Chris for answering all my questions and teaching me the skills I need to get this done!
