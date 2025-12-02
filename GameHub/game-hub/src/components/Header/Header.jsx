import { Gamepad2 } from "lucide-react";

const Header = ({ total, search, onSearch }) => {
  return (
    <header className="header">
      <h1>
        <Gamepad2 /> Game Hub
      </h1>

      <div className="header-right">
        <span className="badge">Giochi totali: {total}</span>

        <input
          type="text"
          placeholder="Cerca gioco..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="search"
        />
      </div>
    </header>
  );
};

export default Header;
