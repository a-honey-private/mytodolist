import React from 'react';
import Homepage from "./pages/Homepage";
import page1 from "./pages/page1";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';
function App() {
  return (
    <BrowserRouter>
    <Helmet
      titleTemplate="%s - Todo"
      defaultTitle="Todo">
      <meta name="description" content="A Todo" data-react-helmet="true"/>
    </Helmet>
    <Routes>
      <Route path="/home" element={<Homepage/>}></Route>
      <Route path="/page1" element={<page1/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
