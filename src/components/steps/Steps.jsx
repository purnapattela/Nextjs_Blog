import {useState} from 'react'
import './style.css'

const msg = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',  
];

const Steps = () => {
  const [step,setStep] = useState(1)
  // let step = 3;
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step>=1 ? "active":""}`}>1</div>
        <div className={`${step>=2 ? "active":""}`}>2</div>
        <div className={`${step>=3 ? "active":""}`}>3</div>
      </div>

      <p className="message">{msg[step-1]}</p>

      <div className="buttons">
        <button className="previous bg-red-600 text-white" onClick={()=>setStep(step > 1 ? step-1 : step)}>Previous</button>
        <button className="next bg-blue-600 text-white" onClick={()=>setStep(step < 3 ? step+1 : step)}>Next</button>
      </div>
    </div>
  )
}

export default Steps