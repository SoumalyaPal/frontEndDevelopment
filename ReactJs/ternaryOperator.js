function App(){
    let loggedIn = true;
    let name = "Alexa";
    let lastName = "";
    return (
        <>
        <h1>Hello {loggedIn? lastName || name:"User"}!</h1>
        {loggedIn && <p>Welcome to the Portal</p>}
        </>
    )
}
const rootElement = ReactDOM.createRoot(document.getElementById("root")).render(<App />);