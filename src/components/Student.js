import React, {useState} from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';


//This function takes an array of grades and returns the average
function averageGrade(gradeArray){
    let sum = 0; 
    for (let position = 0; position < gradeArray.length; position++){
        sum = sum + parseInt(gradeArray[position]);
    }
    return sum / gradeArray.length;
}

const Student = ({student}) => {
    // used to deal with showing list of grades and changing + to -
    const [show, setShow] = useState(false);
    const [tag, setTag] = useState("");

    return (
        <div className='student'>
            <div className='studentLeft'>
                <div className='studentPictureContainer'>
                    <img className='studentPicture' src={student.pic} alt=""></img>
                </div>
            </div>
            <div className='studentRight'>
                <div className='studentNameContainer'>
                    <label>{student.firstName.toUpperCase()} {student.lastName.toUpperCase()}</label>
                </div>
                <div className='studentDetailContainer'>
                    <p className='studentDetail'>Email: {student.email}</p>
                    <p className='studentDetail'>Company: {student.company}</p>
                    <p className='studentDetail'>Skill: {student.skill}</p>
                    <p className='studentDetail'>Average: {averageGrade(student.grades)}%</p>
                </div>
                {/* Show and Collapse the list of student grades */}
                {
                    show?<div className='studentGradeContainer'>
                        {student.grades.map((studentGradeList, index)=>(
                            <p key={index + 1} className='studentDetail'>Test {index + 1}: &emsp;&ensp;{studentGradeList}%</p>
                        ))}
                    </div>:null
                }

                {
                    <div className='studentTagContainer'>
                            {student.tag.map((eachTag, index)=>(
                                <span key={index + 1} className='studentTag'>{eachTag}</span>
                            ))}
                    </div>
                }

                <div className='studentAddTagContainer'>
                    <input className="addTagBar" type='text' placeholder='Add a Tag' onChange={(event)=> {setTag(event.target.value);}} onKeyPress={(event) =>{
                        //trigger if enter key is hit in the tag input box
                        if(event.key === 'Enter'){
                            
                            //prevent blank tag from being created
                            if(tag.trim() != ""){
                                student.tag = [...student.tag, tag]
                            }

                            //Clears input of all students after you press enter
                            for(let position = 0; position < document.getElementsByClassName('addTagBar').length; position++){
                                document.getElementsByClassName('addTagBar')[position].value = '';
                            }      
                        }
                    }}/>
                </div>
            </div>
            <div className='buttonFarRight'>
                <div className='buttonContainer'>
                    <button className='buttonExpand' onClick={ () => setShow(!show)}>{show? <FaMinus/> : <FaPlus/>}</button>
                </div>
            </div> 
        </div>
    )
}
export default Student

