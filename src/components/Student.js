import React, {useState} from 'react';

//This function takes an array of grades and returns the average
function averageGrade(gradeArray){
    let sum = 0; 
    for (let position = 0; position < gradeArray.length; position++){
        sum = sum + parseInt(gradeArray[position]);
    }
    return sum / gradeArray.length;
}

function expandMe(gradeArray){

}

const Student = ({student}) => {

    const [show, setShow] = useState(false);

    return (
        <div className='student'>
            <div className='studentLeft'>
                <div className='studentPictureContainer'>
                    <img className='studentPicture' src={student.pic} alt=""></img>
                </div>
            </div>
            <div className='studentRight' id="test">
                <div className='studentNameContainer'>
                    <label>{student.firstName.toUpperCase()} {student.lastName.toUpperCase()}</label>
                </div>
                <div className='studentDetailContainer'>
                    <p className='studentDetail'>Email: {student.email}</p>
                    <p className='studentDetail'>Company: {student.company}</p>
                    <p className='studentDetail'>Skill: {student.skill}</p>
                    <p className='studentDetail'>Average: {averageGrade(student.grades)}%</p>
                </div>
                {
                    show?<div className='studentGradeContainer'>
                        {student.grades.map((studentGradeList, index)=>(
                            <p className='studentDetail'>Test {index + 1}: {studentGradeList}%</p>
                        ))}
                    </div>:null
                }
            </div>
            <div className='buttonFarRight'>
                <div className='buttonContainer'>
                    <button className='buttonExpand' onClick={ () => setShow(!show)}>{show? "-" : "+"}</button>
                </div>
            </div>
            
        </div>
    )
}
export default Student

