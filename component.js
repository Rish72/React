// 2 types of components i. FUNCTION BASED, ii. Class based

// F U N C T I O N A L  C O M P O N E N T

function JSx() {
  // uses Capitalized naming convension
  return (
    <>
      <h1>Hello there</h1>
      <p>This is created using React Component</p>
    </>
  );
}

const App = () => { // IMPLICITLY RETURN VALUE
  return (
    <>
      <h1>JSX using Arrow there</h1>
      <p>This is created using React Component</p>
      <JSx />
    </>
  );
};

// Render the App component and pass the JSx component as a prop
ReactDOM.createRoot(document.getElementById("root")).render(<App />);