import './style.css'
import {useState} from 'react'

const Counter = () => {
    let [step,setStep] = useState(1)
    let [count,setCount] = useState(step)
    
    return (
        <>
            <h1 style={{textAlign:'center'}}>Counter App</h1>
            <div className="sec">
                <button onClick={()=>setStep(step-1)}>dec</button>
                <h2>Steps : {step}</h2>
                <button onClick={()=>setStep(step+1)}>inc</button>
            </div>
            <div className='sec'>
                <button onClick={()=>setCount(count-step)}>dec</button>
                <h2>Count : {count}</h2>
                <button onClick={()=>setCount(count+step)}>inc</button>
            </div>
        </>
    )
}

export default Counter