import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Header balance="0" account="0x00000" />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
