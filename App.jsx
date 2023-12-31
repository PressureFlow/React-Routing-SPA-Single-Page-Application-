import './App.css';

import React from 'react';

import Header from './Header/Header';
import Main from './Main/Main';
import Players from './Players/Players';
import Teams from './Teams/Teams';
import Games from './Games/Games';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={ <Main/> }/>
        <Route path='/players' element={<Players/>}/>
        <Route path='/teams' element={<Teams/>}/>
        <Route path='/games' element={<Games/>}/>
      </Routes>

      
    </>
  );
};

export default App;
