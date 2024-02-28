// const reactHeading = React.createElement("h1", {className: "heading1"}, "HEllo react")  //take 3 arguments 1. type , 2. object of attributes 3. content
// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);


// React Using JSX
// const jsxHeading = (<h1>JSX HEADING</h1>)
// const para = (<p>This is a JSX paragraph implemented with the help of Babel</p>)
// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);
// ReactDOM.createRoot(document.getElementById("para")).render(para);

// const paraInHead = React.createElement("h1",{id : "parent", className : "parentDiv"}, React.createElement("p",null, "hello"));


//R E A C T  F R A G A M E N T S
const paraInHead = 
    <>
        <h1>About React</h1>
        <hr></hr>
        <ul>
            <li> JavaScript Library </li>
            <li> Uses JSX </li>
            <li> Fastk way to dynamically add content </li>
        </ul>
    </>


ReactDOM.createRoot(document.getElementById("root")).render(paraInHead)