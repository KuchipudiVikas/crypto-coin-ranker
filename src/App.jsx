import { useState, useEffect } from 'react'
const App = () => {
  const [data, setData] = useState({ data: { coins: { name: "" } } });
  useEffect(() => {
    const getData = async () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ddd91bd90fmsh4f56c17f86db0bdp1c50acjsn11ac76127c4c',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      };

      await fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
        .then(response => response.json())
        .then(response => setData(response))
        .catch(err => console.error(err));


    }

    getData();
  }

    , []);

  return (
    <div className="App">
      <h1>it is working</h1>{
        data.data.coins.map((coin) => {
          return (
            <>
              {
                <h2>{coin.name}</h2>
              }
            </>
          )
        })

      }
    </div>
  );
}

export default App;
