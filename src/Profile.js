import { useState }  from 'react'
import image from './logo512.png'

const Profile = () => {
    const [name, setName] = useState('mario') 
    const [age, setAge] = useState('40')
    const [job, setJob] = useState('professional retard')
    const handleClick = () => {
        setName('Oussema')
        setAge('15')
        setJob('based king')
    }
    const style = {paddingBottom:'4cm',color:'blue',backgroundColor:'black',fontWeight:'bold',textSize:'2cm',fontFamily:'sans-serif' }
    const style2 = {height:'6cm', width:'6cm'}
    return (      
        <center>
            <div className="home" style= {style} >
            <div style={{paddingTop:'3cm',lineHeight:'1cm'}}>
            <p>fullName:{name}</p>
            <p>bio : {age}</p>
            <p>profession: {job}</p> 
            <button style={{backgroundColor:'skyblue'}} onClick={handleClick}>Click</button><br/>
            <img src= {image}  style={style2} />
            </div>
        </div>
        </center>
    )
}

export default Profile

