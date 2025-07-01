import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import data from "./data";

function App() {
  const dataFunc = data.map((note) => <Main {...note} />);

  return (
    <main className="app-main">
      <Header />
      {dataFunc}
      <Footer />
    </main>
  );
}

export default App;
