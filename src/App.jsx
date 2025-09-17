import Users from "./users";
import Batsman from "./batsman";
import "./App.css";

function App() {
  const handleClick5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  const handleClick3 = () => {
    alert("I am clicked 3.");
  };

  function handleClick() {
    alert("I am clicked.");
  }
  return (
    <>
      <h3>Vite + React</h3>
      <Users></Users>
      <Batsman></Batsman>

      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick2() {
          alert("I am click 2.");
        }}
      >
        Click Me 2
      </button>

      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={() => alert(" I am click 4.")}>Click me 4</button>
      <button onClick={() => handleClick5(77)}>Click me 5</button>
    </>
  );
}

export default App;
