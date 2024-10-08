import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  const [tytul, setTytul] = useState("");
  const [rodzaj, setRodzaj] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Tytuł; ${tytul}, Rodzaj: ${rodzaj}`);
  }
  return (
    <div className="App">
      <form>
        <div>
          <div class="mb-3">
            <label for="film" class="form-label">Tytuł filmu: </label>
            <input type="text" class="form-control" id="film" />
          </div>
        </div>
        <div class="mb-3 form-check">
          <label for="disabledSelect" class="form-label">Wybierz rodzaj filmu </label>
          <select id="disabledSelect" class="form-select">
            <option>Pusta</option>
            <option>Komedia</option>
            <option>Kryminał</option>
            <option>Horror</option>
            <option>Przygodowe</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Sprawdź</button>
      </form>
    </div>
  );
}

export default App;
