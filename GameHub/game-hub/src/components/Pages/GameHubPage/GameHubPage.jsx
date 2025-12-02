import useGames from "../../../hooks/useGames";
import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import GameFilters from "../../GameFilters/GameFilters";
import GameStats from "../../GameStats/GameStats";
import GameList from "../../GameList/GameList";

const GameHubPage = () => {
  const {
    games,
    activeTab,
    setActiveTab,
    genreFilter,
    setGenreFilter,
    platformFilter,
    setPlatformFilter,
    minRating,
    setMinRating,
    onlyWishlist,
    setOnlyWishlist,
    searchText,
    setSearchText,
    getFilteredGames,
    getStats,
  } = useGames();

  const filteredGames = getFilteredGames();
  const stats = getStats(filteredGames);
  return (
    <>
      <Header
        total={games.length}
        search={searchText}
        onSearch={setSearchText}
      />

      <Navigation active={activeTab} onChange={setActiveTab} />

      <GameFilters
        genre={genreFilter}
        platform={platformFilter}
        wishlist={onlyWishlist}
        setGenre={setGenreFilter}
        setPlatform={setPlatformFilter}
        setWishlist={setOnlyWishlist}
        setMinRating={setMinRating}
        minRating={minRating}
      />

      <GameStats
        stats={stats}
        total={games.length}
        visible={filteredGames.length}
      />

      <GameList games={filteredGames} />
    </>
  );
};

export default GameHubPage;
