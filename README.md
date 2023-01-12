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
 Word count: 1,400
 </p>
 <p align="center">
 Hosted website: https://ae2-kayleigh.web.app/
 </p>
 <p align="center">
 Github link: https://github.com/KayleighPerera/COM623_AE2.git
 </p>
 
 
 # Contents
 1) [Script](#scripts)

2) [Introduction](#introduction)

3) [Methodology](#methodology)

4) [Building Student Focus](#building-student-focus)

5) [User Story](#user-story)

6) [Conclusion & Results](#conclusionresults)

7) [Appendix](#appendix)
   


# Scripts
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

# Introduction
The goal and aim of this report is to have a clear understanding of creating a single web application using technologies such as [React](https://reactjs.org/) and [Firebase](https://firebase.google.com/?gclid=Cj0KCQiAnsqdBhCGARIsAAyjYjSGxene0eukBOqzkmFUFxLika86gFvTUNWeqRkABdwVlUQEeH_JvnsaAilBEALw_wcB&gclsrc=aw.ds)w.ds), react is used for building interactive user interfaces and web applications quickly and efficiently. Specifically, the web application created is created specifically for students it is a tool used to be able to create a cv with assistance from the university while also being able to apply to jobs. In the first assessment a prototype was created using figma but in the second assessment we focus on creating the web application using JavaScript while documenting the process I took to create the job application. The reasoning for choosing this problem is because many students lack guidance when writing a cv and never know where to apply for jobs. Within my survey I found that many students can't easily navigate to the university's student future page and are not aware of this page along with this many students reported that the university do not provide students with enough information about their futures for jobs, which this app will provide, moreover it can help students arrange more supervision for support and advice. For that reason, I built a web application to encourage further support to the students, in which I will speak about in the next section of this report. Throughout this the report I will also demonstrate the methodology that was used to implement the web application and illustrate why this application will solve the problem for students. So what tools were used to develop the web application?


# Methodology
In the first assessment i explained what methodology was used to design and develop my web application the method used was the design thinking methodology which helped me make my app accessible and attainable in this assessment. In assessment one i began the empathise, define and ideate stages while in this assessment we do the implementation and the report. When building and creating the application I started to research a development methodology that will be used throughout the implementation of my application. The methodology that was chosen is the [agile development methodology](https://www.teamwork.com/blog/release-planning/) as it is a way to manage a project by breaking it up into several phases it involves collaborations and future improvements to the web application. The agile methodology is broken up into six steps these steps include:

1. Product Vision Statement:<br>
The product vision statement describes the overarching long-term mission for the application, the goal of my web application is to encourage students to use my app to be able to guide them in creating or adapting their Cv's or looking for experience or full-time jobs which is more beneficial.

2. Product Roadmap: <br>
Product Roadmap is the high-level view of the requirements needed to achieve the product vision, in this case the requirements are considered from the first assessments where i created a survey to gather information from students. I asked relatable questions that helped me design this application in a specific way for students needs and requirements.

3. Product Backlog: <br>
a product backlog contains a list of what is needed for your project. My application needs to contain specific segments to be able to continue the agile methodology this list consists of a cv workshop where students are able to edit their cv and send it off to the student focus team in addition there will be a histogram to easily navigate the progress. Another important product backlogs used is a drop in session page, a job, login, and a join page

4. Release Plan: <br>
in this section the release of a working product is released. This is the process of what will be done to create and develop the web application including the documentation.

5. Sprint Backlog: <br>
The [user stories](https://www.atlassian.com/agile/project-management/user-stories) goals are to be able to create an acceptable cv and look for a relatable job which is linked to your course within the web application and being able to communicate with the team in Solent university. The goal of the user is to have a accessible, secure and uncomplicated navigated web application.

6. Increment: <br>
Increment is the final piece where the working product functionality is presented and at the end of the sprint it will be given to the customer. The finalised working application can be found here "https://github.com/KayleighPerera/COM623_AE2.git" and can be run at "/localhost3000"

<img src="https://user-images.githubusercontent.com/71653944/210141164-648d01a9-f5d8-464b-b972-cf066ec535b7.jpg" alt="Agile methodologies" width="400"/>

*Figure 1: Shows the process of the agile methodology*

# Building Student Focus
I first began creating this app by constructing each page in a specific file format such as view, components, assets or config I created a main page where all the other pages will be imported into this is called app.js with this I then started created my histogram which was one of the most challenging components in the web application. To authenticate the login and join pages I connected the application to firebase (Seen in appendix A) which provided backend services which authenticate users to the app. To add to this, I also deployed my web application to firebase for a fast, secure, and reliable way to be able to host the static and dynamic details of the application (shown in appendix B).

# User story
This student is an anonymous user which is a final year student who is looking for help in writing his CV. His first direction is to login using his university email and his password. He begins to find the drop in session, times and dates where the student focus team is available for support sessions. After this he then starts to research information about CV’s in order to create one and begins to explore jobs in the job recommendation page where he is able to see jobs vision in recruitment, He then goes to the workshop page which will allow him to begin, update or send off his cv to review it by a student focus team member.

# Conclusion/Results
After concluding all my code, I asked two housemates who study at Southampton Solent University to follow a certain user journey to get feedback for my web application. They first begin to explain that the pages are consistent and seem accessible for other users on the other hand they also went on to explain that the web application should have a description in the home page of what the application does to add from this there should be a restriction on how long the student focus team will take to answer, as many students need it done as quickly as possible. The two students also added that the CV workshop histogram makes a powerful addition and will encourage students who want to reach the hundred percent mark.

By all counts and well proven results, I have learnt the purpose of using React and Firebase in JavaScript to solve a problem for students. I specifically created a web application to give students more guidance when writing a CV or looking for a job. Using a development methodology called the agile methodology I created an application using JavaScript while also using the design thinking methodology from the first assessment which supports me in creating as well as adapting my design. Throughout the whole of this report, I have gained substantial skills and knowledge to create a web application using a data driven approach to solve a problem,this assignment has provided me with many types of technical skills such as using vscode with JavaScript and other learning skills like problem solving, research skills and critical thinking. This web application gives the user an overall understanding in what has been accomplished and fulfilled when developing and creating the application.

# Appendix
*Appendix A: Authentication in firebase which is connected to the Student Focus web application*
![Appendix A](https://user-images.githubusercontent.com/71653944/210634663-7ba9da6e-ef54-4c8c-9ff6-4fb3b89b102d.png)



*Appendix B: Shows the deployment completed in firebase*
![Appendix B](https://user-images.githubusercontent.com/71653944/210286593-fbc94362-1c65-4d96-8b5e-969a0221668a.png)

