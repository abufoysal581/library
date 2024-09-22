import React, { useState,useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from './components/protected';
import Admins from './pages/Admins';
import Books from './pages/Books';
import Users from './pages/Users';
import Borrowedoverdue from './pages/Borrowedoverdue';
import Stock from './pages/Stock';
import Book_catagory from './pages/Book_catagory';


function App() {
  const isSignedIn = localStorage.getItem("access_token") || false;
  return (
    <BrowserRouter>
        <Routes>
         
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          
          <Route path= {"/"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Dashboard /> 
           </Protected>
           } />
        
          <Route path= {"/admins"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Admins /> 
           </Protected>
           } />
        
          <Route path= {"/books"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Books /> 
           </Protected>
           } />
        
          <Route path= {"/users"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Users /> 
           </Protected>
           } />
          <Route path= {"/borrowedoverdue"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Borrowedoverdue /> 
           </Protected>
           } />
          <Route path= {"/stock"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Stock /> 
           </Protected>
           } />

          <Route path= {"/book_catagory"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Book_catagory /> 
           </Protected>
           } />
        
        </Routes>
      </BrowserRouter>

    
  );
}

export default App;
