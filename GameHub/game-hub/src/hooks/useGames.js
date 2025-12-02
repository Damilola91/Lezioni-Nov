import { useState } from "react";
import { games as mockGames } from "../data/games";

export default function useGames() {
  const [games] = useState(mockGames);

  const [activeTab, setActiveTab] = useState("all");
  const [genreFilter, setGenreFilter] = useState("all");
  const [platformFilter, setPlatformFilter] = useState("all");
  const [minRating, setMinRating] = useState(1);
  const [onlyWishlist, setOnlyWishlist] = useState(false);
  const [searchText, setSearchText] = useState("");

  const getFilteredGames = () => {
    return games.filter((game) => {
      if (activeTab !== "all" && game.status !== activeTab) return false;
      if (genreFilter !== "all" && game.genre !== genreFilter) return false;
      if (platformFilter !== "all" && game.platform !== platformFilter)
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
      completed: list.filter((g) => g.status === "completed").length,
      "on-going": list.filter((g) => g.status === "on-going").length,
      wishlist: list.filter((g) => g.status === "wishlist").length,
      abbandoned: list.filter((g) => g.status === "abbandoned").length,
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
