
import { useState } from "react"
import Button from "./Components/Button";
import Header from "./Components/Header";
import Services from "./Components/Services";

const App=()=> {

  const [services,setServices]=useState([
    {
      id:'1',
      logo:'',
      heading:'product design ',
      text:'let me help you to forcus on the core of web validate the design solution beacuse react is very marketable in the in dustry now'
    },
    {
      id:'2',
      logo:'',
      heading:'front-end engineering ',
      text:'let me help you to forcus on the core of web validate the design solution beacuse react is very marketable in the in dustry now'
    },
    {
      id:'3',
      logo:'',
      heading:'teaching',
      text:'let me help you to forcus on the core of web validate the design solution beacuse react is very marketable in the in dustry now'
    }
  ])
   
  return (
    <div className="App">
      <Header />
      <Services  services={services}/>

       
      <Button />
    </div>
  );
}

export default App;
