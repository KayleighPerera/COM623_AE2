# React Job/Cv App
<p align="center">
 Author: Kayleigh Perera
 </p>
 <p align="center">
 Student ID: 15007111
 </p>
 <p align="center">
 Course title: Computing
 </p>
 <p align="center">
 Module title: COM623 Contemporary Web Applications
 </p>
 <p align="center">
 Tutor’s name: Joe Appleton
 </p>
 <p align="center">
 Word count: 1,500
 </p>
 <p align="center">
 ***********link to hosted website
 </p>
 <p align="center">
 https://github.com/KayleighPerera/COM623_AE2.git
 </p>


## Scripts
In the project directory, you can run:

installs the node modules to the file
<br>
`npm install`
<br>

build created a build directory with a production build of the web application
<br>
`npm run build`
<br>

run start allows you to visualise the app 
<br>
`npm run start`
<br>

The app is ready to be run!
<br>

## Introduction
The goal and aim of this report is to have a clear understanding of creating a single web application using technologies such as [React](https://reactjs.org/) and [Firebase](https://firebase.google.com/?gclid=Cj0KCQiAnsqdBhCGARIsAAyjYjSGxene0eukBOqzkmFUFxLika86gFvTUNWeqRkABdwVlUQEeH_JvnsaAilBEALw_wcB&gclsrc=aw.ds), react is used for building interactive user interfaces and web applications quickly and efficently. Specifically this web application created is a tool used for students to be able to create a cv with assitance from the university while also being able to apply to jobs. In the first assesment a figma prototype was created, in this report we focus on creating the web application using Javascript. The reasoning for choosing this problem is because many student lack guidance when writing a cv and never know where to apply for jobs within my survey i found that many students can't easily navigate themselves to the university's page and are not aware of this page also many students reported that the university do not provide students with enoguh unformation about the futures this app can provide more specific support and help for students as well as the university. For that reason i built a web application to encorage further support to the students . so what tools were used to develop the web application?

Throughout this the report will demonstarte the methodology that was used to implement the web application and illustarte why this application will solve the problem for students.

## Methodology
In the first assesment i explained what metholody was used to design and develop my web application the method used was the design thinking methodology which helped me make my app acessible and attainable in this assesment. When building and creating the application i started to research a development methodology that will be used throughtout the implementation of my application. The chosen methodology that was chosen is the [agile development methodology](https://www.teamwork.com/blog/release-planning/) it is a way to manage a project by breaking it up into several phases it involves collarboration and future improvements to the web application.The agile methodlogy is broken up into six steps these steps include:

1. Product Vision Statement:<br>
The product vision statement describes the overaching long-term mission for the application, the goal of my web application is to encourage students to use my app to be able to guide students in creating or adapting their Cv's or looking for experience or full time jobs which is more beneficial.

2. Product Roadmap: <br>
Product Roadmap is the high-level view of the requirements needed to achieve the product vision, in this case the requirements are considered from the frist assessments where i created a survey to gather information from students. I asked relatable questions that helped me design this application in a specific way for students needs and requiremnts.

3. Product Backlog: <br>
a product backlog contains a list of what is needed for your project. My application needs to contain specific segments to be able to continue the agile metholdology this list consists of a cv workshop where students are able to edit their cv and send it off to the student focus team in addition there will be a histogram to easily navigate the progress another imporat product backlog used is a drop in session page, a job, login, and a join page

4. Release Plan: <br>
in this section the release of a working product is relseased.

5. Sprint Backlog: <br>
The [user stories](https://www.atlassian.com/agile/project-management/user-stories) goals are to be able to create an acceptable cv and look for a relatable job which is linked to their course. The goal of the user is to have a accesible, secure and uncomplicated web application.

6. Increment: <br>
Increment is the final piece where the working product functionality is presented and at the end of the sprint it will be given to the customer. The finalaised working application can be found here "https://github.com/KayleighPerera/COM623_AE2.git" and can be run at "/localhost3000"

<img src="https://user-images.githubusercontent.com/71653944/210141164-648d01a9-f5d8-464b-b972-cf066ec535b7.jpg" alt="Agile methodologies" width="400"/>

I first began creating this app by creating each page in a specific file format, I created a main page where all the other pages will be imported into called app.js with this i then started created my histogram which was challenging. To authenticate the login and join pages i connected the application to firebase which provided backend services which authienticat users to the app. To add to this i also deployed my web application to firebase for a fast, secure and reliable way to be able to host the static and dynamic details of the applciation (shown in appendix A).

## User story
This student is a final year student who is looking for help in writing his CV. His first direction is to login using his university email and his password. He begins to find the dop in session times and dates where the team is available for support sessions after this he starts to research infromation about cvs and explores jobs where he can see jobs vision in recuritment, He then goesto the workshop page which will allow him to begin, update or send off his cv to review it by a student focus team memeber. 

## Conclusion/Results
After concluding all my code I asked two housemates who study at Southampton Solent University to follow a certain user journey to get feedback for my web application. They first begin to explain is that the pages are consistent and seem accesible for other user on the other hand they also went explained saying the web application has should have a description in the home page of what the application does to add from this there should be a restriction on how long the student focus team will take to answer as many students need it done as quickly as possible. The two students also added that the cv workshop histogram makes a great addition and will encorage students want to reach the hundred percent mark

By all counts and well proven results, i have learnt the purpose of using React and Fiebase in Javascript to solve a problem for students. I specifcally created a web application to give students more guidance when writing a cv or looking for a job. Using a development methodology called the agile methodology i created a application using Javascipt while also using the design thinking methodology from the first assesment which guided me in creating as well as adapting my design.

## Appendix
*Appendix A: Shows the deployment completed in firebase*
![Appendix A](https://user-images.githubusercontent.com/71653944/210286593-fbc94362-1c65-4d96-8b5e-969a0221668a.png)

