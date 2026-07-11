import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from '../common/ScrollToTopButton';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="relative min-h-screen font-sans flex flex-col">
      <ScrollRestoration />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;
