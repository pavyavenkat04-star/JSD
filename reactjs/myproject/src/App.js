function App()
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
