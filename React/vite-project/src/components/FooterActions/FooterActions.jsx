const FooterActions = ({ notifications, markAsRead, logout }) => (
  <div className="footer-actions">
    <h3>🔔 Notifiche: {notifications}</h3>

    {notifications > 0 && (
      <button className="btn small" onClick={markAsRead}>
        Segna tutte lette
      </button>
    )}

    <button className="btn logout" onClick={logout}>
      Logout
    </button>
  </div>
);

export default FooterActions;
