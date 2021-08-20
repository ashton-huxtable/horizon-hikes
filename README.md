# Horizon Hikes

### Table of Contents
- [Overview](#overview)
- [Learning Goals](#learning-goals)
- [Instructions for Viewing](#instructions-for-viewing)
- [Walkthrough](#walkthrough)
- [Tech Stack](#tech-stack)
- [Libraries](#libraries)
- [Future Features](#future-features)
- [Contributors](#contributors)

### Front-End Mod 3 Project by: [Ashton Huxtable](https://github.com/ashton-huxtable)

## Overview

There are moments in life that bring peace and joy. A calm settles over the earth and the world seems to stop, if only for a moment. Dawn and dusk are two such moments for many outdoor enthusiasts, particularly when those moments are spent on the trail. Horizon Hikes is an app that allows its users to find parks in the US that offer hiking through the national park service. Users can select a state for their search and view individual park details. From here, they are led to choose a date on the calendar and the sunrise and sunset times for that park on that particular day will be displayed. Users can add these parks to their future trips with specific dates and times. What better way to plan a trip than to follow a trail of sunrise and sunset hikes? 

# Learning Goals
  * Demonstrate working knowledge of functional components with hooks and prop-types.
  * Build upon the foundational skills of React  
  * Utilizes React Router for url navigation
  * Retrieve and display park information from the National Park Service and Sunrise Sunset APIs
  * Testing performed with Cypress to better understand asych JS
  
# Instructions for Viewing
  * Clone down this repo by copying the SSH key and from your terminal git clone <repo SSH key>
  * `npm i` to install dependencies
  * cd into the repo
  * `npm start` to activate the server
  * Open localhost:3000 in your browser to view the project
 
 **OR** view the deployed application via Heroku [here](https://horizon-hikes.herokuapp.com/)
  


# Walkthrough
   **This app is currently mobile only but will eventually be updated to be viewed on tablets and desktops**
  
- A user can choose future trips from the home page. If they have no trips saved they will be asked to return home and start planning.

![NoTrips](https://user-images.githubusercontent.com/78318468/128789482-715c7803-d0ec-4f35-bb99-60b9fb9d6951.gif)

 
- When a user is ready to start planning they can simply click on a state of their choice to view parks within that state.
  

 <img src="https://user-images.githubusercontent.com/78318468/128789550-be34f785-9275-4bfc-aaca-6870bddbe432.gif" width="350" height="642"/>

  
- When a user is ready, they can choose a date to see sunrise and sunset times and then add the trip to their future visits!
 <img src="https://user-images.githubusercontent.com/78318468/128789625-082b4749-2d89-429d-8d21-2558a1752952.gif" width="350" height="642"/>
  
 <img src="https://user-images.githubusercontent.com/78318468/128789635-94d36c20-bbc3-4d15-acae-59a64f5c521a.gif" width="350" height="642"/>

 
  
# Tech Stack
<table>
  <tr>
    <td>React w/ Hooks</td>
    <td>React Router</td>
    <td>CSS</td>
    <td>Cypress</td>
    <td>JavaScript</td>
  </tr>
  <tr>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react-router.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/css-3.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/cypress.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/javascript.svg"/></td>
  </tr>
</table>
  
 # Libraries
  * [USA State Map](https://www.npmjs.com/package/react-usa-map)
  * [React Calendar](https://www.npmjs.com/package/react-calendar)
  
  
# Future Features 
 
  - User ability to delete visits from their future trips  
  - Additional error handling and redirects 
  - Desktop and tablet views
  - User ability to move trips from Future to Past
  - User login and Express or local storage so trips are saved
  
# Contributors
 
 <table>
  <tr>
    <td><a href="https://github.com/ashton-huxtable">Ashton Huxtable</td>
  </tr>
  <tr>
    <td><img width="150" height="auto" src="https://avatars.githubusercontent.com/u/78318468?v=4" alt="Ashton Huxtable avatar"/></td>
  </tr>
</table>

Project Managers:  
  Kayla Wood https://github.com/kaylaewood  
  Scott Ertmer https://github.com/sertmer
  
Turing School of Software & Design 
  
