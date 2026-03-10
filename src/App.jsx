import { Suspense } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import OrderContainer from "./components/OrderContainer";

const loadOrders = fetch("/orders.json")
.then((res) => res.json());

function App() {
  
  
  return ( 
    <div>
      <header>
        <Navbar></Navbar>
      </header>

      <section className="py-8">
        <Heading>Kitchen Room</Heading>
      </section>

      <Suspense fallback= {<p>Loading...</p>}>
       <OrderContainer loadOrders= {loadOrders}></OrderContainer>
      </Suspense>
    </div>
  );
}

export default App;
