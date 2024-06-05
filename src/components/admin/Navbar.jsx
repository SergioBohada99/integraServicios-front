import React from "react";
import img from "../../assets/logo.svg";
import "boxicons";
import { useState } from 'react';
import { useAuth } from '../AuthContext';
function Navbar({sidebarState,setSidebarState,setCurrentComp}) {

  const {logout,token} = useAuth();
  
  const toggleSidebar = () => {
    setSidebarState(!sidebarState);
  };

  const setUser = (e) => {
    e.preventDefault();
    setCurrentComp('Usuarios')
  }

  const setHome = (e) => {
    e.preventDefault();
    setCurrentComp('')
  }

  const setEmployee = (e) => {
    e.preventDefault();
    setCurrentComp('Empleados')
  }

  const setUnidad = (e) => {
    e.preventDefault();
    setCurrentComp('Unidad')
  }

  const setAyuda = (e) => {
    e.preventDefault();
    setCurrentComp('Ayuda')
  }


  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    console.log('Logout completado, token es:'+token);
  }


  return (
    <nav className={sidebarState ? 'sidebar': 'sidebar close'}>
      <header>
        <div className="image-text">
          <span className="image">
            <img src={img} alt="logo" className="logo-img" />
          </span>
          <div className="text header-text">
            <span className="name">IntegraServicios</span>
            <span className="name_uni">Web App</span>
          </div>
        </div>
        <i className='bx bx-chevron-right toggle' onClick={toggleSidebar}></i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <li className="search-box">
            <i className="bx bx-search icon"></i>
            <input type="search" placeholder="Buscar..." />
          </li>
          <ul className="menu-links">
            <li className="nav-link">
              <a href="#"  onClick={setHome}>
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Dashboard</span>
                </a>
            </li>
            <li className="nav-link">
              <a href="#" onClick={setUnidad}>
                <i className="bx bx-layer icon"></i>
                <span className="text nav-text">Unidades de servicio</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#" onClick={setUser}>
                <i className="bx bx-user-circle icon" ></i>
                <span className="text nav-text">Usuarios</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#" onClick={setEmployee}>
                <i className="bx bx-hard-hat icon"></i>
                <span className="text nav-text">Empleados</span>
              </a>
            </li>
            <li className="nav-link">
            <a href="#" onClick={setAyuda}>
                <i className="bx bx-help-circle icon" ></i>
                <span className="text nav-text">Ayuda</span>
                </a>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="nav-link">
            <a onClick={handleLogout}>
              <i className="bx bx-exit icon" ></i>
              <span className="text nav-text">Salir</span>
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
