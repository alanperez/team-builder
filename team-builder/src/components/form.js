import React, { useState,useEffect } from 'react'

const Form = props => {
  // console.log(props)
  const [teamMember, setTeamMember] = useState({
    name: '',
    email: '',
    role: '',
  })



  const handleChange = e => {
  setTeamMember({
    ...teamMember,
    [e.target.name]:e.target.value
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

  useEffect( () => {
    setTeamMember(props.memberToEdit)
  }, [props.memberToEdit])

  return (
    <div className='ui middle aligned center aligned grid'>
      <div className='column twelve wide'>
      <h3>Team Member</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input name='name' type='text' placeholder='Joe Bob' onChange={handleChange}/>
        </label>

        <label>
          E-mail: 
          <input name='email' type='email' placeholder='joe@bob.com' onChange={handleChange}/>
        </label>

        <label>
          Role: 
          <input name='role' type='text' placeholder='backend engineer, frontend engineer, designer' onChange={handleChange}/>
        </label>

        <label>
          <button onClick={props.addMember}>Submit</button>
          <button >Edit</button>
        </label>
      </form>
      </div>
   </div>
  )
}

export default Form