import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SiteLayout from './components/siteLayout';
import Post from './pages/post';
import Home from './pages/home';
import Error from './pages/Error';

export default function App() {
  return (
    <>
      <Routes>
        {/* Outlet waala main parent */}
        <Route path='/' element={<SiteLayout />}>
          {/* Yeh andar Outlet mein render honge */}
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='post-country' element={<Post />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}
