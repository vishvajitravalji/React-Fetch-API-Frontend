import Student from './Student'
import React, {useState} from "react"

//This function returns the full name of the searched name
function fullName(firstName, lastName){
    let fullName = "";
    return fullName + firstName + " " + lastName;
}

//This function goes through the array of tags for a student and returns true if searched tag is exist in the student
function tagMatch(tag, searchTagTerm){
    let validCheck = false;
    
    for(let position = 0; position < tag.length; position++){
        if(tag[position].toLowerCase().includes(searchTagTerm.toLowerCase())){
            validCheck = true;
        }
    }
    return validCheck;
}

const Students = ({students}) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchTagTerm, setSearchTagTerm] = useState("");
    
    return (
        <div className="studentContainer">
            
            {/*name search bar*/}
            <input className="searchBar" type='text' placeholder="Search by name" onChange={(event) =>{setSearchTerm(event.target.value);}}/>

            {/* tag search tag */}
            <input className="searchBar searchTagBar" type='text' placeholder="Search by tag" onChange={(event) =>{setSearchTagTerm(event.target.value);}}/>
            
            {/* filter map results based on Name Search Bar & Tag Search Bar input */}
            {students.filter((val)=>{
                if(searchTerm === "" && searchTagTerm === ""){
                    return val;
                }else if(val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) && searchTagTerm === ""){
                    return val;
                }else if(fullName(val.firstName, val.lastName).toLowerCase().includes(searchTerm.toLowerCase()) && searchTagTerm === ""){
                    return val;
                }else if(searchTerm === "" && tagMatch(val.tag, searchTagTerm) === true){
                    return val;
                }else if (val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) && tagMatch(val.tag, searchTagTerm) === true){
                    return val;
                }else if(fullName(val.firstName, val.lastName).toLowerCase().includes(searchTerm.toLowerCase()) && tagMatch(val.tag, searchTagTerm) === true){
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
