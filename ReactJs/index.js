// const reactHeading = React.createElement("h1", {className : "head", id:"reactHead", children:"Hello Reacts!"});
function Name(){
    return(<>
    <p>JSX is JavaScript XML</p>
    </>)
}

const App=()=>(
        <>
        <h1 className="head">Hello JSX</h1>
        <p>This is created using JSX</p>
        </>
        )
ReactDOM.createRoot(document.getElementById("root")).render(<><App/><Name/></>);