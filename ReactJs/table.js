function App(){
    let students=[
        {
            name:"Soumalya",
            age:24,
            marks:95
        },
        {
            name:"Ananya",
            age:24,
            marks:85
        },
        {
            name:"Soumili",
            age:15,
            marks:90
        }
    ];

    return(
        <>
        <h1>Students Details</h1>
        <table>
            <tr>
                <thead>
                <th>Name</th>
                <th>Age</th>
                <th>Marks</th>
                </thead>
            </tr>
            <tbody>
            {students.map((student,index)=>(
                <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.marks}</td>
                </tr>
            ))}
            </tbody>
            
        </table>
        </>
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById("root")).render(<App />);