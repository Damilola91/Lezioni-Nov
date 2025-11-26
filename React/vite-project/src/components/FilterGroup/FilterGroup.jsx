import Button from "../Button/Button";

const FilterGroup = ({ filter, setFilter }) => {
  return (
    <div className="filter-group">
      <Button
        variant={filter === "all" ? "primary" : "ghost"}
        className={`filter-btn ${filter === "all" ? "filter-btn--active" : ""}`}
        onClick={() => setFilter("all")}
      >
        Tutti
      </Button>

      <Button
        variant={filter === "active" ? "primary" : "ghost"}
        className={`filter-btn ${
          filter === "active" ? "filter-btn--active" : ""
        }`}
        onClick={() => setFilter("active")}
      >
        Attivi
      </Button>

      <Button
        variant={filter === "completed" ? "primary" : "ghost"}
        className={`filter-btn ${
          filter === "completed" ? "filter-btn--active" : ""
        }`}
        onClick={() => setFilter("completed")}
      >
        Completati
      </Button>
    </div>
  );
};

export default FilterGroup;
