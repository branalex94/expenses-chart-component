import Logo from "../../icons/Logo";

export default function BalanceHeader({ title, balance }) {
  return (
    <header className="chart__header">
      <div>
        <span>{title}</span> <h1>{balance}</h1>
      </div>
      <div>
        <Logo />
      </div>
    </header>
  );
}
