import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import React from 'react';
import { __Provider } from './components';
import App from './App';
import { Login } from './components';

export default function Main() {
  return (
      <BrowserRouter>
    <__Provider>
        <Routes>
          <Route path="/" element={<App />}>

            <Route path="login" element={<Login />} />
            {/* <Route index element={<Login />} /> */}
            <Route
              path="/fake"
              element={
                <div>
                  <h1>Test</h1>
                </div>
              }
            />
          </Route>
        </Routes>
    </__Provider>
      </BrowserRouter>
  );
}
