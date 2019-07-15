import React,{useState} from 'react';
// import './App.css';

import Form from './components/Form'
import TeamList from './components/TeamList'


function App() {
  
  const[teamMember, setTeamMember] = useState({
    member: '',
    email: '',
    role: '',
  })

  const [membersToEdit, setMembersToEdit] = useState(null)

  const addMember = () => {

  }

  const editMember = () => {
    
  }

  return (
    <div className="App">
      <Form />
      <TeamList />
    </div>
  );
}

export default App;
