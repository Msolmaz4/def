
import './App.css';
import Palet from './components/Palet';
import {init ,sub} from './SocketApi.jsx'
import {useEffect, useState} from 'react'
// sub kullanmak icin usesta kullaniriy
function App() {

  const [activ ,setActiv] = useState( "#282c34")
  useEffect(()=>{
init()
sub((color)=>{setActiv(color)})
  },[])
  return (
    <div className="App" style={{backgroundColor:activ}}>
     <Palet/>
    </div>
  );
}

export default App;
