const LoginButtons = ({ onLoginFree, onLoginVip }) => (
  <div className="login-container">
    <button onClick={onLoginFree} className="btn">
      Login Utente
    </button>
    <button onClick={onLoginVip} className="btn premium">
      Login VIP
    </button>
  </div>
);

export default LoginButtons;
