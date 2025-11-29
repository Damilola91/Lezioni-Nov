export default function LoginButtons({ setUser, users }) {
  return (
    <div style={{ marginTop: 30 }}>
      <h2>🔐 Seleziona utente per Login</h2>

      <div
        style={{ display: "flex", gap: 15, flexWrap: "wrap", marginTop: 15 }}
      >
        {users.map((u, i) => (
          <button
            key={i}
            onClick={() => setUser(u)}
            style={{ padding: "8px 12px" }}
          >
            {u.name} ({u.type})
          </button>
        ))}
      </div>
    </div>
  );
}
