function App() {
    let cars=["BMW","AUDI","TATA","HONDA"];
    return(
        <>
        <h1>List of Cars</h1>
        <ul>
            {cars.map((car,index)=>(
                <li key={index}>
                    {car}
                </li>
            ))}
        </ul>
        </>
    )
}
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />)