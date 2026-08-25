import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const[city,setCity]=useState("Salem")
  const[result,setResult]=useState(null);
  const cityFun=(Event)=>
  {
    setCity(Event.target.value)
  }
  const show=async()=>
  {
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49c1a47156a0d340605f49b9b3edcc61`
    await axios.get(apiurl).then((response)=>{
      setResult(response.data)
      console.log(result)
    }).catch((err)=>{
      setResult(err.response.data)
      console.log(err.response.data)
    })
    //console.log(apiurl)
  }
  return (
    <div>
      <h1><center>Weather report all over the world</center></h1>
      <h3><center>(by using city name)</center></h3>
      <h2><center>Developed by Pavya V B.E</center></h2>
      <hr size="10" color="grey"></hr>
      <input type="text" value={city} onChange={(e)=>cityFun(e)} name="city" placeholder='Enter city name'></input>
      <br></br>
      <input type="button" value="find weather report" onClick={show}></input>
      <hr size="10" color="grey"></hr>
      {result!==null && result.cod===200 &&<><h2>Country & City:{result.sys.country}-{result.name}</h2></>}
      {result!==null && result.cod===200 &&<><h2>Main report:{result.weather[0].main}</h2></>}
      {result!==null && result.cod===200 &&<><h2>Description:{result.weather[0].description}</h2></>}
      {result!==null && result.cod===200 &&<><h2>Wind speed:{result.wind.speed}</h2></>}
      {result!==null && result.cod===200 &&<><h2>Temperature:{result.main.temp}-{}</h2></>}
      {result!==null && result.cod===200 &&<><h2>Humidity:{result.main.humidity}</h2></>}
      {result!==null && result.cod===200 &&<><h2>sea-level:{result.main.sea_level}</h2></>}
      {result!==null && result.cod===200 &&<><h2>Co-ord(lat lon):{result.coord.lat}  -  {result.coord.lon}</h2></>}
      {result!==null && result.cod==="404" && <font color='red' size='5'><b>Result:{result.message}</b></font>}

    </div>
  )
}
export default App


/*import React from 'react'
function App() {
  let findtot=()=>
  {
    var tags=document.getElementsByTagName("input")
    var size=tags.length;
    document.getElementById("res").innerHTML="Count of textbox: "+size;
    var sum=0;
    for(var i=0;i<size;i++)
    {
      sum=sum+parseInt(tags[i].value);
    }document.getElementById("res1").innerHTML=sum+" is the total";
  }
  return(
    <div>
      <input type="text" placeholder='Enter number 1'></input><br></br>
      <input type="text" placeholder='Enter number 2'></input><br></br>
      <input type="text" placeholder='Enter number 3'></input><br></br>
      <input type="text" placeholder='Enter number 4'></input><br></br>
      <input type="text" placeholder='Enter number 5'></input><br></br>
      <button onClick={findtot}>Total</button>
      <div id="res"></div>
      <div id="res1"></div>
    </div>
  )
}
export default App


/*import React from 'react'

function App() {
  let findtotal=()=>
  {
    var a=parseInt(document.getElementById("t1").value);
    var b=parseInt(document.getElementById("t2").value);
    var c=parseInt(document.getElementById("t3").value);
    var d=parseInt(document.getElementById("t4").value);
    var e=parseInt(document.getElementById("t5").value);
    var tot=a+b+c+d+e;
    document.getElementById("res").innerHTML="total: "+tot;
  }
  return (
    <div>
      <input type="text" id="t1" placeholder='Enter number'></input><br></br>
      <input type="text" id="t2" placeholder='Enter number'></input><br></br>
      <input type="text" id="t3" placeholder='Enter number'></input><br></br>
      <input type="text" id="t4" placeholder='Enter number'></input><br></br>
      <input type="text" id="t5" placeholder='Enter number'></input><br></br>
      <input type="button" onClick={findtotal} value="sum"></input>
    <div id="res"></div>
    </div>
  )
}
export default App


/*import React from 'react'
function App() {
  const dis=(Event)=>
  {
    document.getElementById("res").innerHTML="You are currently working in "+Event.target.type;
  }
  return (
    <div>
      <input type="text" onChange={dis} placeholder='Enter text'></input><br></br>
       <input type="number" onChange={dis} placeholder='Enter number'></input><br></br>
        <input type="Password" onChange={dis} placeholder='Enter password'></input><br></br>
         <input type="radio" name="g" onChange={dis}></input>Male
          <input type="radio" name="g" onChange={dis}></input>Female<br></br>
           <input type="checkbox" onChange={dis}></input>C<br></br>
            <input type="checkbox" onChange={dis}></input>C++<br></br>
             <input type="checkbox" onChange={dis}></input>Java<br></br>
    <div id="res"></div>
    </div>
  )
}
export default App


/*import React from 'react'

function App() {
  var dis=(Event)=>
  {
    document.getElementById("res").innerHTML=Event.target.id+"....typing";

  }
  return (
    <div>
      <input type="text" id="textbox 1" onChange={dis} placeholder='Textbox 1'></input><br></br>
      <input type="text" id="textbox 2" onChange={dis} placeholder='Textbox 2'></input><br></br>
      <input type="text" id="textbox 3" onChange={dis} placeholder='Textbox 3'></input><br></br>
      <input type="text" id="textbox 4" onChange={dis} placeholder='Textbox 4'></input><br></br>
      <input type="text" id="textbox 5" onChange={dis} placeholder='Textbox 5'></input><br></br>
    <div id="res"></div>
    </div>
  )
}

export default App


/*import React from 'react'

function App() {
  const dis=()=>
  {
    var a=parseInt(document.getElementById("t1").value);
    var b=parseInt(document.getElementById("t2").value);
    var c=a+b;
    document.getElementById("res").innerHTML="total:"+c;
  }
  return (
    <div>
      <input type="text" id="t1" placeholder='Enter number'></input><br></br>
      <input type="text" id="t2" placeholder="enter number"></input><br></br>
      <input type="button" onClick={dis} value="Find total"></input>
       <div id="res"></div>
    </div>
   
  )
}
export default App


/*import React from 'react'
function App() {
  const dis1=()=>
  {
    document.getElementById("res").innerHTML="Cursor outside the textbox";
    document.getElementById("t1").style.backgroundColor="pink"
  }
  const dis2=()=>
  {
    document.getElementById("res").innerHTML="Cursor inside the textbox";
    document.getElementById("t1").style.backgroundColor="green";
  }
  return (
    <div>
      <input type="text" id="t1" onBlur={dis1} onFocus={dis2} placeholder='Enter your text'></input>
      <div id="res"></div>
    </div>
  )
}

export default App;


/*import React from 'react'
function App()
{
  const dis=(Event)=>
  {
    var data=Event.target.value;
    document.getElementById("res").innerHTML=data+"...typing"
  }
  return (
    <div>
      <h1>React Events</h1>
      <input type="text" onChange={dis} placeholder='enter text'></input>
      <br></br>
      <div id="res"></div>
    </div>
  )
}export default App;


/*import React from 'react'
function App()
{
  return(
    <form>
      <h1>React Forms:</h1>
      <input type="text" id="t1" placeholder="Enter Mark1"></input>
      <br></br>
      <input type="text" id="t2" placeholder="Enter mark2"></input>
      <br></br>
       <input type="text" id="t3" placeholder="Enter Mark3"></input>
      <br></br>
       <input type="text" id="t4" placeholder="Enter Mark4"></input>
      <br></br>
       <input type="text" id="t5" placeholder="Enter Mark5"></input>
      <br></br>
      <input type="Password" id="pw" placeholder='Enter password'></input>
      <br></br>
      <input type="number" id="no" placeholder='Enter number'></input>
      <br></br>
      <label>Select gender</label>
      <input type="radio" id="g1" name="gen"></input>Male
      <input type="radio" id="g2" name="gen"></input>Female
      <input type="radio" id="g3" name="gen"></input>Others
      <br></br>
      <label>Select courses</label>
      <input type="checkbox" id="c1"></input>C
      <input type="checkbox" id="c2"></input>C++
      <input type="checkbox" id="c1"></input>Java
      <input type="checkbox" id="c1"></input>None of these
      <br></br>
      <label>Select color</label>
      <input type="color" id="cl"></input>
      <br></br>
      <label>Select date</label>
      <input type="date" id="dt"></input>
      <br></br>
      <label>Select time</label>
      <input type="time" id="tm"></input>
      <br></br>
      <label>Upload photo</label>
      <input type="file" id="f1"></input>
      <br></br>
      <input type="button" value="clickme"></input>
      <input type="submit" value="Submit button"></input>
      <input type="reset" value="clear"></input>
      <button>Click me</button>
    </form>
  )
}
export default App;


/*import React from 'react'

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
      <h2>Result:{(props.data.marks[0]>34 &&props.data.marks[1]>34 && props.data.marks[2]>34 &&props.data.marks[3]>34)?props.data.result="Pass":props.data.result="Fail"}</h2>
      <h2>--------------------------</h2>
      {arr.map((i,ind)=><><br></br>{i}-----&gt;{props.data[i]}</>)}
      <h2>----------------------------</h2>
      {arr.map((i,index)=><><br></br>{i}----&gt;{((i==="marks") && props.data[i].map((i,index)=><><br></br>marks:{index+1}---&gt;{i}</>))|| (props.data[i])}</>)}

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
