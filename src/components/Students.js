// import React, {useEffect, useState} from "react"
// import axios from "axios"
import Student from './Student'

const Students = ({students}) => {

    // useEffect(() =>{
    //     getStudents();
    // }, [])

    // const [students, setStudents] = useState([])

    // const getStudents = async() => {
    //     try{
    //         const response = await axios.get("https://api.hatchways.io/assessment/students");
    //         setStudents(response.data.students);
    //         console.log(response.data.students);
    //     }catch(err){
    //         alert(err.message);
    //     }
    // }
    return (
        <div>
            {/* {students.map((student)=>(
                <h1 key={student.id}>{student.city}</h1>
            ))} */}

            {students.map((student)=>(
                <Student key={student.id} student={student}/>
            ))}
            
        </div>
    )
}

export default Students
