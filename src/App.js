import React from 'react';
import { Navigate, Route, Routes} from "react-router-dom"
import {routes} from './routes/routes'
import { useState } from 'react';
import { CalcContext } from './context/context';
import { CALC_ROUTE } from './utils/consts';

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
            <Route path='*' element={<Navigate to={CALC_ROUTE}/>}/>
          </Routes>
        </CalcContext.Provider>
    </div>
  );
}

export default App;