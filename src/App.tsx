import React from 'react';
import { Main } from './pages/home/Home';
import { Services } from './pages/services/services';
import { Orders } from './pages/orders/orders';
import { Contacts } from './pages/contacts/contacts';
import { Information } from './pages/information/information';
import { Route, Routes } from 'react-router-dom';
import { Layuot } from './Layout/Layout';





function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Layuot />}>
          <Route index element={<Main />} />
          <Route path='services' element={<Services />} />
          <Route path='orders' element={<Orders />} />
          <Route path='information' element={<Information />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>
      </Routes>


    </>
  );
}

export default App;
//   <Routes>
//        <Route path='/information' Component={Information} />
//        <Route path='/contacts' Component={Contacts} />
//        <Route path='/orders' Component={Orders} />
//       <Route path='/main' Component={Main} />
//       <Route path='/services' Component={Services} />

//   </Routes>



