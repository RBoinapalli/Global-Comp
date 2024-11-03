import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Jobs from "./pages/Jobs";
import Admin from "./pages/Admin";


const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={(<Layout />)}>
          <Route index element={(<Home />)} />
          <Route path="about" element={(<About />)} />
          <Route path="services" element={(<Services />)} />
          <Route path="jobs" element={(<Jobs />)} />
          <Route path="admin" element={(<Admin />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(
 <App />
);