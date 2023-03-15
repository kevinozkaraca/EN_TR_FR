import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <ul>
          <NavLink to="/">
            <li> Home - Ana sayfa - Accueil</li>
          </NavLink>
          <NavLink to="/sentences">
            <li> Sentences - Cûmleler - Phrases</li>
          </NavLink>
          <NavLink to="/units">
            <li> Units - Üniteler - Unités</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
