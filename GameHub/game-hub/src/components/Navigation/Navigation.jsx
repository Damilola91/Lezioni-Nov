const Navigation = ({ active, onChange }) => {
  const tabs = ["all", "completed", "on-going", "wishlist", "abbandoned"];

  return (
    <nav className="tabs">
      {tabs.map((t) => (
        <button
          key={t}
          className={active === t ? "tab active" : "tab"}
          onClick={() => onChange(t)}
        >
          {t}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
