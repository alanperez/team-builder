import React,{useState} from 'react';
// import './App.css';

import Form from './components/Form'
import TeamList from './components/TeamList'
import {team} from '../src/team'

function App() {
  
  // team member state
  const[teamMember, setTeamMember] = useState({
    name: '',
    email: '',
    role: '',
  })

  // data of team
  const [currentMember, setCurrentMember] = useState(team)

  // edit
  const [membersToEdit, setMembersToEdit] = useState(null)

  const addMember = member => {
    setCurrentMember([...currentMember, member])
  }

  const editMember = member => {
     setCurrentMember([...currentMember,member])
  }

  return (
    <div className="App">
      <Form 
        teamMember={teamMember}
        setTeamMember={setTeamMember}
        addMember={addMember}
      />

      {currentMember.map(member => {
        return <TeamList member={member} currentMember={currentMember} addMember={addMember} editMember={editMember}/>
      })}
    </div>
  );
}

export default App;
