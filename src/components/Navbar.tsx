interface NavbarProps {
  cities: string[];
  onCitySelect: (city: string) => void;
  theme: "light" | "dark";
  onThemeToggle: () => void;
  selectedCity: string;
}

function Navbar({
  cities,
  onCitySelect,
  theme,
  onThemeToggle,
  selectedCity,
}: NavbarProps) {
  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-cities">
        {cities.map((city) => (
          <button
            key={city}
            className={selectedCity === city ? "active" : ""}
            onClick={() => onCitySelect(city)}
          >
            {city}
          </button>
        ))}
      </div>
      <button className="theme-toggle" onClick={onThemeToggle}>
        {theme === "light" ? "🌙 " : "☀️"}
      </button>
    </nav>
  );
}

export default Navbar;
