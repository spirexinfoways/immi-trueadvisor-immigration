import React from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full pt-2">
      <div className="container mx-auto px-4 lg:px-4">
        <TopBar />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
