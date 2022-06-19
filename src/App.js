
import axios from "axios";
import { useState,useEffect } from "react"
import Button from "./Components/Button";
import Header from "./Components/Header";
import Services from "./Components/Services";

const App=()=> {
useEffect(()=>{
  axios.get(' http://localhost:5000/services').then(response=>{
   setServices(response.data) 
  })
},[])

  const [services,setServices]=useState([])
   
  return (
    <div className="App">
      <Header />
      <Services  services={services}/>

       
      <Button />
    </div>
  );
}

export default App;
