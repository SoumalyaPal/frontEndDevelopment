function sum(){
    let a = 10+5;
    return a;
}

const header = <h2>JSX Expression</h2>

function App(){
    var name = "Alexa";
    var age = 20;
    return(
        <>
        <h1>Hello {name}</h1>
        <p>Your age is {age}</p>
        <p>The sum is: {sum()}</p>
        {header}
        </>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);