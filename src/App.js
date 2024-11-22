import './App.css';
import Alert from './components/Alert';
import NavBar from './components/NavBar'
import News from './components/News';
import { useState } from 'react';



function App() {
  const [mode, setMode ]= useState('light');
  const [alerttrigger,setAlerttrigger] =useState(false);
  const [searchvar ,setSearchvar] =useState('')
  //to set the background color 
  document.body.style.backgroundColor=(mode==='light'?'#212529':'white');
  const showAlert=()=>{
    setAlerttrigger(true);
    setTimeout(() => {
      setAlerttrigger(false);
    }, 1000);
  };

  const searchValue=(searchword)=>{
      setSearchvar(searchword);
  }




  return (
    <div>
      <NavBar mode={mode} setMode={setMode} showAlert={showAlert} searchValue={searchValue}/>
      {alerttrigger&&<Alert mode={mode}/>}
      <News mode={mode}  searchVar={searchvar}/>
      
    </div>
   
  );
}

export default App;
