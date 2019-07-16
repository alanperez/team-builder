import React from 'react'

const TeamList = props => {

  return (
    <>
    <div className='ui card' style={{margin:'50px auto'}} onClick={() => console.log(props.member)}>
      <h1>
        {props.member.name}
      </h1>
        <div className='description'>
        <div>
        {props.member.role}

        </div>
        {props.member.email}
        </div>
        <button onClick={() => {
          props.editMember(props.member)
        }}></button>
    </div>
    </>
  )
}

export default TeamList
