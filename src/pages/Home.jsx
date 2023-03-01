import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import HomeStore from '../stores/HomeStore'

export default function Home() {
    const store = HomeStore()
    React.useEffect(() => {
        store.fetchCoins();
    },[])
  return (
    <div>
      <Header/>
      <header className='home-search'>
        <div className='width'>
       <h2>Search for a coin</h2>
       <input type="text" value={store.query} onChange={store.setQuery}></input>  
       </div>
      </header>
      <div className='crypto-home'>
      <div className='width'>
      <h2>Trending coins</h2>  
      <div className='crypto-home-list'>
      {store.coins.map(coin => {
         return (
            <ListItem key={coin.id} coin={coin}></ListItem>
         )
      })}
      </div>
      </div>
      </div>
    </div>
  )
}
