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

          //saves the api data and sets a empty array of tag property in each student
          setStudents(response.data.students.map((student) =>({...student, tag: []})));
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
