import GameCard from "../GameCard/GameCard";

const GameList = ({ games }) => {
  return !games.length ? (
    <p className="empty">No games found...</p>
  ) : (
    <div className="grid">
      {games.map((g) => (
        <GameCard key={g.id} game={g} />
      ))}
    </div>
  );
};

export default GameList;
