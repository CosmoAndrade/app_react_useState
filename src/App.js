import Item from "./componts/Item";
import Card from "./componts/Card";

function App() {
  return (
    <div className="container">
      <h1>Minha Primeira Aplicação com</h1>

      <ul>
        <Item />
        <Item />
        <Item />
      </ul>

      <Card />
    </div>
  );
}

export default App;
