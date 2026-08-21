import React from 'react'

function App(props) {
  var arr=[];
  for (var i in props.data)
  {
    arr.push(i);
  }
  return (
    <div>
      <h2>Json with array handling and also check null </h2>
      <h2>Student roll no:{props.data.rno}</h2>
      <h2>Student name:{props.data.sname}</h2>
      <h2>Student marks 1:{props.data.marks[0]}</h2>
      <h2>Student marks 2:{props.data.marks[1]}</h2>
      <h2>Student marks 3:{props.data.marks[2]}</h2>
      <h2>Student marks 4:{props.data.marks[3]}</h2>
      <h2>Result:{(props.data.marks[0]>34 &&props.data.marks[1]>34 && props.data.marks[2]>34 &&props.data.marks[3]>34)?"Pass":"Fail"}</h2>
      <h2>--------------------------</h2>
      {arr.map((i,ind)=><><br></br>{i}-----&gt;{props.data[i]}</>)}
    </div>
  )
}

export default App










/*import React from 'react'

function App(props) {
  var arr=[]
  for(var k in props.data)
  {
    arr.push(k)
  }
  return (
    <div>
      {arr.map((v)=><h2>{v}----&gt;{props.data[v]}</h2>)}
    <h2>------------------------------------------------</h2>
    {arr.map((v)=><h2>{v}----&gt;{(props.data[v]===true && "Eligible")||(props.data[v]===false && "Not eligible")||props.data[v]}</h2>)}
    
    </div>
  )
}
export default App


/*import React from 'react'

export default App;
 function App(props) {
  return (
    <div>
      <h2>Student details:{props.data.rno}</h2>
      <h2>Student id:{props.data.rno}</h2>
      <h2>Student name:{props.data.sname}</h2>
      <h2>Student marks:{props.data.mark}</h2>
      <h2>Student result:{props.data.mark>=35?"Pass":"Fail"}</h2>
      <h2>Is student eligible:{props.data.iseligible?"  eligible":"is not eligible"}</h2>
    
    </div>
  )
}


/*import React from 'react'
function App(props)
{
  return (
    <div>
      <h1>props:Properties</h1>
      <h2>shares data from one component to another component</h2>
      <h2>Marks:</h2>
      {props.data.map((i,r)=><><br></br>Marks:{r+1}={i}</>)}
    </div>
  )
}
export default App;




/*import React from 'react'
function App()
{
  var stud={
    sno:1001,
    sname:'pavya',
    mark:{ tamil:98,
      english:88,
      maths:80,
      science:99,
      social:88
    },
    result:"pass"
  }
  return (
    <div>
      <h1>Json</h1>
      <h3>Student id:{stud.sno}</h3>
      <h3>Student name:{stud.sname}</h3>
      <h3>Student tamil mark:{stud.mark['tamil']}</h3>
      <h3>Student english mark:{stud.mark['english']}</h3>
      <h3>Student maths mark:{stud.mark.maths}</h3>
      <h3>Student science mark:{stud.mark['science']}</h3>
      <h3>Student social mark:{stud.mark.social}</h3>
      <h3>Student result:{stud.result}</h3>
      
    </div>
  )
}export default App;





/*import React from 'react'
function App() {
  var arr=[11,22,333,44,5555,66,77]
  var small=arr[0]
  return (
    <div>
      <h3>Finding lowest number</h3>
    <div style={{display:"none"}}>
    {arr.map((v)=><>{small>v &&<>{small=v}</>}</>)}
    </div>
    <h4>Smallest number:{small}</h4>
    </div>
  )
}
export default App;



/*import React from 'react'
function App()
{
  var arr=[11,83,40,78,100]
  return (
    <div>
      <h3>Array Demo</h3>
      
       {arr.map((item)=>item)}
       <br></br>
       {arr.map((item)=><> {item}</>)}
       {arr.map((item)=><><br></br>{item}</>)}
       <ol type="1">
        {arr.map((v)=><li>{v}</li>)}
       </ol>
      
    </div>
  )
}export default App;



/*function App()
{
  var arr=[11,22,33,44,55,66];
  return(
    <div><h2>Array demo</h2>
    <h2>Array value index: 0 : {arr[0]}</h2>
     <h2>Array value index: 1 : {arr[1]}</h2>
      <h2>Array value index: 2 : {arr[2]}</h2>
       <h2>Array value index: 3 : {arr[3]}</h2>
        <h2>Array value index: 4 : {arr[4]}</h2>
         <h2>Array value index: 5 : {arr[5]}</h2>
  
    </div>
  )
}export default App;


/*function App()
{
  var avg=80
  var res="fail"
  return(
    <>
    <h2>Average is {avg}</h2>
    <h2>{(res==="pass" && ((avg>=85 && "Outstanding")||(avg>=75 && "Excellent")||(avg>=65 && "Very Good")||(avg>=55 && "Good")||"Fair"))||"no grade"}</h2>
    </>
  )
}export default App;


/*import React from 'react'
function App() {
  var n=1000
  return (
    <div>
      <h1> if - else if statement or else if ladder</h1>
      <h2>{n} is {(n>0 && "+ve")||(n<0 && "-ve")||"zero"}</h2>
    </div>
  )
}export default App;


/*function App()
{
  var year=2016
  return(
    <>
    <h2>Leap year or not</h2>
    <h2>Year is {year}</h2>
    <h2>The year {year} is a {(year%4===0 && "Leap")||"not a Leap"} year</h2>
</>
  )
}export default App;

/*function App()
{
  var a=86
  return(
    <div>
      <h4>Find given no is even or odd using if else</h4>
      <h2>Number:{a}</h2>
      <h2>{a} is {(a%2===0 && "Even")|| "Odd"} Number</h2>
    </div>
  )
}
export default App;


/*function App()
{
  var a=70
  var b=100
  return (
    <><h3>A value:{a}</h3>
    <h3>B value:{b}</h3>
    <h4>{(a>b && a)||b} is biggest number</h4>
    </>
  )
}
export default App;


/*function App()
{
  var mark=98;
  return(
    <div>
      <h1>Mark:{mark}</h1>
      <h2>Simple if statement</h2>
      <h2>Result</h2> 
      <h2>{(mark>34 && "PASS") || "FAIL"}</h2>
      
         </div>
  )
}export default App;


/*import './App.css'
import React from 'react'
import myimg from './images/rose.jpeg'
function App() {
  return (
    <div align="center">
      <img src={myimg} width="90%" alt="not found">
      </img>
      
    </div>
  )
}
export default App

/*var App=()=>
{ 
  var a=10
  var b=20
  var c=30
  return(
    <>
    <h1>Addition of three numbers</h1>
    <h2>A value:{a}</h2>
    <h2>B value:{b}</h2>
    <h2>C value:{c}</h2>
    <h2>Total value:{a+b+c}</h2>
    </>
  )
    }
    export default App;


/*import React from "react";
class App extends React.Component{
  render()
  {
    return(
      <>
      <h1>Welcome to class components</h1>
       <h1>Welcome to class components</h1>
        <h1>Welcome to class components</h1>
         <h1>Welcome to class components</h1>
          <h1>Welcome to class components</h1>
      </>
    )
  }
}export default App;


/*function App()
{
 return (
  <>
  <h1>Welcome to reactjs</h1>
  <h1>Welcome to reactjs</h1>
  <h1>Welcome to reactjs</h1>
  <h1>Welcome to reactjs</h1>
  </>
 )
}
export default App;


/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
*/
