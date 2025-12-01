import UserCard from "../UserCard/UserCard";
import FooterActions from "../FooterActions/FooterActions";

const UsersGrid = ({ users, notifications, markAsRead, logout }) => (
  <div className="users-grid">
    {users.map((user) => (
      <UserCard key={user.id} user={user} />
    ))}

    <FooterActions
      notifications={notifications}
      markAsRead={markAsRead}
      logout={logout}
    />
  </div>
);

export default UsersGrid;
