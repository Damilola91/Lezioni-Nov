import { useState } from "react";
import "./Dashboard.css";
import { users } from "../../data/users";
import LoginButtons from "../LoginButtons/LoginButtons";
import UsersGrid from "../UsersGrid/UsersGrid";

const Dashboard = () => {
  const [usersList, setUsersList] = useState([]);
  const [notifications, setNotifications] = useState(3);
  const [theme, setTheme] = useState("light");

  const login = (vip = false) =>
    setUsersList(users.filter((u) => (vip ? u.isVip : !u.isVip)));

  const logout = () => {
    setUsersList([]);
    setNotifications(3);
  };

  const markAsRead = () => setNotifications(0);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={`dashboard ${theme}`}>
      <button className="theme-btn" onClick={toggleTheme}>
        Tema: {theme === "light" ? "🌞 Light" : "🌙 Dark"}
      </button>

      <h1>
        {usersList.length > 0 ? "Utenti trovati" : "Accedi alla Dashboard"}
      </h1>

      {usersList.length === 0 ? (
        <LoginButtons
          onLoginFree={() => login(false)}
          onLoginVip={() => login(true)}
        />
      ) : (
        <UsersGrid
          users={usersList}
          notifications={notifications}
          markAsRead={markAsRead}
          logout={logout}
        />
      )}
    </div>
  );
};

export default Dashboard;
