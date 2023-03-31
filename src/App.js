import "./App.css";
import Container from "./components/common/Container";
import Header from "./components/common/Header";
import Card from "./components/common/Card";
import SectionTitle from "./components/common/SectionTitle";
import ProductList from "./components/common/ProductList";

function App() {
  return (
    <div className='App'>
      <Container>
        <Header />
        <Card>
          <img src='img/banner/main_banner01.jpeg' alt='솜사탕' />
        </Card>
        <SectionTitle title={"인기"} desc={"무인양품의 인기 제품을 만나보세요."} />
        <ProductList />
      </Container>
    </div>
  );
}

export default App;
