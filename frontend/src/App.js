import "./App.css";
import data from "./data.js";

function App() {
  return (
    <div>
      <header>
        <a href="/">Bits & Pieces</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        {data.products.map((product) => {
          <div>
            <p>these are the products {product.name}</p>
          </div>;
        })}
      </main>
    </div>
  );
}

export default App;
