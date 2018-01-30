FATE Core RPG Character Sheet
=========================

Origin of concept
----
For the past few years, I've played tabletop RPGs with a few friends from high school and inevitably, one of us ends up losing their character sheet or recreating it every few sessions after countless changes have made it an unreadable mess.

My goal with this project is to recreate the [Character Sheet from the Fate RPG Core System](https://www.evilhat.com/home/wp-content/uploads/2013/04/Fate-Core-Character-Sheet.pdf). This repo will contain the front end code for this project. 

This project is built with
---
* React
* Javascript (ES6)
* CSS (ultimately will be translated to SASS)
* Bootstrap
* HTML
* Webpack
* Babel

Where this project currently stands
---
As of 1/30/2018, this project is approaching completion but still needs to make use of controlled inputs for Aspects, Skills, Stunts, Stress, and Consequences. Basic styling has been applied and Bootstrap's grid was used to create the organization for the layout.

Future Development
---
As mentioned above, I will continue working on this project to refine the styling and allow users to directly input all data for their character into the sheet.

Long term, this will be hooked up to a Node.js server and MongoDB database to allow users to save their sheets between sessions.

Interested in using my project?
---
Go for it! Have fun with the basic scaffolding I've created. *Fork and clone* this repo then run *npm install* to get all of the dependencies. Finally, you can start the development server by typing *npm start*
