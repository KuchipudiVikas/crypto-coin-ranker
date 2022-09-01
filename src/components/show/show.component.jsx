import './show.styles.css'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
const CoinInfo = () => {

    const location = useLocation();
    const coin = location.state;

    return (
        <>
            <center><h1><div><img src={coin.iconUrl} alt="" />{coin.name}</div></h1></center>

            <h5>Rank: #{coin.rank}</h5>
            <p>BTC Price: {coin.btcPrice}  Market Cap: {coin.marketCap}</p>
            <p>trend</p>
            {
                coin.sparkline.map((spark) => {
                    return (
                        <li>{spark}</li>
                    )
                })
            }
            <Link to='/'>All Coins</Link>
            {console.log(coin)}
        </>
    )
}

export default CoinInfo;