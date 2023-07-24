import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from "./index1.jsx"
import Index1 from "./index.jsx"
const App = () => {
  return (
    <div>
         <Routes>
         <Route path='/' element={<Index/>}/>
             <Route path='/route' element={<Index1/>}/>
         </Routes>
    </div>
  );
}

export default App;
