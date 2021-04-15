import './App.css';
import Wilder from "./Wilder";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          <Wilder name="Wilder #1"/>
          <Wilder name="Wilder #2"/>
          <Wilder name="Wilder #3"/>
          <Wilder name="Wilder #4"/>
          <Wilder name="Wilder #5"/>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2020 Wild Code School</p>
        </div>
      </footer>
      </div>
  );
}

export default App;
