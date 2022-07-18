export default function Attributions({ name, url }) {
  return (
    <div className="attribution">
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href={url}>{name}</a>.
    </div>
  );
}
