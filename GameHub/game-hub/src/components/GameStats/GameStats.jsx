const GameStats = ({ stats, total, visible }) => {
  return (
    <div className="stats">
      <div className="stat">
        Visible: {visible} / {total}
      </div>
      <div className="stat">Total hours played: {stats.totalHours}</div>
      <div className="stat">
        Average Rating: {stats.averageRating.toFixed(1)}
      </div>

      <div className="stat-line">
        <span>Completed: {stats.statusCount.completed}</span>
        <span> On Going: {stats.statusCount["on-going"]}</span>
        <span>Whishlist: {stats.statusCount.wishlist}</span>
        <span>Abbandoned: {stats.statusCount.abbandoned}</span>
      </div>
    </div>
  );
};

export default GameStats;
