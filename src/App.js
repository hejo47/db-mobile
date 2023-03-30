import "./App.css";
import Container from "./components/common/Container";
import Header from "./components/common/Header";
import Card from "./components/common/Card";

function App() {
  return (
    <div className='App'>
      <Container>
        <Header />
        <Card>
          <img src='img/banner/main_banner01.jpeg' alt='솜사탕' />
        </Card>
      </Container>
    </div>
  );
}

export default App;
