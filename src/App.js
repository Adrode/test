import './App.css';

fetch("currencies.json")
  .then(response => response.json())
  .then(currencies => console.log(currencies));

function App() {

  return (
    <div className="App">
      <form>
        <input placeholer="Type amount"></input>
        <select>
          <option>USD</option>
          <option>EUR</option>
        </select>
      </form>
    </div>
  );
}

export default App;
