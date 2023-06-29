import { useRef } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver/useIntersectionObserver'
import './alarm-message.css'

export default function AlarmMessage({text}){

    const containerRef = useRef();
    const obsEvent = useIntersectionObserver(containerRef, "0px", true);

    console.log(obsEvent);


    return (
        <div className="alarm-message-container" ref={containerRef}>
            <h1 className='alarm-message-text'> {text}</h1>
        </div>
    )
}