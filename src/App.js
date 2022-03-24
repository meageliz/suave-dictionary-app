import logo from "./logo.png";
import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <main>
          <Search defaultKeyword="hello" />
        </main>
        <br />
        <footer>
          <a
            href="https://github.com/meageliz/suave-dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/meagangardner/"
            target="_blank"
            rel="noreferrer"
          >
            Meag Gardner
          </a>
        </footer>
      </div>
    </div>
  );
}
