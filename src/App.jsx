import "./App.css";
import ExpensesChart from "./components/ExpensesChart";
import Attributions from "./components/Attributions";

function App() {
  return (
    <div className="App">
      <ExpensesChart />
      <Attributions
        name="Brandon Aray"
        url="https://www.frontendmentor.io/profile/branalex94"
      />
    </div>
  );
}

export default App;
