import Student from './Student'

const Students = ({students}) => {

    return (
        <div className="studentContainer">
            {students.map((student)=>(
                <Student key={student.id} student={student}/>
            ))}
        </div>
    )
}

export default Students
