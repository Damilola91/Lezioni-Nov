const GameFilters = ({
  genre,
  platform,
  minRating,
  wishlist,
  setGenre,
  setPlatform,
  setMinRating,
  setWishlist,
}) => {
  return (
    <div className="filters">
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="all">All Genres</option>
        <option value="RPG">RPG</option>
        <option value="FPS">FPS</option>
        <option value="Adventure">Adventure</option>
        <option value="Sports">Sports</option>
        <option value="Platform">Platform</option>
      </select>
    </div>
  );
};

export default GameFilters;
