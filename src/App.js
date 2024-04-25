import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import DashboardPage from './pages/dashboard';
import CoinPage from './pages/coin';
import ComparePage from './pages/compare';
import WatchListPage from './pages/watchlist';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/watchlist" element={<WatchListPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
