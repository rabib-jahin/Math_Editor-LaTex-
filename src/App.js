import logo from './logo.svg';
import './App.css';

import React,{useState} from "react";
import Topic from "./Topic"
import Series from "./Series"
import Recommend  from './Recommend';
import Recommend2  from './Recommend2';



function App() {
const [state,setState]=useState(0);
const handleClick=()=>{
let c=state;
if(c==2){
  c=0;
}
else
c+=1
  setState(c)

console.log(state)
}
  return (
    <div>
    <div class="container">
<div id={state==0?"rec-pointer":"rectangle"} >

 



</div>
{
  state===1?<><Topic text={"Logical Reasoning"}/><Recommend2 text={"Recommend"}/></>:state==2?<><Topic text={"Logical Reasoning"}/><Series text={"Rearrange"}/><Recommend text={"Recommend"}/></>:null
}
</div>
<button style={{marginLeft:"1000px"}} onClick={handleClick}>Click</button>
</div>
  );
}

export default App;
