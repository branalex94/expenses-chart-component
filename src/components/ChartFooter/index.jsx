export default function ChartFooter() {
  return (
    <footer className="chart__footer">
      <div className="footer__left">
        <span className="total__text">Total this month</span>
        <span className="total__amount">$478.33</span>
      </div>
      <div className="footer__right">
        <span className="footer__profit-last-month">+2.4%</span>
        <span className="footer__last-month">from last month</span>
      </div>
    </footer>
  );
}
