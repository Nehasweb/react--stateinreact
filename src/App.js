import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [msg, setmsg] = useState ('Marvellous Infosystems');
  const [btn, setbtn] = useState ('Subscribe');
  return (
    <div className="App">
      <h1>{msg}</h1>
      <button onClick={()=>{setmsg ('Welocome To Marvellous Infosystems Family .'); setbtn ('Subscribed')}}>{btn}</button>
    </div>
  );
}

export default App;
