import './styles.css'
import Avatar from './Avatar'
import Intro from './Intro'
import SkillList from './SkillList'

const ProfileCard = () => {
  const skills = ["HTML+CSS","JavaScript","Web Design","Git & GitHub","React","Svelt"]
  return (
    <>
        <div className='card'>
            <Avatar image="https://avatars.githubusercontent.com/u/48616329?v=4" />
            <div className="data">
            <Intro />
            <SkillList data={skills} />
            </div>
        </div>    
    </>
  )
}

export default ProfileCard