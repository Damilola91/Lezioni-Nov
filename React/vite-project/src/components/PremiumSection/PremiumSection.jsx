export default function PremiumSection({ user }) {
  return (
    <div style={{ marginTop: 25, padding: 12, border: "1px solid gray" }}>
      <h2>⭐ Area Premium</h2>
      <p>Ultimo accesso: {user.lastLogin}</p>

      <h4>Hobbies:</h4>
      <ul>
        {user.hobbies?.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </div>
  );
}
