import { useState } from "react";
import "./App.css";
import Button from "./assets/shared/Button";
import Container from "./assets/shared/Container";
import Input from "./assets/shared/Input";
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
  const [street, setStreet] = useState("");
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
        <Input
          label="Street"
          placeholder="eg.: 15th Avenue"
          value={street}
          onChange={e => setStreet(e.target.value)}
        />
      </Container>
    </div>
  );
}

export default App;
