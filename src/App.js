import React from 'react';
import { Route, Routes, Link } from "react-router-dom"
import {routes} from './router/routes'
import { useState } from 'react';

function App() {


  return (
    <div className='App'>
        <Routes>
          {routes.map(route => 
            <Route 
              key={route.path} 
              path={route.path} 
              element={route.element}
            />
          )}
        </Routes>
    </div>
  );
}

export default App;