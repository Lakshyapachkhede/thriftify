import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    if (!query.trim()) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* ✅ Home Link */}
        <Link className="navbar-brand" to="/">
          Thriftify
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">

            {/* ✅ Use Link instead of <a> */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/sell">Sell</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/profile/32">Profile</Link>
            </li>

          </ul>

          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search clothes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit" onClick={handleSubmit}>
              Search
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
}