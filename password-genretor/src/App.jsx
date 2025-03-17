import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PasswordGenerator } from './fuction/genF'

function App() {
  const [count, setCount] = useState(0);
  const [range, setRange] = useState(6);
  const [number,setNumber]= useState(false);
  const [sepecialCh, setSepcialCh] = useState(false);
  const [password, setPassword]=useState("");

 const PG = useCallback(()=>{
  setPassword(PasswordGenerator(range,number,sepecialCh));
 },[range,number,sepecialCh]);

 useEffect(()=>{
  PG()
 },[range,number,sepecialCh])

  function copy(){
    navigator.clipboard.writeText(password);
  }
  
  

  return (
    <>
     <div className='h-screen w-screen flex justify-center items-center bg-slate-500'>
  <div className="flex h-[200px] w-[400px] bg-blue-300 rounded-lg flex-col justify-center items-center p-4 shadow-lg">
    <p className="text-lg font-semibold">Password Generator</p>
    <div className='flex items-center gap-2 mt-2'>
      <input type="text" placeholder={password} readOnly className="mt-2 p-2 w-3/4 text-center border border-gray-400 rounded-md" />
      <button className='block p-2 mt-2' onClick={copy}>Copy</button>
    </div>
    <div className='gap-2 m-2'>
      <input type="range" min={4} max={32} value={range} onChange={(e) => { setRange(e.target.value) }} className='mt-1 pt-1' />
      <label className='m-2'>{range}</label>
    </div>
    <div className='flex gap-4 m-2'>
      <div className='flex items-center gap-1'>
        <input type='checkbox' id='number' checked={number} onChange={(e) => setNumber(e.target.checked)} className='cursor-pointer' />
        <label htmlFor="number" className='cursor-pointer'>Number</label>
      </div>
      <div className='flex items-center gap-1'>
        <input type='checkbox' id='specialCH' checked={sepecialCh} onChange={(e) => setSepcialCh(e.target.checked)} className='cursor-pointer' />
        <label htmlFor="specialCH" className='cursor-pointer'>Special Character</label>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default App
