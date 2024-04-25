import React, { useEffect, useState } from 'react'
import Header from '../components/common/header'
import TabsComponent from '../components/dashboard/tabs'
import axios from 'axios';
import Search from '../components/dashboard/search';
import PaginationComponent from '../components/dashboard/pagination';
import Loader from '../components/common/loader';
import BackToTop from '../components/common/backToTop';
import { get150Coins } from '../functions/get150Coins';

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [paginatedcoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  }

  const handlePageChange = (event, value) => {
    setPage(value);
    const previousIndex = (value - 1) * 10;
    setPaginatedCoins(filteredCoins.slice(previousIndex, previousIndex + 10))
  };

  const filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await get150Coins();
    if(myCoins){
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
  }
  return (
    <>
      <Header />
      <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent coins={search ? filteredCoins : paginatedcoins} />
          {!search && (
            <PaginationComponent page={page} handlePageChange={handlePageChange} />
          )}
        </div>
      )}
    </>
  )
}

export default DashboardPage
