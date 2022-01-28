import React from 'react';


import { 
  Blog, 
  Features, 
  Footer, 
  Header, 
  Misc, 
  Possibility } from "./containers/quick-containers";
import { 
  CTA,
  Brand,
  Navigation } from "./components/quick-components";
import "./app.css"


const App = () => {
  return (
    <div className='App-container'>
      <div className='gradient__bg'>
        <Navigation/>
        <Header/>
      </div>
      <Brand/>
      <Misc/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
