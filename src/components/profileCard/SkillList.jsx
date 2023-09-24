import Skill from './Skill'    

const SkillList = (props) => {
  let data = props.data;
  let emoji = ['a','b','c','d','e','f']
  let colors = ["219C90","E9B824","D83F31","FF6969",
"241468","EA1179"]
  return (
    <div className='skill-list'>
      {
        data.map(function(item){
          // console.log(emoji[data.indexOf(item)])
          return <Skill key={item} data={item} emoji={emoji[data.indexOf(item)]} bg={colors[data.indexOf(item)]} />})
      }
    </div>
  ) 
}

export default SkillList