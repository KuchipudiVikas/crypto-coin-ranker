import { Routes, Route } from 'react-router-dom'
import Home from './routes/home'
import CoinInfo from './components/show/show.component';
const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/coin/:name' element={<CoinInfo />}></Route>
    </Routes>
  );
}

export default App;
