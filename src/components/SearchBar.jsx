import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection') && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location, showSearch]); // fixed dependency

  if (!showSearch || !visible) return null;

  return (
    <div className='border-t border-b bg-gray-50 text-center'>

      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4'>

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 outline-none bg-transparent text-sm'
        />

        <img
          src={assets.search_icon}
          alt="search"
          className='w-4'
        />

      </div>

      <img
        src={assets.cross_icon}
        alt="close"
        className='w-5 cursor-pointer inline-block'
        onClick={() => setShowSearch(false)}
      />

    </div>
  );
};

export default SearchBar;