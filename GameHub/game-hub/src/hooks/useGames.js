import { useState } from "react";
import { games as mockGames } from "../data/games";

export default function useGames() {
  const [games] = useState(mockGames);

  const [activeTab, setActiveTab] = useState("tutti");
  const [genreFilter, setGenreFilter] = useState("tutti");
  const [platformFilter, setPlatformFilter] = useState("tutti");
  const [minRating, setMinRating] = useState(1);
  const [onlyWishlist, setOnlyWishlist] = useState(false);
  const [searchText, setSearchText] = useState("");

  const getFilteredGames = () => {
    return games.filter((game) => {
      if (activeTab !== "tutti" && game.status !== activeTab) return false;
      if (genreFilter !== "tutti" && game.genre !== genreFilter) return false;
      if (platformFilter !== "tutti" && game.platform !== platformFilter)
        return false;
      if (game.rating < minRating) return false;
      if (onlyWishlist && game.status !== "wishlist") return false;

      const search = searchText.toLowerCase();
      if (
        search &&
        !game.title.toLowerCase().includes(search) &&
        !game.genre.toLowerCase().includes(search)
      ) {
        return false;
      }

      return true;
    });
  };

  const getStats = (list) => {
    const totalHours = list.reduce((sum, g) => sum + g.hoursPlayed, 0);
    const averageRating =
      list.reduce((sum, g) => sum + g.rating, 0) / (list.length || 1);

    const statusCount = {
      completato: list.filter((g) => g.status === "completato").length,
      "in-corso": list.filter((g) => g.status === "in-corso").length,
      wishlist: list.filter((g) => g.status === "wishlist").length,
      abbandonato: list.filter((g) => g.status === "abbandonato").length,
    };

    return { totalHours, averageRating, statusCount };
  };

  return {
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
  };
}
