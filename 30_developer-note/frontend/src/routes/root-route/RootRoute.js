import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
import style from './style.module.css';

const RootRoute = () => {
  return (
    <>
      <div className={`container-fluid ${style.header}`}>
        <Header />
      </div>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default RootRoute;
