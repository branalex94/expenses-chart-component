import "./App.css";
import ExpensesChart from "./components/ExpensesChart";
import Attributions from "./components/Attributions";

function App() {
  return (
    <div className="App">
      <ExpensesChart />
      <Attributions name="Brandon Aray" url="" />
    </div>
  );
}

export default App;
