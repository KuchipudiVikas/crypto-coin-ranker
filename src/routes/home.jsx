import Footer from "../components/footer/footer.component";
import Coins from "../components/coins/coins.component";
import { useState, useEffect } from 'react'
import Loading from "../components/loading/loading.component";
const Home = () => {

    const [data, setData] = useState({ data: { coins: [] } });
    const [isLoading, setIsLoading] = useState(true);
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
                .then(response => {
                    console.log(response)
                    setData(response)
                    setIsLoading(false)
                })
                .catch(err => console.error(err));


        }

        getData();
    }

        , []);
    if (isLoading) {
        for (let i = 0; i < 5; i++) {
            return <center><h1>loading</h1></center>
        }
    }

    return (
        <>
            <Coins data={data} />
            <Footer />
        </>

    )

}

export default Home;