import React, { useState, Suspense } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

const cityComponents: { [key: string]: React.LazyExoticComponent<React.FC> } = {
  India: React.lazy(() => import("./cityInfo/India")),
  "New York": React.lazy(() => import("./cityInfo/NewYork")),
  "San Francisco": React.lazy(() => import("./cityInfo/SanFrancisco")),
  Tokyo: React.lazy(() => import("./cityInfo/Tokyo")),
  London: React.lazy(() => import("./cityInfo/London")),
};

function App() {
  const [selectedCity, setSelectedCity] = useState<string>("India");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const handleCitySelect = (city: string) => setSelectedCity(city);
  const handleThemeToggle = () =>
    setTheme(theme === "light" ? "dark" : "light");

  const CityInfoComponent = cityComponents[selectedCity];

  return (
    <div className={`center-container ${theme}`}>
      <Navbar
        cities={Object.keys(cityComponents)}
        onCitySelect={handleCitySelect}
        theme={theme}
        onThemeToggle={handleThemeToggle}
        selectedCity={selectedCity}
      />
      <div className="info-card">
        <Suspense fallback={<div>Loading...</div>}>
          <CityInfoComponent />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
