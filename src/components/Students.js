import Student from './Student'
import React, {useState} from "react"

//This function returns the full name of the searched name
function fullName(firstName, lastName){
    let fullName = "";
    return fullName + firstName + " " + lastName;
}

const Students = ({students}) => {

    const [searchTerm, setSearchTerm] = useState("");
    
    return (
        <div className="studentContainer">
            
            {/*search bar*/}
            <input className="searchBar" type='text' placeholder="Search by name" onChange={(event) =>{setSearchTerm(event.target.value);}}/>
            
            {/* filter map results based on Search Bar input */}
            {students.filter((val)=>{
                if(searchTerm === ""){
                    return val;
                    //name (don't need this because full name covers this case but included just in case)
                } else if (val.firstName.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                    //full name (covers first name too but included both)
                } else if (fullName(val.firstName, val.lastName).toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                }else{
                    return false;
                }
            }).map((student)=>(
                <Student key={student.id} student={student}/>
            ))}
        </div>
    )
}

export default Students
