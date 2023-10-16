import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";

function TestComponent () {
  return <img width="16" src="https://images.freeimages.com/fic/images/icons/1053/project/256/search_find.png"
  alt="Pesquisar" />
}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <div className="Container">
        <Button 
          onClick={() => window.alert("fçdjfçalj")}
          appendIcon={<TestComponent/>}
          >
          Alert
          </Button>
      </div>
    </div>
  );
}

export default App;
