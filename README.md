# Rock Paper Scissors Lizard Spock

## Milestone Project 2 

This is a rock-paper-scissors-lizard-spock game that allows the user to play against a computer with randomized choices. The rules are simple:

Scissors cuts paper. Paper covers rock. Rock crushes lizard. Lizard poisons Spock. Spock smashes scissors. Scissors decapitates lizard. Lizard eats paper. Paper disproves Spock. Spock vaporizes rock. Rock crushes scissors.

Winner gets a point!

## Live project website
[View live website here](https://emeliemarkkanen.github.io/p2-RockPaperScissorsLizardSpock/)

## ReadMe table of contents

- [Milestone project 2](#milestone-projekt-2)
- [Live projekt website](#live-projekt-website)
- [Screenshots of website](#screenshots-of-webiste)
- [User stories](#user-stories)
- [Typography and color scheme](#typography-and-color-scheme)
    - [Typography](#typography)
    - [Color scheme](#color-scheme)
    - [Imagery](#imagery)
- [Features](#features)
    - [Responsive](#responsive)
    - [Social](#social)
    - [Rules](#rules)
    - [Game reset](#game-reset)
    - [Future features](#future-features)
- [Wireframes](#wireframes)
- [Technology](#technology)
    - [Languages used](#languages-used)
    - [Other applications used](#other-applications-used)
- [Testing](#testing)
    - [Player Experience](#player-experience)
    - [Code testing](#code-testing)
    - [Supported browsers and screen sizes](#supported-browsers-and-screen-size)
    - [Known issues](#known-issues)
- [Deployment](#deployment)
    - [Gitpod and Git](#gitpod-and-git)
    - [Github pages](#github-pages)
- [Credits](#credits)
    - [Content](#content)
    - [Acknowledgement](#acknowledgement)
    - [External sources used](#external-sources-used)

## Screenshots of website

### Landing page

![Landing page](https://github.com/EmelieMarkkanen/p2-RockPaperScissorsLizardSpock/blob/main/docs/screenshots/RPS-screenshot1.jpg)

Screenshots created using [Am I Responsive](https://ui.dev/amiresponsive)

## User stories

- As a potential player I would like to easily understand the jest of the game based on the page design
- As a potential player I would like to be able to read the rules of the game
- When playing the game I would expect the game to function properly when interacting with the icons and buttons
- When playing the game I would like the score counter to update accordingly to winner/draw 
- As a potential player I would like to be able to reset the game score to start over

## Typography and color scheme

### Typography

The font used for this website is called Kanit, imported from [Google fonts](https://fonts.google.com/). 

I've used icons from [Font awesome](https://fontawesome.com/) for the choice buttons and heading decoration. 

### Color scheme

The color scheme consists of three complementary colors, two hues of blue, #36538c and #5AA9FF, for background and fonts, and a hue of beige, #F1F1E6, for buttons and footer.
The main background dark blue color matches the image used for the rules section. I've chosen a very stylized color scheme and font to let the game functions be the main focus of the site. 

### Imagery

I've used an image from [Pin Clipart](https://www.pinclipart.com/) for the rules section, to visualize the rules.

## Features

### Responsive

This website is repsonsive to multiple screen sizes.

### Social

This website contain a link to the creators Github page. 

### Rules

The website contains a button that toggles a div with the rules to the game. 

### Game reset

The website contains a button that opens a popup and asks wether the player wishes to reset the game. If the player clicks "Yes" the game resets and close this popup. 

### Future features

In the future these functions could possibly be added
- A sign in loading page to let the player add their name 
- A high score function to let first to X points win the game
- A two player function to let two users play on the same device

## Wireframes

I created the wireframe for this project using Balsamiq.
<br>
[View PDF of wireframe here](https://github.com/EmelieMarkkanen/p2-RockPaperScissorsLizardSpock/blob/main/docs/screenshots/pdf/RPSLS.pdf)

## Technology

### Languages used
For this project I’ve used HTML5, CSS and JavaScript

- [HTML5](https://sv.wikipedia.org/wiki/HTML5)
- [CSS](https://sv.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://sv.wikipedia.org/wiki/Javascript)

### Other applications used
- [Github](https://github.com/)
- [Balsamiq](https://balsamiq.com/)

## Testing

### Player experience

- As a potential player I would like to easily understand the jest of the game based on the page design
    - The landing page consists of:
        - a header with the name of the game
        - icons corresponding to the name of the game
        - two buttons, one to show the rules and one to reset the game

- As a potential player I would like to be able to read the rules of the game
    - There is a button with the name "Rules" that toggles show/hide a box with the rules of the game and an image for a visual explantion

- When playing the game I would expect the game to function properly when interacting with the icons and buttons
    - When clicking the icons the heading "You:" shows the players choice, and the heading "Computer:" shows the randomized computer choice
    - When clicking the button "Rules" it toggles a show/hide a box with the rules of the game
    - When clicking the button "Reset game" the score counter resets to 0

- When playing the game I would like the score counter to update accordingly to winner/draw 
    - The score counter updates after every comparison between the player and computer choice
    - The heading "Result:" shows the result of the round; win, lose or draw

- As a potential player I would like to be able to reset the game score to start over
    - When clicking the button "Reset game" the score counter resets to 0

### Code testing

Code validated trough W3C CSS and HTML validator, and JSHint code quality control

- CSS [result](https://github.com/EmelieMarkkanen/p2-RockPaperScissorsLizardSpock/blob/main/docs/screenshots/CSS-validation-screenshot.jpg)

- HTML [result](https://github.com/EmelieMarkkanen/p2-RockPaperScissorsLizardSpock/blob/main/docs/screenshots/HTML-validation-screenshot.jpg)

- JS [result](https://github.com/EmelieMarkkanen/p2-RockPaperScissorsLizardSpock/blob/main/docs/screenshots/JS-validation-screenshot.jpg)

- The website passes through Lighthouse with a score of 98 or higher, except for "Accessability", which is 85. This is because the icon buttons "do not have an accessible name, when a button doesn't have an accessible name, screen readers announce it as "button", making it unusable for users who rely on screen readers." I have chosen to add a alt to the buttons as a solution to this. 

### Supported browsers and screen sizes 

Testing is done primarily in Google Chrome,Firefox and Microsoft Edge, which all support this website.

The website is responsive to multiple screen sizes. 

### Known issues

- JSHint gives two warnings; two unused variables, resetGame() and Rules(). These functions are used as onclick events and I've therefor chosen to ignore this. 

## Deployment

### Gitpod and Git

1. I created a repository in Github, named it p2-RockPaperScissorsLizardSpock, and used the template Code-Institute-Org/gitpod-full-template
2. Once the repository is created, click the green button to the right (Gitpod) to open Gitpod
3. In the terminal I've created the html file, index.html
4. I created the assets folder to hold the style.css file, script.js and images
5. I created the docs folder to hold PDF:s and screenshots
6. Once folders and files are created I used Git commands to add the changes in the files to the staging area and push the changes to my repository

### Github pages

The website is deployed via Github pages. 

1. Log in to Github
2. Navigate to the correct repository, in this case EmelieMarkkanen/p1-stockholm-spa-hotel
3. Locate and click Settings, at the top of the repository, and continue on to Pages in the leftside column
4. Under the heading Source click the dropdown menues and choose Branch: Main and Root folder
5. Click Save
6. Refresh the page and a message will appear and tell you that the page is live
7. Click the link to visit the live website

## Credits

### Content

All content is written and designed by the creator

### Acknowledgement

- Carmilla Mina Ztorm for valuable input for solving issues with the JavaScript code
- Code institute for excellent teaching

### External sources used
- [W3Schools](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show)
- [Pin Clipart](https://www.pinclipart.com/)
- [MyColor](https://mycolor.space/)
- [Copy programming](https://copyprogramming.com/)