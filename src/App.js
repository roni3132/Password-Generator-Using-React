import logo from './logo.svg';
import './App.css';
import {Datavar} from './Data.js';
import { useState } from 'react';

function App() {
  let [numbers, setNumbers] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [length, setLength] = useState(0);
  let [password, setPassword] = useState('');

  let copyData = () =>{
    navigator.clipboard.writeText(password);
  }

  let getPassword = () =>{
    if(length === 0){
      alert('Please enter a length');
      return;
    }
    let charset = '';
    if(numbers || symbols || uppercase || lowercase){
      if(numbers){
        charset += Datavar.numbers;
      }
      if(symbols){
        charset += Datavar.symbols;
      }
      if(uppercase){
        charset += Datavar.upperChar;
      }
      if(lowercase){
        
        charset += Datavar.lowerChar;
      }
  
    }else{
      alert('Please select an option');
      return;
    }
    let password = '';
    for(let i=1;i<=length;i++){
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(password);
    alert('Password Generated');
  }

  return (
  <>
  <div className='container'>
  <div className='justify-content-center pt-auto m-auto'>
    <div className='row text-center justify-content-center'>
      <div className='col-md-12'>
        <h1>PASSWORD GENERATER</h1>
      </div>
      <div className='col-md-10'>
        <div className='form-group'>
          <input readOnly value={password} type='text' className='form-control' id='password' placeholder='Your Password' />
        </div>
        </div>
        <div className='col-md-2'>
      
        <div className='form-group'>
          <button type='button' onClick={copyData} className='btn btn-primary' id='copy'>Copy</button>
        </div>
        </div>
        <div className='form-group'>
          <label htmlFor='length'>Password Length</label>
        <input type='number' min={1}  max={99} name='length' value={length} onChange={(e) =>setLength(e.target.value)}  id='length'/> <br></br>
        <input type='checkbox' name='numbers' checked={numbers} onChange={() => setNumbers(!numbers)}  id='numbers'/> Include Numbers<br></br>
        <input type='checkbox' name='symbols' checked={symbols} onChange={() => setSymbols(!symbols)}  id='symbols'/> Include Symbols<br></br>
        <input type='checkbox' name='uppercase' checked={uppercase} onChange={() =>setUppercase(!uppercase)}  id='uppercase'/> Include Uppercase<br></br>
        <input type='checkbox' name='lowercase' checked={lowercase} onChange={(e) =>setLowercase(!lowercase)}  id='lowercase'/> Include Lower<br></br>
        
        </div>
        <div className='form-group'>
          <button type='button' onClick={getPassword} className='btn btn-primary' id='generate'>Generate</button>
        </div>
      </div>
    </div>
    </div>

  </>
  );
}

export default App;
