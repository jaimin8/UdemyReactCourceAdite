import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import chefImg from './assets/chef.svg'
import  {Coreconcept}  from './data'
import  MyHeader  from './MyHeader.jsx'
import  CoreConcept  from './CoreConcept.jsx'
import './App.css'
import TabButton from './TabButton.jsx'
import { consoleprint } from './TabButton.jsx'



function App() {
  const [count, setCount] = useState(0)
  const [buttons,setbutton]=useState([]);
  function addbtn(){
    const btnobj={
      id:Date.now(),
      text:`button${setCount(count+1)}${count}`
    }
    setbutton([...buttons,btnobj]);
  }
  function removebtn(btnid){
    const btnarr=buttons.filter((btttn)=>btttn.id!==btnid);
    setbutton(btnarr);
  }
  console.log("jaimin");
  return (
    <>       
    <MyHeader/>
    <section id='coreconcept'  >
      <ul>
        <CoreConcept title={Coreconcept[0].title} description={Coreconcept[0].description}/>
         <CoreConcept title="OM" description="HR"/>
          <CoreConcept {...Coreconcept[1]}/>
           <CoreConcept title="Darshan" description="DBA"/>
      </ul>
      <TabButton onclick={()=>consoleprint(" Soni")} >Give Alert</TabButton>
      <TabButton onclick={()=>consoleprint("Champaneri")}>Give a console Log</TabButton>
      <TabButton onclick={addbtn}>do nothing </TabButton>

      {buttons.map((btn)=>(<TabButton id={btn.id} onclick={()=>{removebtn(btn.id)}}>{btn.text}</TabButton>))}
    </section>
    <br />
      
    </>
  )
}

export default App
