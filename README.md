# Inspirational Homepage - (fancy todo list)
> Outline a brief description of your project.
> Live demo [_here_](https://inspirational-todo-list.netlify.app/). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information

This is a Todo List app. The user is served with the day's weather, an inspirational image and an inspirational quote while they set and edits their goals for the day.

The app aims to give the user the best start to their day with an attractive interface for goal setting.

The app was built primarily to explore how to develop an interactive, API connected React app, paired with Redux for state management. The features specification and look of the app came from Codecademy's Inspirational HomePage project but it is coded completely from scratch. 
It exposed me to the breadth of the development process. from x to y. 

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
- Users can get more images once they exhaust each batch of fetched Images
- Users are shown an inspirational quote
- Users can check the current weather (as long as they live in London, UK)
- Users can write down their goals
- Users can delete goals
- Users can mark goals as complete

## Screenshots
![Example screenshot](./img/screenshot.png)
<!-- If you have screenshots you'd like to share, include them here. -->
wireframe screenshot. 
gif demo. 


## Setup
What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located?

Proceed to describe how to install / setup one's local environment / get started with the project.

Clone this repo and run npm install to install dependencies. This project will require connecting to Unsplash, Open Weather and Quotes REST APIs - which will involve setting up an account with each. Furthermore, it will require a Git linked Netlify account to use the Netlify functions to do the API calls. To build the app on Netlify, set up API secrets in Environment Variables section under Build & deploy > Continuous Deployment.

## Usage
How does one go about using it?
Provide various use cases and code examples here.

`write-your-code-here`


## Project Status

Project is complete for now. I'm moving on to projects that require additionals technologies such as React testing and Routing.
## Room for Improvement

- Allow the web app to ask for user's location through the browser, and use provided longitude and latitude to serve up local weather instead of London's weather.
- Adaptive container background colour which can stand out against background images which are primarily lightly coloured as well as dark coloured. 

## Acknowledgements

- Many thanks to Freecodecamp, 


## Contact
Created by Mike Guo - feel free to contact me!



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
