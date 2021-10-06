# Inspirational Homepage - (fancy to-do list)
> This is a React to-do list app which allows the user to record their goals. The user's visual experience is enriched with images, quotes and weather information fetched from APIs.
> Live demo [_here_](https://inspirational-todo-list.netlify.app/). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
The to-do list app aims to give the user a minimalist, yet attractive interface for goal setting.

For the user, the app serves the day's weather, inspirational images and an inspirational quote while they set and edits their goals for the day.

The app was built to explore the development process for an interactive, API connected React app, which is paired with Redux for state management. The features specification and look of the app came from Codecademy's Inspirational HomePage project but it is coded from scratch. 

The project  React/Redux development process:

- Project planning and setting timelines.
- Designing and wireframing the app.
- Breaking down the app into React components
- Building static React components
- Connecting React components to Redux
- Connecting to APIs
- Publishing to the web
## Technologies Used
- React
- Redux
- Redux Toolkit
- HTML
- CSS
- Netlify functions
## Features
- Users are shown an inspirational image
- Users can go through multiple fetched images 
- Users can get more images once they exhaust each batch of fetched images
- Users are shown an inspirational quote
- Users can check the current weather
- Users can write down their goals
- Users can delete goals
- Users can mark goals as complete

## Usage
![Usage Demonstration gif](./img/screenshot.png)
<!-- If you have screenshots you'd like to share, include them here. -->
gif demo. 
## Screenshots
view of progression from initial wireframe to finalized app screenshot

![Wireframe screenshot](./images/wireframe_screenshot.png)

![Finished app screenshot](./img/app_screenshot.png)
## Setup
Clone this repo and run npm install to install dependencies. This project will require connecting to Unsplash, Open Weather and Quotes REST APIs - which will involve setting up an account with each service. 

Both development and deployment will require a Netlify account linked to your Git repository, in order to use the Netlify functions for API calls. Before publishing the app on Netlify, set up API secrets in Environment Variables section under Build & deploy > Continuous Deployment.

## Project Status
Project development is paused for now.
## Room for Improvement
- Design the app to be mobile friendly. 
- Allow user to edit to-dos.
- Allow user to input attributes about each to-do, such as due date, priority etc and allow sorting by these attributes.
- Allow the web app to ask for user's location through the browser, and use provided longitude and latitude to serve up local weather instead of just London's weather.
- Adaptive container background colour which can stand out against background images which are primarily lightly coloured as well as dark coloured. 

## Acknowledgements
- Many thanks to Joseph Mawa for the Freecodecamp's article on how to use serverless Netlify functions to access external APIs and secure API secrets. https://www.freecodecamp.org/news/how-to-access-secret-api-keys-using-netlify-functions-in-a-react-app/

## Contact
Created by Mike Guo - feel free to contact me at mikejguo290@hotmail.com or on GitHub!