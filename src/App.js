import React, {useEffect, useState} from "react"
import axios from "axios"
import Students from './components/Students'

function App() {

  useEffect(() =>{
    getStudents();
  }, [])

  const [students, setStudents] = useState([]);

  const getStudents = async() => {
      try{
          const response = await axios.get("https://api.hatchways.io/assessment/students");
          setStudents(response.data.students);
      }catch(err){
          alert(err.message);
      }
  }

  return (
    <div className="container">
      <Students students={students}/>
    </div>
  );
}

export default App;
