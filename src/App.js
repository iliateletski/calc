import React from 'react';
import { Route, Routes} from "react-router-dom"
import {routes} from './router/routes'
import { useState } from 'react';
import { CalcContext } from './context/context';

function App() {
  const[isCalc, setIsCalc] = useState(true);

  return (
    <div className='App'>
        <CalcContext.Provider
          value={{
            isCalc,
            setIsCalc,
          }}
        >
          <Routes>
            {routes.map(route => 
              <Route 
                key={route.path} 
                path={route.path} 
                element={route.element}
              />
            )}
          </Routes>
        </CalcContext.Provider>
    </div>
  );
}

export default App;