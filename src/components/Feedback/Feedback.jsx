export default function Feedback({ value, total }) {
  return (
    <div>
      <p>Good: {value.good}</p>
      <p>Neutral: {value.neutral}</p>
      <p>Bad: {value.bad}</p>
      <>Total: {total}</>
    </div>
  );
}
