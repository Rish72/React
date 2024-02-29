// 2 types of components i. FUNCTION BASED, ii. Class based

// F U N C T I O N  C O M P O N E N T

function App(){   // uses Capitalized naming convension
    return (
        <>
            <h1>Hello there</h1>
            <p>This is created using React Component</p>
        </>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(< App />); // component representation