// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Fragment } from "react";

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
import { ShortCircuitExample } from "./components/Hooks/short";
import { Counter } from "./components/Hooks/useState";
import { CounterChallenge } from "./components/Hooks/useState/Challenge";
import ControlledForm from "./components/Hooks/useState/Controlled";
import { RegistrationForm } from "./components/Hooks/useState/Registration";
import { RegistrationFormReact } from "./components/Hooks/useState/RegisterFormReact";
import { LoginForm } from "./components/Hooks/useState/LoginForm";
import { ContactForm } from "./components/Hooks/useState/ContactForm";
import { ReactUseEffect } from "./components/Hooks/useEffect/Index";
import { Challenge } from "./components/Hooks/useEffect/EffectChall";
import { CleanUp } from "./components/Hooks/useEffect/CleanUp";
import { HoefetchApi } from "./components/Hooks/useEffect/HoeFetchAPI";
import { UseRef } from "./components/Hooks/UseRef";
import { UseId } from "./components/Hooks/useId";
import { ParentComponent } from "./components/PropDrilling";
import { BioProvider } from "./components/Hooks/ContextAPI";
import { Home } from "./components/Hooks/ContextAPI/Home";
import { About } from "./components/Hooks/ContextAPI/About";
import { Servicec } from "./components/Hooks/ContextAPI/Servicec";
import { DarkLight, ThemeProvider } from "./components/Hooks/ContextAPI/DarkLight";

export const App = () => {

  return (
    <section className="container">
      <BioProvider>
        {/* <h1 className={khan[`Card-Common`]}>List Of Best Netflix Series</h1> */}
        {/* <NetflixList/>
  <EventHandling/> */}
        {/* <EventProps/> */}
        {/* <EventPropagation/> */}
        {/* <State/>
  <LiftUp/> */}
        {/* <ToggleSwitch/> */}
        {/* <Todo/> */}
        {/* <ShortCircuitExample/> */}
        {/* <Counter/>
  <CounterChallenge/>
  <ControlledForm/> */}
        {/* <RegistrationForm/> */}
        {/* <RegistrationFormReact/> */}
        {/* <LoginForm/> */}
        {/* <ContactForm/> */}
        {/* <ReactUseEffect/> */}
        {/* <CleanUp/> */}
        {/* <Challenge/> */}
        {/* <HoefetchApi/> */}
        {/* <UseRef/> */}
        {/* <UseId/> */}
        {/* <ParentComponent /> */}
        <Home/>
        <About/>
        <Servicec/>
      </BioProvider>
      <ThemeProvider>
        <DarkLight/>
      </ThemeProvider>
    </section>
  );
};



