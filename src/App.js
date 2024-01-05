import './App.css';
import "./currencies.json";

const request = new XMLHttpRequest();

request.open('GET', "currencies.json");

request.responseType = 'json';

request.onload = () => {
  console.log(request.response);
};

request.send();

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
