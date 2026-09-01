## Axios
- terminal:npm install axios
### Purpose
- Axios is a third party library to maintain Restful API's.
- What is the purpose of useState Hook?
    1. Runtime data management
    2. Automatically update DOM when state changes
- useState is inbuilt hence no need to install any modules

- Step 1:
    - header file
    - import {useState} from 'react'
- Step 2:
    - declaration
    - const[var,setVar]=useState("default value")
    - Eg:const[city,setCity]=useState("Karur")
- Step 3:
    - <input type="text" value={city} onChange={(e)=>dis(e)}></input>
- Step 4:
    - Change the state
    - setCity("yourvalue")
    - Eg:const dis=(Event)=>{
        setCity(Event.target.value)
    }

