import React, { useState} from 'react'

const Form = props => {
  
  const [teamMember, setTeamMember] = useState({
    name: '',
    email: '',
    role: '',
  })



  const handleChange = e => {
  setTeamMember({
    ...teamMember,
    [e.target.name]: e.target.value
  })
}
  
  const handleSubmit = e => {
    e.preventDefault()
      console.log('name:', teamMember.name)
      console.log('email:', teamMember.email)
      console.log('role:', teamMember.role)
    props.addMember(teamMember)
    setTeamMember({
      name:'',
      email:'',
      role:'',
    })
  }

  // useEffect( () => {
  //   setTeamMember(props.memberToEdit)
  // }, [props.memberToEdit])

  return (
    <div className='ui middle aligned center aligned grid'>
      <div className='column twelve wide'>
      <h3>Team Member</h3>
      {console.log(props.teamMember.name)}
      <form onSubmit={handleSubmit}>
        <label>
          Name:  </label>
          <input name='name' type='text' value={teamMember.name} placeholder='Joe Bob' onChange={handleChange}/>
       

        <label>
          E-mail: 
          <input name='email' type='email' value={teamMember.email} placeholder='joe@bob.com' onChange={handleChange}/>
        </label>

        <label>
          Role: 
          <input name='role' type='text' value={teamMember.role} placeholder='backend engineer, frontend engineer, designer' onChange={handleChange}/>
        </label>

        <label>
          <button onClick={() =>props.addMember({...teamMember})}>Submit</button>
          <button >Edit</button>
        </label>
      </form>
      </div>
   </div>
  )
}

export default Form