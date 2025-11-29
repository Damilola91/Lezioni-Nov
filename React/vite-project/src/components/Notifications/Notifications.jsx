export default function Notifications({ notifications, setNotifications }) {
  return (
    <div style={{ marginTop: 20 }}>
      <h3>🔔 Notifiche: {notifications}</h3>

      {notifications > 0 && (
        <button onClick={() => setNotifications(0)}>Segna come lette</button>
      )}
    </div>
  );
}
