import "./App.css";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>

      <section className="py-8">
        <Heading>
          Kitchen Room
        </Heading>
      </section>
    </div>
  );
}

export default App;
