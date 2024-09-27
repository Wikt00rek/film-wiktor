import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <div>
        <div class="mb-3">
          <label for="film" class="form-label">Tytuł filmu: </label>
          <input type="text" class="form-control" id="film"/>
          </div>
            <div id="emailHelp" class="form-text">Wybierz rodzaj filmu</div>
        </div>
        <div class="mb-3"><input type="email" class="form-control" id="film"/>
        </div>
        <div class="mb-3 form-check">
            <label class="form-check-label" for="exampleCheck1"></label>
        </div>
        <button type="submit" class="btn btn-primary">Sprawdź</button>
      </form>
    </div>
  );
}

export default App;
