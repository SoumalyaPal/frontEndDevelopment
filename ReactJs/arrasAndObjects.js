function App() {
    let arr = [1,2,3,4,5];
    let obj = {
        name:"Alexa",
        age:20
    }
    return(
        <>
        <h1>Arrays and Objects</h1>
        {arr.map((num) => <h2>{num}</h2>)}
        <h2>{obj.name}</h2>
        </>
    )
}
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />)