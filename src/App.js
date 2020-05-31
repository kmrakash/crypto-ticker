import React, { useState , useEffect } from 'react';
import './App.css';

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
      setBtcPrice(response.price);
      if(response.product_id === 'ETH-USD')
      setEthPrice(response.price);
      if(response.product_id === 'LTC-USD')
      setLtcPrice(response.price);
    
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
      <h1>Bitcoin Price: ${btcPrice}</h1>
      <h1>Litecoin Price: ${ltcPrice}</h1>
      <h1>Ethereum Price: ${ethPrice}</h1>

    </div>
  );
}

export default App;
