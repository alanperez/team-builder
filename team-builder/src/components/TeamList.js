import React, {useState} from 'react'

function TeamList() {
  const [teamMember] = useState([
    {
      name: 'Get Rich',
      email: 'gr@gmail.com',
      role: 'Artist',
    },
    {
      name: 'Heat',
      email: 'heat@gmail.com',
      role: 'Rapper',
    },
    {
      name: 'What Up Gangsta',
      email: 'goat@gmail.com',
      role: 'Goat',
    }
  ])


  return (
    <div className='ui card'>
      <div className='content'>

      {teamMember.map(member => (
        <div className='header'>{member.name}</div>
        )
        )}
        </div>
    </div>
  )
}

export default TeamList
