import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">dictionary</header>
        <main>
          <Search defaultKeyword="sunset" />
        </main>
        <br />
        <footer>Open-source code by Meag Gardner</footer>
      </div>
    </div>
  );
}
