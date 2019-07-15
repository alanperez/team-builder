import React, { useState } from 'react'

function Form() {

  const[teamMember, setTeamMember] = useState({
    member: '',
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
    console.log('name:', teamMember.member)
    console.log('email:', teamMember.email)
    console.log('role:', teamMember.role)
  }
  return (
    <div className='ui middle aligned center aligned grid'>
      <div>
      <h3>Team Member</h3>
      <form onSubmit={ handleSubmit }>
        <label>
          Name: 
          <input name='member' type='text' placeholder='Joe Bob' onChange={handleChange} value={teamMember.member}/>
        </label>

        <label>
          E-mail: 
          <input name='email' type='email' value={teamMember.email} placeholder='joe@bob.com' onChange={handleChange}/>
        </label>

        <label>
          Role: 
          <input name='role' type='text' value={teamMember.role} placeholder='backend engineer, frontend engineer, designer' onChange={handleChange}/>
        </label>

        <label>
          <button>Submit</button>
          <button>Edit</button>
        </label>
      </form>
      </div>
   </div>
  )
}

export default Form