import { useState, useRef } from 'react'
import AlarmMessage from './components/AlarmMessage';
import useIntersectionObserver from './hooks/useIntersectionObserver/useIntersectionObserver';

function App() {
  const rows = [];

  for(let i = 0; i < 100; i++) 
    rows.push(i==50? 
      <AlarmMessage text={"Элемент сообщения"} key={i}/> 
      : <h2 key = {i}>{i}</h2>);

  return (
    <>
      {rows}
    </>
      
  )
}

export default App
