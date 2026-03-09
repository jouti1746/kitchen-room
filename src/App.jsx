import "./App.css";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import State from "./components/State";

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

      <section>
        <State></State>
      </section>
    </div>
  );
}

export default App;
