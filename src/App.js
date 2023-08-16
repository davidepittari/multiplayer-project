//REACT
import React, { useEffect, useState } from 'react'

//REACT-ROUTER
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom';

//CSS
import './App.css';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route exact path="/" index element={<Main/>} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

const Root = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default App;
