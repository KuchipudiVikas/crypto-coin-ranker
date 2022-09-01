import { Link } from 'react-router-dom';

const Coins = ({ data }) => {
    return (
        <>{
            data.data.coins.map((coin) => {
                return (
                    <>
                        {
                            <p>{coin.rank}<Link to={`/coin/${coin.name}`} state={coin} ><p>{coin.name} - {coin.price}</p></Link></p>

                        }

                    </>
                )
            })
        }</>
    )
}

export default Coins;