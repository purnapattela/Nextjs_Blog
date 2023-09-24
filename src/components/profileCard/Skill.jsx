import './emoji.css'
const Skill = (props) => {
  return (
    <div className='skill' style={{backgroundColor : '#'+props.bg , color:'white'}}>
        <span>{props.data}</span>
        <span className={props.emoji}></span>
    </div>
  )
}

export default Skill