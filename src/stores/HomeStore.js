import { create } from 'zustand'
import axios from 'axios'
import Home from '../pages/Home'
import debounce from '../helper/debounce'
const HomeStore = create((set) => ({
     coins:[],
     trending:[],
     query:'',
     data:[],

     setQuery : (e) => {
      set({query : e.target.value})
      HomeStore.getState().searchCoins();
     } ,

     searchCoins: debounce(async() =>{
      const {query , trending} = HomeStore.getState()
      if(query.length > 2){
      const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
      const coins = res.data.coins.map(coin => {
         return {
             name: coin.name,
             image: coin.large,
            id: coin.id,
         }
      })
      set({coins : coins});
    }
    else{
        set({coins : trending})
    }
     },500),
     
     fetchCoins: async()=>{
        const[res, btcRes] = await Promise.all([
          axios.get("https://api.coingecko.com/api/v3/search/trending"),
          axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr`),
        ])
        const btcPrice = btcRes.data.bitcoin.inr
        const coins = res.data.coins.map(coin => {
          return {
            name: coin.item.name,
            image: coin.item.large,
            id: coin.item.id,
            priceBTC:coin.item.price_btc.toFixed(10),
            priceInr:(coin.item.price_btc*btcPrice).toFixed(10),
          }
        })
        set({coins : coins , trending : coins}) // to set them in states
     }
     
}))

export default HomeStore