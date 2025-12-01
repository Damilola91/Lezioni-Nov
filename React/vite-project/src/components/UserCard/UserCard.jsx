const UserCard = ({ user }) => {
  const { id, name, username, avatar, age, followers, isVip, hobbies } = user;

  return (
    <div key={id} className="user-card">
      <img src={avatar} className="avatar" alt={name} />
      <h3>{name}</h3>
      <p>@{username}</p>
      <p>Età: {age}</p>
      <p>Followers: {followers}</p>
      <p>Status: {isVip ? "⭐ VIP" : "Free"}</p>
      {isVip && <p>Hobby: {hobbies.join(", ")}</p>}
    </div>
  );
};

export default UserCard;
