-Create folders for separate components 
-create 3 flies html ,css , js then connect all of them 
-install npm package npm init
-then install  parcel package in npm (npm install d parcel)
-xecute the parcel by 
      -npx - is the command to execute the parcel in npm package
      - npx parcel index.html 
- then get react and react dom from npm package(npm install reaact) ,(npm install react-dom)
-then import react to app.js by following 
  import React from "react";
  import ReactDOM from "react-dom"

-then we need to tell the script file where the react came from by 
      - <script type="module"src="./src/app.js"></script>

******then change script files to short way of executing parcel by adding following         things inpackage.json file script 
       ---"start":"parcel.index.html",
       --- "build":"parcel build index.html"

-after adding script files then we can execute parcel by (npm start or npm run start , npm run build )

-add browser list in package.json files by 
   "browser list":[
    "last 2 chrome version"
  ]

- put all recreate files in .gitignore 



-create a element using JSX 

  1. jsx coding element
  2.Jsx will only replace code it will not add 
  3. if we are adding multiple codes use ()

-const heading =<h1>welcome to react project1</h1>
  
  
-const root =ReactDOM.createRoot(document.getElementById("root"))

-root.render(heading)

// React compnoents 

// functional component - latest one 
// class based component 

// functinoal component - write code 
    - When create a functional compoent start with capital letter ex : const Heading
    -modern way use arrow functinos 
    - it is a normal java script functional component 
    - it will return some piece of jsx react element 

  const Heading =()=>{
  return(
    <h1>welcome </h1>

  )
}
const root =ReactDOM.createRoot(document.getElementById("root"))

root.render(<Heading/>)



 // functinoa componnets using arrow functions 
const Heading =()=> <h1>welcome </h1>
   
const root =ReactDOM.createRoot(document.getElementById("root"))

root.render(<Heading/>)


 ******* Nesting one component to another component is called component composition *****

 // one component 
 const Heading =()=><h1>welcome </h1>
   

 // another compnonet 
 // nesting above compnoent in to this new component 

  const Body=()=>{
    return (
        <div>
        <Heading/>
        <h1> Enjoy learning </h1>
        <h2>hi hello </h2>
      </div>
    )

  }
 const root =ReactDOM.createRoot(document.getElementById("root"))
 
 root.render(<Body/>)


****** Nesting jsx element to component**********

 // one jsx element
 const Heading =<h1>welcome </h1>
   

 // Nesting above jsx elemtns by using {}  in to this new component 

  const Body=()=>{
    return (
        <div>
        {Heading}
        <h1> Enjoy learning </h1>
        <h2>hi hello </h2>
      </div>
    )
  }
 const root =ReactDOM.createRoot(document.getElementById("root"))
 
 root.render(<Body/>)
















// jsx coding element
const heading =<h1>welcome to react project1</h1>
  
  
const root =ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)
