import BarsContainer from "../BarsContainer";
import ChartFooter from "../ChartFooter";

export default function ChartBars({ dailyValues }) {
  return (
    <section className="charts__container">
      <h2>Spending - Last 7 days</h2>
      <BarsContainer dailyValues={dailyValues} />
      <hr />
      <ChartFooter />
    </section>
  );
}
