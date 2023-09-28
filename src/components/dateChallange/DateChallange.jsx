import './style.css'
import { useState } from 'react'

const DateChallange = () => {
    const [slider,setSlider] = useState(1)
    const [InpNum,setInpNum] = useState(0)
    return (
        <div className='App'>

                <input type="range" min={0} max={10} name="Slider" onChange={(e) => setSlider(Number(e.target.value))} value={slider}/>
                <span>{slider}</span>
                <br />
                <button onClick={()=>setInpNum(InpNum - slider)}>-</button>
                <input type="text" value={InpNum} onChange={(e) => setInpNum(Number(e.target.value))}/>
                <button onClick={()=>setInpNum(InpNum + slider)}>+</button>

                <h1>Total : {InpNum}</h1>
                {InpNum && slider !== 0 ? <button onClick={()=>{
                    setSlider(1)
                    setInpNum(0)
                }}>Reset</button> : null}
        </div>
    )
}

export default DateChallange