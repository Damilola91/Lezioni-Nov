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

      <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
        <option value="all">All Platforms</option>
        <option value="PC">PC</option>
        <option value="PlayStation">PlayStation</option>
        <option value="Xbox">Xbox</option>
        <option value="Switch">Switch</option>
        <option value="Mobile">Mobile</option>
      </select>

      <label>
        Minimum Rating: {minRating}
        <input
          type="range"
          min="1"
          max="10"
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
        />
      </label>

      <label>
        <input
          type="checkbox"
          checked={wishlist}
          onChange={(e) => setWishlist(e.target.checked)}
        />
        Just wishlist
      </label>
    </div>
  );
};

export default GameFilters;
