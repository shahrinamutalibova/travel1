import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from "./components/index1"
import Index1 from "./components/index"
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
