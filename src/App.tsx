import "./App.css";
import Button from "./assets/shared/Button";
import Container from "./assets/shared/Container";
import Header from "./components/Header";

function TestComponent() {
  return (
    <img
      width="16"
      src="https://images.freeimages.com/fic/images/icons/1053/project/256/search_find.png"
      alt="Pesquisar"
    />
  );
}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Button
          onClick={() => window.alert("fçdjfçalj")}
          appendIcon={<TestComponent />}
        >
          Alert
        </Button>
      </Container>
    </div>
  );
}

export default App;
