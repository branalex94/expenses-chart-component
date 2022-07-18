import data from "/src/data.json";
import BalanceHeader from "../BalanceHeader";
import ChartBars from "../ChartBars";

export default function ExpensesChart() {
  return (
    <main className="chart__wrapper">
      <BalanceHeader title={"My balance"} balance={"$921.48"} />
      <ChartBars dailyValues={data} />
    </main>
  );
}
