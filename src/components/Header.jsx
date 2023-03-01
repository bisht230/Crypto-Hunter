import React from "react";
import { Link } from "react-router-dom";

export default function Header({ back }) {
  return (
    <header className="header">
      <div className="width">
        {back && (
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
              width="24"
            >
              <path
                fill="currentColor"
                d="M405.739 981.739 0 576l405.739-405.739L467.479 233l-343 343 343 343-61.74 62.739Z"
              />
            </svg>
          </a>
        )}
        <h1>
          <Link to="/">Crypto Hunter</Link>
        </h1>
      </div>
    </header>
  );
}
