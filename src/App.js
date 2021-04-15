import './App.css';
import Wilder from "./Wilder";

const wilders = [
  {firstname:"Wilder #1"},
  {firstname:"Wilder #2"},
  {firstname:"Wilder #3"},
]

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
          {wilders.map((wilder)=> (
            <Wilder key={wilder.firstname} {...wilder}/>
          ))}
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
