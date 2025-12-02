import { useState } from "react";

const getRatingColor = (r) => {
  if (r >= 8) return "green";
  if (r >= 6) return "yellow";
  return "red";
};

const GameCard = ({ game }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="card" onClick={() => setOpen(!open)}>
      <img src={game.coverUrl} alt={game.title} />
      <h3>{game.title}</h3>
      <p>{game.genre}</p>
      <span className={`rating ${getRatingColor(game.rating)}`}>
        {game.rating}
      </span>
      <span className={`badge ${game.status}`}>{game.status}</span>

      {open && (
        <div className="details">
          <p>PlatForm: {game.platform}</p>
          <p>Year: {game.year}</p>
          <p>Hours played: {game.hoursPlayed}</p>
          <p>Difficulty: {game.difficulty}</p>
          <p>Price: {game.price}</p>
        </div>
      )}
    </div>
  );
};

export default GameCard;
