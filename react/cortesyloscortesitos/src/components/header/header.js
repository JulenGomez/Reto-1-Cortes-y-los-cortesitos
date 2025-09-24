import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-item">
          <Link to="/contrato">Firma contrato</Link>
          <Link to="/competencias">Competencias individuales</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
