import React, { useState , useEffect } from 'react';
import './App.css';
import Ticker from './Ticker';

function App() {
const [subcription, setSubscription] = useState({
  
  "type": "subscribe",
    "channels": [{ "name": "ticker", "product_ids": ["BTC-USD", "ETH-USD", "LTC-USD"] }]
});

const [btcPrice, setBtcPrice] = useState("");
const [ethPrice, setEthPrice] = useState("");
const [ltcPrice, setLtcPrice] = useState("");

const ws = new WebSocket('wss://ws-feed.pro.coinbase.com');



const initWebSocket = () => {
  ws.onopen = () => {
    ws.send(JSON.stringify(subcription));
  };

  ws.onmessage = (event) => {
    const response = JSON.parse(event.data);
    if(response.product_id === 'BTC-USD')
      setBtcPrice(response);
      if(response.product_id === 'ETH-USD')
      setEthPrice(response);
      if(response.product_id === 'LTC-USD')
      setLtcPrice(response);
    
  }

  ws.onclose = () => {
    initWebSocket();
  };
};

useEffect(()=>{
  initWebSocket();
});





  return (
    <div className="App">
    <div className="App-header">
      <h1>Cryptocurrency Ticker</h1>
    </div>
      <div className="Container">
        <Ticker name="BitCoins"  {...btcPrice}/>
        <Ticker name="LiteCoins"  {...ltcPrice} />
        <Ticker name="EthereumCoins"  {...ethPrice} /> 
      </div>
    </div>
  );
}

export default App;
