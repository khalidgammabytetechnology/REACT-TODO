// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import {Fragment} from "react";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import NetflixList from "./components/NetflixList";
// import "./components/Netflix.css";
import khan from "./components/Netflix.module.css"
import { EventHandling } from "./components/EventHandling";
import { EventProps } from "./components/EventProps";
import { EventPropagation } from "./components/EPropagation";
import { State } from "./components/Hooks/State";
import { LiftUp } from "./components/LiftUpState";
import { ToggleSwitch } from "./Projects/ToggleSwitch/Toggle";
import { Todo } from "./Projects/ToggleSwitch/TODO/Todo";

export const App = () => {
 
 return(
<section className="container">
  {/* <h1 className={khan[`Card-Common`]}>List Of Best Netflix Series</h1> */}
  {/* <NetflixList/>
  <EventHandling/> */}
  {/* <EventProps/> */}
  {/* <EventPropagation/> */}
  {/* <State/>
  <LiftUp/> */}
  {/* <ToggleSwitch/> */}
  <Todo/>
</section> 
  );
};



