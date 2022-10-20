import axios from "axios";
import Coin from '../../components/coin'
import styles from '../../styles/Coin.module.css'

export default function CoinList({ coinData }) {
  console.log(coinData);
  const coins = coinData.coins;
  return (
    <div className = {styles.container}>
      <h1>Coin List </h1>
      <div className = {styles.coinContainer}>
        {coins.map((coin) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div key={coin.id}>
              <img src={coin.icon} width={100} height={100} />
              <h3>{coin.name}</h3>
              <p>{coin.price}</p>
            </div>
          );
        })}
        </div>
    </div>
  );
}
export const getStaticProps = async () => {
  const result = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );
  return {
    props: {
      coinData: result.data,
    },
    revalidate: 10,
  };
};
