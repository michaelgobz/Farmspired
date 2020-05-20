/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable implicit-arrow-linebreak */
import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBBtn
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </Router>
  );
}
export default App;
