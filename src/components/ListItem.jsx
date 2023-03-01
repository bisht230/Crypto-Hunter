import React from "react";
import { Link } from "react-router-dom";

export default function ListItem({ coin }) {
  return (
      <div className="crypto-home2"> 
      <Link to={`/${coin.id}`}>
      <span className="crypto-home-img"><img src={coin.image}/></span>
        <span className="crypto-home-name">{coin.name}</span>
        { coin.priceBTC && <span className="crypto-home-price">
            <span className="crypto-home-btc">{coin.priceBTC} BTC</span>
            <span className="crypto-home-inr">({coin.priceInr} Inr)</span>
            </span>}
      </Link>
    </div>
  );
}
