# ASSIGNMENT 2 PART B : Rebuild SERC IIIT WEBSITE

This project was created with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.
## USED:
1. HTML/CSS
2. BootStrap
3. Angular JS Framework
## Website Hosted Location : https://soumodiptab.github.io/serciiit
<hr>

1. Provide Admin Mode to manage content listed in below sections (2,3,4) (10 Marks)
2. Rebuild the site with a new theme (20 Marks)
    1. About the Center, Focus Area (5 Marks)
    2. Student/Faculty/Alumni Profiles (10 Marks)
    3. Resources and Contact (5 Marks)
3. Publications (10 Marks)
    1. Read publication data from sources like Google Scholar/ DBLP of all contributors 
of the SERC and populate them Static/dynamically by person and year 
4. News/Updates (10 Marks)
    1. Provide a News/Updates Roll
    2. Provide space for Twitter/Linkedin handle linkage
<hr>

### MOBILE FIRST APPROACH: 
All the sections and pages are responsive and works well for all devices.
### PEOPLE SECTION:
All the faculties and other contributers are displayed in card format and the faculties have individual pages made for them.
### ADMIN MODE:
For admin mode I have implemented the feature to edit and delete faculty details.
The way it works is that you have to go to the admin section and click the link to edit or click the cross button to delete. The changes will be visible if one navigates back to the faculty section.

Master Edit Mode: There is abutton that will allow you to edit all the contents of all the pages and another button that stops the editing mode.
### PUBLICATIONS:
All the contributors publications have been fetched and segregated into different sections and sorted on the basis of year.
### NEWS / UPDATES:
The news has been fetched from the twitter handle of serc iiit and populated.

### Deployment Instructions: 
I have already hosted the site on github pages.
But for local deployment and http server is needed.
1. Install node and npm
2. Install http-server using `npm install http-server -g`
3. The project can then be run by typing `http-server` in command line in this directory.
